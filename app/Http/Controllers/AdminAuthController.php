<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\AdminLoginRequest;
use App\Models\Log;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;

class AdminAuthController extends Controller
{
    protected $guard = 'web';

    public function adminLoginForm(AdminLoginRequest $request)
    {
        $iin = $request->iin;
        $password = $request->password;
        $user = User::query()->where('iin', $iin)->firstOr(function () {
            throw ValidationException::withMessages([
                'phone' => ['*Неверное имя пользователя или пароль. Проверьте правильность введенных данных']
            ]);
        });
        if (Hash('sha1', $password) !== $user->password) {
            throw ValidationException::withMessages([
                'password' => ['*Неверное имя пользователя или пароль. Проверьте правильность введенных данных']
            ]);
        }
        Auth::guard($this->guard)->login($user);

        if (Log::log_status()) {
            Log::create([
                'name' => 'Авторизовался',
                'type' => 1,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        return redirect()->route('admin.index');
        //        $token = Auth::attempt(['phone' => $phone, 'password' => $password])
        //        if (!$token) {
        //            throw ValidationException::withMessages([
        //                'password' => [__('auth.Phone or password is incorrect')]
        //            ]);
        //        }
        //        $user = Auth::user();
    }

    public function logout()
    {
        if (Log::log_status()) {
            Log::create([
                'name' => 'Разлогинился',
                'type' => 6,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        Auth::guard($this->guard)->logout();
        return redirect()->route('adminLoginShow');
    }
}
