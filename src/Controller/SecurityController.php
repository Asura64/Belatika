<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Security\Authenticator\LoginFormAuthenticator;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Contracts\Translation\TranslatorInterface;

class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="security_login")
     * @param AuthenticationUtils $authenticationUtils
     * @return Response
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
         if ($this->getUser()) {
             return $this->redirectToRoute('app_shop_index');
         }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    /**
     * @Route("/logout", name="security_logout")
     */
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

    /**
     * @Route("/register", name="security_register")
     * @param Request $request
     * @param UserPasswordEncoderInterface $encoder
     * @param TranslatorInterface $translator
     * @return Response
     */
    public function register(
        Request $request,
        UserPasswordEncoderInterface $encoder,
        TranslatorInterface $translator
    ): Response
    {
        $user = new User();

        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            //If HoneyPot caught spambot, redirect homapage
            if ($user->getSalt()) {
                return $this->redirectToRoute('app_shop_index');
            }
            $user->setPassword($encoder->encodePassword($user, $user->getPlainPassword()));
            $user->setConfirmationToken($this->generateToken());
            $user->eraseCredentials();

            $this->getEm()->persist($user);
            $this->getEm()->flush();

            $this->fastMail(
                $translator->trans('registration.email.subject', ['%username%' => $user->getPseudo()]),
                $user->getEmail(),
                'mail/security/register.html.twig',
                [
                    'pseudo' => $user->getPseudo(),
                    'confirmationUrl' => $this->generateUrl(
                        'security_register_confirmation', ['token' => $user->getConfirmationToken()],
                        UrlGeneratorInterface::ABSOLUTE_URL
                    )
                ]
            );

            return $this->render('security/check_email.html.twig', ['user' => $user]);
        }

        return $this->render('security/register.html.twig', ['form' => $form->createView()]);
    }

    /**
     * @Route("/register/confirmation/{confirmationToken}", name="security_register_confirmation")
     * @param string $confirmationToken
     * @param Request $request
     * @param TranslatorInterface $translator
     * @param GuardAuthenticatorHandler $guardHandler
     * @param LoginFormAuthenticator $formAuthenticator
     * @return Response
     */
    public function registerConfirmation(
        string $confirmationToken,
        Request $request,
        TranslatorInterface $translator,
        GuardAuthenticatorHandler $guardHandler,
        LoginFormAuthenticator $formAuthenticator
    ): Response
    {
        $em = $this->getEm();
        $user = $em->getRepository(User::class)->findOneBy(['confirmation_token' => $confirmationToken]);

        if ($user && !$user->isEnabled()) {
            $user->setEnabled(true);
            $em->flush();
            $this->addFlash('success', $translator->trans('registration.confirmed'));
            return $guardHandler->authenticateUserAndHandleSuccess(
                $user,
                $request,
                $formAuthenticator,
                'main'
            );
        } else {
            $message = $user ?
                'registration.error.already_enabled' :
                'registration.error.invalid_token';

            $this->addFlash('danger', $translator->trans($message));
            return $this->redirectToRoute('app_shop_index');
        }
    }

    /**
     * @Route("/profile/edit", name="security_profile_edit")
     * @param Request $request
     * @param UserPasswordEncoderInterface $encoder
     * @param TranslatorInterface $translator
     * @return Response
     */
    public function editProfile(
        Request $request,
        UserPasswordEncoderInterface $encoder,
        TranslatorInterface $translator
    )
    {
        $user = $this->getUser();
        if (!$user instanceof User) {
            throw new AccessDeniedException('This user does not have access to this section.');
        }

        $form = $this->createForm(UserType::class, $user);
        $form
            ->remove('plainPassword')
            ->remove('salt')
            ->add('plainPassword', PasswordType::class, ['label' => 'form.password']);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if ($encoder->isPasswordValid($user, $user->getPlainPassword())) {
                $user->eraseCredentials();
                $this->getEm()->persist($user);
                $this->getEm()->flush();
                $this->addFlash('success', $translator->trans('profile.edit.success'));
                return $this->redirectToRoute('security_profile_show');
            } else {
                $this->addFlash('danger', $translator->trans('form.error.wrong_password'));
            }
        }

        return $this->render('security/profile_edit.html.twig', ['form' => $form->createView()]);
    }

    /**
     * @Route("/profile", name="security_profile_show")
     */
    public function profile()
    {
        return $this->render('security/profile_show.html.twig');
    }

    private function generateToken(): string
    {
        return rtrim(strtr(base64_encode(random_bytes(32)), '+/', '-_'), '=');
    }
}
