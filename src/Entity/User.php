<?php

namespace App\Entity;

use App\Repository\UserRepository;
use DateTimeImmutable;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @ORM\Table(name="`user`")
 * @UniqueEntity("email", message="field.already_exists.email")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private int $id;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Address", inversedBy="user", cascade={"persist", "remove"})
     * @ORM\JoinColumn(onDelete="SET NULL", nullable=true)
     */
    private ?Address $address = null;

    /**
     * @ORM\OneToMany(targetEntity="CustomerOrder", mappedBy="user", orphanRemoval=true)
     */
    private Collection $customerOrders;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="field.required")
     * @Assert\Length(
     *     min="3",
     *     minMessage="user.pseudo.min"
     * )
     */
    private string $pseudo;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @Assert\Email(message="The email '{{ value }}' is not a valid email.")
     * @Assert\NotBlank(message="field.required")
     */
    private string $email;

    /**
     * @ORM\Column(type="string")
     */
    private string $password;

    /**
     * @Assert\Length(
     *     min="6",
     *     minMessage="user.password.min"
     * )
     */
    private ?string $plainPassword = null;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $enabled = false;

    /**
     * @ORM\Column(type="array")
     */
    private array $roles = [];

    /**
     * @ORM\Column(type="string", length=180)
     */
    private ?string $confirmation_token = null;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private ?string $salt = null;

    /**
     * @ORM\Column(type="datetime")
     */
    private DateTimeInterface $created_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private DateTimeInterface $last_login;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private ?string $facebook_id = null;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private ?string $google_id = null;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $newsletter = false;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $suggestNewsletter = true;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $hasNewsletterGift = false;

    public function __construct()
    {
        $this->created_at = new DateTimeImmutable();
        $this->customerOrders = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAddress(): ?Address
    {
        return $this->address;
    }

    public function setAddress(Address $address): self
    {
        $this->address = $address;

        return $this;
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

    public function getPseudo(): ?string
    {
        return $this->pseudo;
    }

    public function setPseudo(string $pseudo): self
    {
        $this->pseudo = $pseudo;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): ?string
    {
        return $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getPlainPassword(): ?string
    {
        return $this->plainPassword;
    }

    public function setPlainPassword(string $plainPassword): self
    {
        $this->plainPassword = $plainPassword;

        return $this;
    }

    public function isEnabled(): bool
    {
        return $this->enabled;
    }

    public function setEnabled(bool $enabled): self
    {
        $this->enabled = $enabled;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        if (empty($roles)) {
            $roles[] = 'ROLE_USER';
        }

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    public function getConfirmationToken(): ?string
    {
        return $this->confirmation_token;
    }

    public function setConfirmationToken(?string $confirmation_token): self
    {
        $this->confirmation_token = $confirmation_token;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt(): ?string
    {
        return $this->salt;
    }

    public function setSalt(?string $salt): self
    {
        $this->salt = $salt;

        return $this;
    }

    public function getCreatedAt(): ?DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getLastLogin(): ?DateTimeInterface
    {
        return $this->last_login;
    }

    public function setLastLogin(DateTimeInterface $last_login): self
    {
        $this->last_login = $last_login;

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

    public function getNewsletter(): ?bool
    {
        return $this->newsletter;
    }

    public function setNewsletter(bool $newsletter): self
    {
        $this->newsletter = $newsletter;

        return $this;
    }

    public function toggleNewsletter(): self
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

    public function isAdmin(): bool
    {
        return in_array('ROLE_ADMIN', $this->roles);
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
         $this->plainPassword = null;
    }
}
