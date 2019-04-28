<?php
namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use FOS\UserBundle\Model\User as BaseUser;

/**
 * @ORM\Entity
 * @ORM\Table(name="fos_user")
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    protected $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Address", inversedBy="deliveryUsers", cascade={"persist"})
     */
    private $deliveryAddress;

    /**
     * @return mixed
     */
    public function getBillingAddress()
    {
        return $this->billingAddress;
    }

    /**
     * @param mixed $billingAddress
     * @return User
     */
    public function setBillingAddress($billingAddress):User
    {
        $this->billingAddress = $billingAddress;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getDeliveryAddress()
    {
        return $this->deliveryAddress;
    }

    /**
     * @param mixed $deliveryAddress
     * @return User
     */
    public function setDeliveryAddress($deliveryAddress):User
    {
        $this->deliveryAddress = $deliveryAddress;
        return $this;
    }

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Address", inversedBy="billingUsers", cascade={"persist"})
     */
    private $billingAddress;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $realname;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $facebook_id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $google_id;

    public function __construct()
    {
        parent::__construct();
        $this->created_at = new \DateTime();
    }

    public function setUsername($username)
    {
        $this->setRealname($username);

        return parent::setUsername($username);
    }

    public function getRealname(): ?string
    {
        return $this->realname;
    }

    public function setRealname(?string $realname): self
    {
        $this->realname = $realname;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getFacebookId(): ?string
    {
        return $this->facebook_id;
    }

    public function setFacebookId(?string $facebook_id): self
    {
        $this->facebook_id = $facebook_id;

        return $this;
    }

    public function getGoogleId(): ?string
    {
        return $this->google_id;
    }

    public function setGoogleId(?string $google_id): self
    {
        $this->google_id = $google_id;

        return $this;
    }

    public function hasSocial():bool
    {
        return $this->getFacebookId() !== null || $this->getGoogleId() !== null;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function sameAddress(): bool
    {
        return $this->deliveryAddress === $this->billingAddress;
    }
}