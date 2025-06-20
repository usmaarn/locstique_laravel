<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AuthController;

Route::get('/', [HomeController::class, "home"])->name('home');
Route::get('/shop', [HomeController::class, "shop"])->name('shop');

//Auth Routes
Route::get("/register", [AuthController::class, "registerPage"])->name("register");
Route::post("/register", [AuthController::class, "register"])->name("register");

Route::get("/login", [AuthController::class, "loginPage"])->name("login");
Route::post("/login", [AuthController::class, "login"])->name("login");
