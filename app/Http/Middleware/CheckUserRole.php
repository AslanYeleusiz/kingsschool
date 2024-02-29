<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckUserRole
{
    public function handle(Request $request, Closure $next, ...$roles)
    {
        $user = Auth::guard('web')->user();

        // Проверка наличия пользователя и соответствия его роли хотя бы одной из переданных
        if ($user && in_array($user->role_id, $roles)) {
            return $next($request);
        }

        // Если роль не соответствует, можно выполнить нужные действия, например, редирект
        return redirect('/')->with('error', 'У вас нет доступа к этому ресурсу.');
    }
}
