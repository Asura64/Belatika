<?php


namespace App\Service;


class Config
{
    private string $appEnv;
    private string $adminMail;
    private string $devMail;
    private string $ownerMail;
    private string $stripePublicKey;
    private string $stripeSecretKey;
    private string $stripeSecretWebhook;
    private string $paypalPublicKey;
    private string $paypalSecretKey;
    private string $facebookPublicKey;
    private string $facebookSecretKey;
    private string $googlePublicKey;
    private string $googleSecretKey;
    private string $algoliaId;
    private string $algoliaKey;
    private string $etsyKey;
    private string $etsySecret;
    private string $etsyUserId;
    private string $etsyShopId;
    private string $etsyAccessToken;
    private string $etsyAccessTokenSecret;
    private string $laPosteSecretKey;

    public function __construct(
        string $appEnv,
        string $adminMail,
        string $devMail,
        string $ownerMail,
        string $stripePublicKey,
        string $stripeSecretKey,
        string $stripeSecretWebhook,
        string $paypalPublicKey,
        string $paypalSecretKey,
        string $facebookPublicKey,
        string $facebookSecretKey,
        string $googlePublicKey,
        string $googleSecretKey,
        string $algoliaId,
        string $algoliaKey,
        string $etsyKey,
        string $etsySecret,
        string $etsyUserId,
        string $etsyShopId,
        string $etsyAccessToken,
        string $etsyAccessTokenSecret,
        string $laPosteSecretKey
    ) {
        $this->appEnv = $appEnv;
        $this->adminMail = $adminMail;
        $this->devMail = $devMail;
        $this->ownerMail = $ownerMail;
        $this->stripePublicKey = $stripePublicKey;
        $this->stripeSecretKey = $stripeSecretKey;
        $this->stripeSecretWebhook = $stripeSecretWebhook;
        $this->paypalPublicKey = $paypalPublicKey;
        $this->paypalSecretKey = $paypalSecretKey;
        $this->facebookPublicKey = $facebookPublicKey;
        $this->facebookSecretKey = $facebookSecretKey;
        $this->googlePublicKey = $googlePublicKey;
        $this->googleSecretKey = $googleSecretKey;
        $this->algoliaId = $algoliaId;
        $this->algoliaKey = $algoliaKey;
        $this->etsyKey = $etsyKey;
        $this->etsySecret = $etsySecret;
        $this->etsyUserId = $etsyUserId;
        $this->etsyShopId = $etsyShopId;
        $this->etsyAccessToken = $etsyAccessToken;
        $this->etsyAccessTokenSecret = $etsyAccessTokenSecret;
        $this->laPosteSecretKey = $laPosteSecretKey;
    }

    public function getAppEnv(): string
    {
        return $this->appEnv;
    }

    public function getAdminMail(): string
    {
        return $this->adminMail;
    }

    public function getDevMail(): string
    {
        return $this->devMail;
    }

    public function getOwnerMail(): string
    {
        return $this->ownerMail;
    }

    public function getStripePublicKey(): string
    {
        return $this->stripePublicKey;
    }

    public function getStripeSecretKey(): string
    {
        return $this->stripeSecretKey;
    }

    public function getStripeSecretWebhook(): string
    {
        return $this->stripeSecretWebhook;
    }

    public function getPaypalPublicKey(): string
    {
        return $this->paypalPublicKey;
    }

    public function getPaypalSecretKey(): string
    {
        return $this->paypalSecretKey;
    }

    public function getFacebookPublicKey(): string
    {
        return $this->facebookPublicKey;
    }

    public function getFacebookSecretKey(): string
    {
        return $this->facebookSecretKey;
    }

    public function getGooglePublicKey(): string
    {
        return $this->googlePublicKey;
    }

    public function getGoogleSecretKey(): string
    {
        return $this->googleSecretKey;
    }

    public function getAlgoliaId(): string
    {
        return $this->algoliaId;
    }

    public function getAlgoliaKey(): string
    {
        return $this->algoliaKey;
    }

    public function getEtsyKey(): string
    {
        return $this->etsyKey;
    }

    public function getEtsySecret(): string
    {
        return $this->etsySecret;
    }

    public function getEtsyUserId(): string
    {
        return $this->etsyUserId;
    }

    public function getEtsyShopId(): string
    {
        return $this->etsyShopId;
    }

    public function getEtsyAccessToken(): string
    {
        return $this->etsyAccessToken;
    }

    public function getEtsyAccessTokenSecret(): string
    {
        return $this->etsyAccessTokenSecret;
    }

    public function getLaPosteSecretKey(): string
    {
        return $this->laPosteSecretKey;
    }
}