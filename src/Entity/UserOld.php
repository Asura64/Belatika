<?php
namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use FOS\UserBundle\Model\User as BaseUser;

/**
 * @ORM\Entity
 * @ORM\Table(name="fos_user")
 */
class UserOld extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    protected $id;

    /**
     * @var Address
     * @ORM\OneToOne(targetEntity="App\Entity\Address", inversedBy="user", cascade={"persist", "remove"})
     * @ORM\JoinColumn(onDelete="SET NULL")
     */
    private $address;

    /**
     * @return Address
     */
    public function getAddress(): ?Address
    {
        return $this->address;
    }

    /**
     * @param Address $address
     * @return User
     */
    public function setAddress(Address $address):User
    {
        $this->address = $address;
        return $this;
    }

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

    /**
     * @ORM\OneToMany(targetEntity="CustomerOrder", mappedBy="user", orphanRemoval=true)
     */
    private $customerOrders;

    /**
     * @ORM\Column(type="boolean")
     */
    private $newsletter = false;

    /**
     * @ORM\Column(type="boolean")
     */
    private $suggestNewsletter = true;

    /**
     * @ORM\Column(type="boolean")
     */
    private $hasNewsletterGift = false;

    public function __construct()
    {
        parent::__construct();
        $this->created_at = date_create();
        $this->customerOrders = new ArrayCollection();
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

    public function getUsername($stripMail = false)
    {
        $username = parent::getUsername();
        if ($stripMail) {
            $username = preg_replace('#^(.*)@.*$#', '$1', $username);
        }
        return $username;
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
        return $this->billingAddress === null
            || $this->deliveryAddress === null
            || (
                $this->billingAddress->getFullAddress() === $this->deliveryAddress->getFullAddress()
                && $this->billingAddress->getAdditional() === $this->deliveryAddress->getAdditional()
            );
    }

    /**
     * @return Collection|CustomerOrder[]
     */
    public function getCustomerOrders(): Collection
    {
        return $this->customerOrders;
    }

    public function addCustomerOrder(CustomerOrder $customerOrder): self
    {
        if (!$this->customerOrders->contains($customerOrder)) {
            $this->customerOrders[] = $customerOrder;
            $customerOrder->setUser($this);
        }

        return $this;
    }

    public function removeOrder(CustomerOrder $customerOrder): self
    {
        if ($this->customerOrders->contains($customerOrder)) {
            $this->customerOrders->removeElement($customerOrder);
            // set the owning side to null (unless already changed)
            if ($customerOrder->getUser() === $this) {
                $customerOrder->setUser(null);
            }
        }

        return $this;
    }

    public function isAdmin()
    {
        return in_array('ROLE_ADMIN', $this->roles);
    }

    public function getNewsletter(): ?bool
    {
        return $this->newsletter;
    }

    public function setNewsletter(bool $newsletter): self
    {
        $this->newsletter = $newsletter;

        return $this;
    }

    public function toggleNewsletter()
    {
        $this->newsletter = !$this->newsletter;

        return $this;
    }

    public function getSuggestNewsletter(): ?bool
    {
        return $this->suggestNewsletter;
    }

    public function setSuggestNewsletter(bool $suggestNewsletter): self
    {
        $this->suggestNewsletter = $suggestNewsletter;

        return $this;
    }

    public function hasNewsletterGift(): ?bool
    {
        return $this->hasNewsletterGift;
    }

    public function setHasNewsletterGift(bool $hasNewsletterGift): self
    {
        $this->hasNewsletterGift = $hasNewsletterGift;

        return $this;
    }
}