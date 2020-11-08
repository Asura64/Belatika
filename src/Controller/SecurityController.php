<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Security\LoginFormAuthenticator;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
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
                $translator->trans('registration.subject', ['%username%' => $user->getPseudo()], 'mails'),
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

    private function generateToken(): string
    {
        return rtrim(strtr(base64_encode(random_bytes(32)), '+/', '-_'), '=');
    }
}
