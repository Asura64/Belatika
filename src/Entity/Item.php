<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ItemRepository")
 */
class Item
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"item"})
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Category", inversedBy="items")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"item"})
     */
    private $category;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Image", mappedBy="item", cascade={"persist"}, orphanRemoval=true)
     * @Groups({"item"})
     */
    private $images;

    /**
     * @ORM\OneToMany(targetEntity="CustomerOrderLine", mappedBy="item")
     */
    private $customerOrderLines;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"item"})
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Gedmo\Slug(fields={"name"})
     * @Groups({"item"})
     */
    private $slug;

    /**
     * @ORM\Column(type="integer")
     */
    private $reference;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="float")
     * @Groups({"item"})
     */
    private $price;

    /**
     * @Groups({"item"})
     */
    private $discountPrice;

    /**
     * @ORM\Column(type="smallint")
     * @Groups({"item"})
     */
    private $quantity;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @ORM\Column(type="smallint")
     * @Groups({"item"})
     */
    private int $discount = 0;

    /**
     * @Groups({"item"})
     */
    private $link;

    /**
     * @Groups({"item"})
     */
    private $removeLink;

    /**
     * @ORM\Column(type="boolean")
     */
    private $visible = true;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $metaDescription;

    public function __construct()
    {
        $this->images = new ArrayCollection();
        $this->created_at = date_create();
        $this->discount = 0;
        $this->customerOrderLines = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getReference(): ?int
    {
        return $this->reference;
    }

    public function setReference(int $reference): self
    {
        $this->reference = $reference;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

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

    public function getDiscount(): ?int
    {
        return $this->discount;
    }

    public function setDiscount(?int $discount): self
    {
        $this->discount = $discount;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * @return Collection|Image[]
     */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImage($image): self
    {
        if ($image instanceof Image && !$this->images->contains($image)) {
            $image->setItem($this);
            $this->images[] = $image;
        }

        return $this;
    }

    public function removeImage(Image $image): self
    {
        if ($this->images->contains($image)) {
            $this->images->removeElement($image);
            // set the owning side to null (unless already changed)
            if ($image->getItem() === $this) {
                $image->setItem(null);
            }
        }

        return $this;
    }

    public function getDiscountPrice()
    {
        $this->discountPrice = $this->price * (100 - $this->discount)/100;
        return $this->discountPrice;
    }

    public function getVisible(): ?bool
    {
        return $this->visible;
    }

    public function setVisible(bool $visible): self
    {
        $this->visible = $visible;

        return $this;
    }

    /**
     * @return string
     */
    public function getLink()
    {
        return $this->link;
    }

    /**
     * @param string $link
     * @return Item
     */
    public function setLink($link)
    {
        $this->link = $link;
        return $this;
    }

    /**
     * @return string
     */
    public function getRemoveLink()
    {
        return $this->removeLink;
    }

    /**
     * @param string $removeLink
     * @return Item
     */
    public function setRemoveLink($removeLink)
    {
        $this->removeLink = $removeLink;
        return $this;
    }

    public function getMetaDescription(): ?string
    {
        return $this->metaDescription;
    }

    public function setMetaDescription(?string $metaDescription): self
    {
        $this->metaDescription = $metaDescription;

        return $this;
    }

    public function getAutoMetaDescription($onSale = false)
    {
        $price = $onSale ? $this->getDiscountPrice() : $this->getPrice();
        $category = $this->getCategory()->getName();
        $customers = $this->getCategory()->getCustomers();

        return
            "Découvrez "
            . lcfirst($this->name)
            ." à "
            . number_format($price, 2, ',', ' ')
            . "€ parmis nos "
            . lcfirst($category) . ' ' . lcfirst($customers)
            . ' dans la boutique de bijoux Belatika. Paiement sécurisé et livraison gratuite.';
    }

    /**
     * @return Collection|CustomerOrderLine[]
     */
    public function getCustomerOrderLines(): Collection
    {
        return $this->customerOrderLines;
    }

    public function hasValidOrders(): bool
    {
        foreach ($this->customerOrderLines as $customerOrderLine) {
            if ($customerOrderLine->getCustomerOrder()->getIsValid()) {
                return true;
            }
        }
        return false;
    }

    public function addCustomerOrderLine(CustomerOrderLine $customerOrderLine): self
    {
        if (!$this->customerOrderLines->contains($customerOrderLine)) {
            $this->customerOrderLines[] = $customerOrderLine;
            $customerOrderLine->setItem($this);
        }

        return $this;
    }

    public function removeCustomerOrderLine(CustomerOrderLine $customerOrderLine): self
    {
        if ($this->customerOrderLines->contains($customerOrderLine)) {
            $this->customerOrderLines->removeElement($customerOrderLine);
            // set the owning side to null (unless already changed)
            if ($customerOrderLine->getItem() === $this) {
                $customerOrderLine->setItem(null);
            }
        }

        return $this;
    }
}
