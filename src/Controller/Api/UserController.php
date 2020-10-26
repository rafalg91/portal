<?php

namespace App\Controller\Api;

use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
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
}
