<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CategoryRepository")
 */
class Category
{
    const IMAGE_PATH = 'img/resources/categories/';

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Item", mappedBy="category")
     */
    private $items;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Gedmo\Slug(fields={"name"})
     * @Groups({"item"})
     */
    private $slug;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"item"})
     */
    private $customers;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $image;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $metaDescription;

    /**
     * @ORM\Column(type="text")
     */
    private $shortDescription;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $googleCategory;

    public function __construct()
    {
        $this->items = new ArrayCollection();
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
     * @param array $filters
     * @return Collection|Item[]
     */
    public function getItems(array $filters = []): Collection
    {
        $filters = array_merge([
            'limit' => 0,
        ], $filters);

        $items = $this->items;

        if ($filters['limit']) {
            $items = $items->slice(0, $filters['limit']);
            $items = new ArrayCollection($items);
        }

        return $items;
    }

    public function addItem(Item $item): self
    {
        if (!$this->items->contains($item)) {
            $this->items[] = $item;
            $item->setCategory($this);
        }

        return $this;
    }

    public function removeItem(Item $item): self
    {
        if ($this->items->contains($item)) {
            $this->items->removeElement($item);
            // set the owning side to null (unless already changed)
            if ($item->getCategory() === $this) {
                $item->setCategory(null);
            }
        }

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

    public function getCustomers(): ?string
    {
        return $this->customers;
    }

    public function setCustomers(string $customers): self
    {
        $this->customers = $customers;

        return $this;
    }

    public function getNameCustomer(): ?string
    {
        return $this->name . ' - ' . $this->customers;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getImageWebPath()
    {
        return self::IMAGE_PATH.$this->image;
    }

    public function getMetaDescription(): ?string
    {
        return $this->metaDescription;
    }

    public function setMetaDescription(string $metaDescription): self
    {
        $this->metaDescription = $metaDescription;

        return $this;
    }

    public function getShortDescription(): ?string
    {
        return $this->shortDescription;
    }

    public function setShortDescription(string $shortDescription): self
    {
        $this->shortDescription = $shortDescription;

        return $this;
    }

    public function getGoogleCategory(): ?string
    {
        return $this->googleCategory;
    }

    public function setGoogleCategory(string $googleCategory): self
    {
        $this->googleCategory = $googleCategory;

        return $this;
    }
}
