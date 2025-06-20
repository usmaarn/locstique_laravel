<?php

namespace App\Services;

use App\Http\Requests\CreateUserRequest;
use App\Models\User;

class AuthService
{
    public function register(CreateUserRequest $request): void
    {
        $validated = $request->validated();

        $user = new User();
        $user->setName($validated["firstName"], $validated["lastName"]);
        $user->email = $validated["email"];
        $user->setPassword($validated["password"]);
        $user->save();
    }

}
