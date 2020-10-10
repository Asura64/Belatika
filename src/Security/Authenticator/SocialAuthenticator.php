<?php

namespace App\Security\Authenticator;


use App\Entity\User;
use App\Service\GoogleTranslator;
use Doctrine\ORM\EntityManagerInterface;
use KnpU\OAuth2ClientBundle\Client\OAuth2ClientInterface;
use KnpU\OAuth2ClientBundle\Security\Authenticator\SocialAuthenticator as KnpUOauthAuthenticator;
use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBag;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Encoder\EncoderFactory;
use Symfony\Component\Security\Core\Encoder\EncoderFactoryInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;

class SocialAuthenticator extends KnpUOauthAuthenticator
{
    /**
     * @var ClientRegistry
     */
    private $clientRegistry;
    /**
     * @var EntityManagerInterface
     */
    private $em;
    /**
     * @var EncoderFactory
     */
    private $encoderFactory;
    /**
     * @var array
     */
    private $socials;
    /**
     * @var string
     */
    private $currentSocial;
    /**
     * @var Request
     */
    private $request;
    /**
     * @var GoogleTranslator
     */
    private $googleTranslator;

    public function __construct(
        ClientRegistry $clientRegistry,
        EntityManagerInterface $em,
        EncoderFactoryInterface $encoderFactory,
        GoogleTranslator $googleTranslator
    )
    {
        $this->clientRegistry = $clientRegistry;
        $this->em = $em;
        $this->encoderFactory = $encoderFactory;
        $this->socials = ['facebook', 'google'];
        $this->googleTranslator = $googleTranslator;
    }

    /**
     * Returns a response that directs the user to authenticate.
     *
     * This is called when an anonymous request accesses a resource that
     * requires authentication. The job of this method is to return some
     * response that "helps" the user start into the authentication process.
     *
     * Examples:
     *
     * - For a form login, you might redirect to the login page
     *
     *     return new RedirectResponse('/login');
     *
     * - For an API token authentication system, you return a 401 response
     *
     *     return new Response('Auth header required', 401);
     *
     * @param Request $request The request that resulted in an AuthenticationException
     * @param AuthenticationException|null $authException The exception that started the authentication process
     *
     * @return Response
     */
    public function start(Request $request, AuthenticationException $authException = null):Response
    {
        return new RedirectResponse('/connect/', Response::HTTP_TEMPORARY_REDIRECT);
    }

    /**
     * Does the authenticator support the given Request?
     *
     * If this returns false, the authenticator will be skipped.
     *
     * @param Request $request
     *
     * @return bool
     */
    public function supports(Request $request):bool
    {
        foreach ($this->socials as $social) {
            if($request->attributes->get('_route') === 'connect_'.$social.'_check') {
                $this->currentSocial = $social;
                return true;
            }
        }
        return false;
    }

    /**
     * Get the authentication credentials from the request and return them
     * as any type (e.g. an associate array).
     *
     * Whatever value you return here will be passed to getUser() and checkCredentials()
     *
     * For example, for a form login, you might:
     *
     *      return [
     *          'username' => $request->request->get('_username'),
     *          'password' => $request->request->get('_password'),
     *      ];
     *
     * Or for an API token that's on a header, you might use:
     *
     *      return ['api_key' => $request->headers->get('X-API-TOKEN')];
     *
     * @param Request $request
     *
     * @return mixed Any non-null value
     *
     * @throws \UnexpectedValueException If null is returned
     */
    public function getCredentials(Request $request)
    {
        $this->request = $request;
        return $this->fetchAccessToken($this->getSocialClient());
    }

    /**
     * Return a UserInterface object based on the credentials.
     *
     * The *credentials* are the return value from getCredentials()
     *
     * You may throw an AuthenticationException if you wish. If you return
     * null, then a UsernameNotFoundException is thrown for you.
     *
     * @param mixed $credentials
     * @param UserProviderInterface $userProvider
     *
     * @throws AuthenticationException
     * @throws \Exception
     *
     * @return UserInterface|null
     */
    public function getUser($credentials, UserProviderInterface $userProvider):?UserInterface
    {
        $socialUser = $this->getSocialClient()->fetchUserFromToken($credentials);
        /**
         * @var FlashBag $flashBag
         */
        $flashBag = $this->request->getSession()->getFlashBag();

        //Returns existing social user
        $existingUser = $this
            ->em
            ->getRepository(User::class)
            ->findOneBy([$this->currentSocial.'_id' => $socialUser->getId()]);
        if($existingUser) {
            $flashBag->add(
                'success',
                $this->googleTranslator->gTrans('Bienvenue, ').$existingUser->getUsername());
            return $existingUser;
        }

        //Or find user with matching email and upgrade it to social-type user
        $email = $socialUser->getEmail();
        $setSocialId = 'set' . ucfirst($this->currentSocial) . 'Id';
        $emailMatchingUser = $this->em->getRepository(User::class)->findOneBy(['email' => $email]);
        if($emailMatchingUser) {
            $emailMatchingUser
                ->$setSocialId($socialUser->getId())
                ->setRealname($socialUser->getName());
            $this->em->flush();
            $flashBag->add(
                'success',
                $this->googleTranslator->gTrans('Bienvenue, ').$emailMatchingUser->getUsername()
            );
            return $emailMatchingUser;
        }

        //Or register new user with social datas collected
        $user = new User();
        $encoder = $this->encoderFactory->getEncoder($user);
        $encodedPassword = $encoder->encodePassword($this->generatePass(), $user->getSalt());
        $user
            ->$setSocialId($socialUser->getId())
            ->setEmail($email)
            ->setRealname($socialUser->getName())
            ->setUsername($email)
            ->setEnabled(true)
            ->setPassword($encodedPassword);
        $this->em->persist($user);
        $this->em->flush();
        $flashBag->add(
            'success',
            $this->googleTranslator->gTrans('Votre compte a été créé. Bienvenue, ').$user->getUsername()
        );
        return $user;
    }

    /**
     * Called when authentication executed, but failed (e.g. wrong username password).
     *
     * This should return the Response sent back to the user, like a
     * RedirectResponse to the login page or a 403 response.
     *
     * If you return null, the request will continue, but the user will
     * not be authenticated. This is probably not what you want to do.
     *
     * @param Request $request
     * @param AuthenticationException $exception
     *
     * @return Response|null
     */
    public function onAuthenticationFailure(Request $request, AuthenticationException $exception):Response
    {
        $message = strtr($exception->getMessageKey(), $exception->getMessageData());

        return new Response($message, Response::HTTP_FORBIDDEN);
    }

    /**
     * Called when authentication executed and was successful!
     *
     * This should return the Response sent back to the user, like a
     * RedirectResponse to the last page they visited.
     *
     * If you return null, the current request will continue, and the user
     * will be authenticated. This makes sense, for example, with an API.
     *
     * @param Request $request
     * @param TokenInterface $token
     * @param string $providerKey The provider (i.e. firewall) key
     *
     * @return Response|null
     */
    public function onAuthenticationSuccess(Request $request, TokenInterface $token, $providerKey):?Response
    {
        return null;
    }

    /**
     * Returns the Client instance matching the current social
     *
     * @return OAuth2ClientInterface
     */
    private function getSocialClient():OAuth2ClientInterface
    {
        return $this->clientRegistry->getClient($this->currentSocial);
    }

    /**
     * Random password generation only for security purpose, will not be used by social-type users
     *
     * @return string
     * @throws \Exception
     */
    private function generatePass():string
    {
        return rtrim(strtr(base64_encode(random_bytes(10)), '+/', '-_'), '=');
    }
}