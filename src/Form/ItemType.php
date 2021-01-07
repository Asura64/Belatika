<?php

namespace App\Form;

use App\Entity\Category;
use App\Entity\Item;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ItemType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('category', EntityType::class, [
                'label' => 'Catégorie',
                'class' => Category::class,
                'choice_label' => 'name_customer',
            ])
            ->add('name', TextType::class, ['label' => 'Nom'])
            ->add('reference', IntegerType::class, ['label' => 'Référence'])
            ->add('description', TextareaType::class, ['label' => 'Description', 'attr' => ['class' => 'tinymce', 'rows' => 20]])
            ->add('metaDescription', TextareaType::class, ['required' => false, 'label' => 'Meta Description', 'attr' => ['rows' => 6]])
            ->add('price', NumberType::class, ['label' => 'Prix'])
            ->add('discount', NumberType::class, ['label' => '% Solde', 'required' => false])
            ->add('quantity', HiddenType::class, ['attr' => ['value' => 1]])
            ->add('visible', CheckboxType::class, ['label' => 'Visible', 'required' => false])
            ->add('images', CollectionType::class, [
                'entry_type' => ImageType::class,
                'block_name' => 'images',
                'prototype' => true,
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
                'required' => false,
                'label' => false,
            ])
            ->add('Enregistrer', SubmitType::class, ['attr' => ['class' => 'btn btn-sm bt-btn--primary float-right']])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Item::class,
        ]);
    }
}
