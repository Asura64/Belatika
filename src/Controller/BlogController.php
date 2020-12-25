<?php


namespace App\Controller;


use App\Entity\BlogArticle;
use App\Entity\BlogComment;
use App\Entity\Item;
use App\Entity\User;
use App\Service\ImageLoader;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

/**
 * @Route("/blog")
 */
class BlogController extends AbstractController
{
    /**
     * @Route("/")
     * @return Response
     */
    public function index()
    {
        $blogArticles = $this->getDoctrine()->getManager()->getRepository(BlogArticle::class)->findAllWithComments();

        $this->breadcrumb[] = ['title' => 'Blog'];

        return $this->render('blog/index.html.twig', ['blogArticles' => $blogArticles]);
    }

    /**
     * @Route("/{slug}")
     * @param BlogArticle $blogArticle
     * @return Response
     */
    public function article(BlogArticle $blogArticle)
    {
        if (!$blogArticle->getIsPublished() && !$this->isAdmin()) {
            return $this->redirectToRoute('app_blog_index');
        }

        $references = [];
        $items = $this->getDoctrine()->getRepository(Item::class)->findAll();
        foreach ($items as $item) {
            $references[] = $item->getReference();
        }

        $participants = [];
        foreach ($blogArticle->getBlogComments() as $blogComment) {
            preg_match('#(\d{3,})#', $blogComment->getContent(), $matches);
            if (preg_match('#https://belatika\.com/bijoux/(femme|homme)#', $blogComment->getContent())
                || array_intersect($matches, $references)
            ) {
                $participants[$blogComment->getUser()->getId()] = true;
            }
        }

        $this->breadcrumb[] = ['title' => 'Blog', 'url' => $this->generateUrl('app_blog_index')];
        $this->breadcrumb[] = ['title' => $blogArticle->getTitle()];


        return $this->render('blog/article.html.twig', [
            'blogArticle' => $blogArticle,
            'participants' => $participants,
        ]);
    }

    /**
     * @Route("/{slug}/comment", methods={"POST"})
     * @param BlogArticle $blogArticle
     * @param Request $request
     * @return JsonResponse
     */
    public function commentBlogArticle(BlogArticle $blogArticle, Request $request)
    {
        $response = new \stdClass();
        $content = $request->get('content');
        $user = $this->getUser();
        if (empty($content) || !$user instanceof User) {
            $success = false;
        } else {
            $blogComment = new BlogComment();
            $blogComment
                ->setUser($user)
                ->setBlogArticle($blogArticle)
                ->setContent($content);
            $em = $this->getDoctrine()->getManager();
            $em->persist($blogComment);
            $em->flush();
            $success = true;
            $response->content = $content;
            $response->username = $user->getUsername();
            $response->deleteUrl = $this->generateUrl('app_blog_deleteblogcomment', ['id' => $blogComment->getId()], UrlGeneratorInterface::ABSOLUTE_URL);
            $response->date = $blogComment->getPostedAt()->format('d/m/Y H\\hi');
        }

        $response->success = $success;

        return new JsonResponse($response);
    }

    /**
     * @Route("/delete-comment/{id}", methods={"DELETE"})
     * @param BlogComment $blogComment
     * @return JsonResponse
     */
    public function deleteBlogComment(BlogComment $blogComment)
    {
        $response = new \stdClass();
        $response->success = false;

        $user = $this->getUser();
        $allowedToDelete = $blogComment->belongsTo($user) || $user->isAdmin();
        if (!$allowedToDelete) {
            return new JsonResponse($response);
        }

        $em = $this->getDoctrine()->getManager();
        $em->remove($blogComment);
        $em->flush();

        $response->success = true;
        return new JsonResponse($response);
    }
}