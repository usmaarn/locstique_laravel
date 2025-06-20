<?php

namespace App\Http\Controllers;

use App\Services\AuthService;
use App\Services\UserService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function __construct(
        protected AuthService $authService,
    ){}

    public function registerPage()
    {
        return Inertia::render("auth/register");
    }

    public function register(Request $request)
    {

    }

    public function loginPage()
    {
        return Inertia::render("auth/login");
    }

    public function login(Request $request)
    {

    }

}
