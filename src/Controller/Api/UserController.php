<?php

namespace App\Controller\Api;

use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\User;

class UserController extends AbstractController
{
    private $em;
    private $userRep;

    public function __construct(EntityManagerInterface $em, UserRepository $userRep)
    {
        $this->em = $em;
        $this->userRep = $userRep;
    }

    /**
     * @Route("/api/users", name="user")
     */
    public function users()
    {
        $users = $this->userRep->findAll();

        return new JsonResponse($users);
    }

    /**
     * @Route("/api/users/add", format="json", name="addUser")
     * @Method("POST")
     */
    public function addUser(Request $request, UserPasswordEncoderInterface $encoder)
    {
        $request->getContent();

        $user = new User();
        $user->setName($request->get('name'));
        $user->setEmail($request->get('email'));
        $user->setPassword($encoder->encodePassword($user, $request->get('password')));
        $user->setRoles(['ROLE_USER']);

        $this->em->persist($user);
        $this->em->flush();

        $users = $this->em->getRepository(User::class)->findAll();

        return new JsonResponse($users);
    }
}
