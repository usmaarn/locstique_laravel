<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function home(): Response {
        return Inertia::render("home");
    }

    public function shop(): Response {
        return Inertia::render("shop");
    }
}
