<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ImageRepository")
 * @ORM\HasLifecycleCallbacks
 */
class Image
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"item"})
     */
    private $id;

    /**
     * @var Item
     * @ORM\ManyToOne(targetEntity="App\Entity\Item", inversedBy="images")
     * @ORM\JoinColumn(nullable=true, onDelete="CASCADE")
     */
    private $item;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"item"})
     */
    private $alt;

    /**
     * @ORM\Column(type="string", length=4)
     * @Groups({"item"})
     */
    private $ext;

    /**
     * @Groups({"item"})
     */
    private $cachePath;

    /**
     * @var UploadedFile
     */
    private $file;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAlt(): ?string
    {
        return $this->alt;
    }

    public function setAlt(string $alt): self
    {
        $this->alt = $alt;

        return $this;
    }

    public function getExt(): ?string
    {
        return $this->ext;
    }

    public function setExt(string $ext): self
    {
        $this->ext = $ext;

        return $this;
    }

    public function getItem(): ?Item
    {
        return $this->item;
    }

    public function setItem(?Item $item): self
    {
        $this->item = $item;

        return $this;
    }

    public function getAbsolutePath()
    {
        return $this->getUploadRootDir().$this->makeFileName();
    }

    public function getWebPath(): string
    {
        $webPath = $this->getUploadDir().$this->makeFileName();

        return file_exists($webPath) ? $webPath : 'img/resources/image-not-found.png';
    }

    public function getFile(): ?UploadedFile
    {
        return $this->file;
    }

    public function setFile(UploadedFile $file): self
    {
        $this->file = $file;
        return $this;
    }

    /**
     * @return string
     */
    public function getCachePath()
    {
        return $this->cachePath;
    }

    /**
     * @param string $cachePath
     * @return Image
     */
    public function setCachePath($cachePath)
    {
        $this->cachePath = $cachePath;
        return $this;
    }

    /**
     * @ORM\PrePersist()
     * @ORM\PreUpdate()
     */
    public function preUpload()
    {
        if ($this->file instanceof UploadedFile) {
            $this->ext = $this->file->guessExtension();
            $this->alt = $this->item->getName();
        }
    }

    /**
     * @ORM\PostPersist()
     * @ORM\PostUpdate()
     */
    public function upload()
    {
        if ($this->file instanceof UploadedFile) {
            $this->file->move($this->getUploadRootDir(), $this->makeFileName());
        }
    }

    protected function getUploadRootDir()
    {
        return realpath(__DIR__.'/../../public/'.$this->getUploadDir()).'/';
    }

    protected function getUploadDir()
    {
        return 'img/uploads/';
    }

    protected function makeFileName()
    {
        return $this->id.'.'.$this->ext;
    }
}
