<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Авторизация</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">

</head>

<body>
    <div class="login_intro">
        <div class="container_login">
            <div class="head">
                <img src="{{ asset('images/Logo.png') }}" class="logo">
            </div>
            <form method="POST" action="{{ route('adminLoginForm') }}" class="login_body d-b">
                @csrf
                <input type="hidden" name="endRoute" class="endRoute" value="admin">
                <div class="label ml-20 mb-8">
                    ИИН
                </div>
                <input type="number" class="label input mb-20" name="iin" required autofocus
                    placeholder="02030456789" autocomplete="new-password">
                <div class="label ml-20 mb-8">
                    Пароль
                </div>
                <div class="relative mb-8">
                    <input type="password" id="password" class="label input" placeholder="****************"
                        name="password" required autocomplete="new-password">
                    <img src="{{ asset('svg/open_eye.svg') }}" class="eye c-p" onclick="togglePasswordVisibility()">
                </div>
                @if (!$errors->any())
                    <p class="info_txt">
                        *Регистрация доступно только в администрации учебного центра “King’s school”
                    </p>
                @else
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li class="info_txt"> {{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif
                <button type="submit" class="login_btn ma-0 d-f a-c j-c c-p">
                    Войти
                </button>
            </form>
        </div>
    </div>
</body>
<script>
    function togglePasswordVisibility() {
        var passwordInput = document.getElementById("password");
        var eyeIcon = document.querySelector(".eye");
        passwordInput.type === "password" ? (passwordInput.type = "text", eyeIcon.src =
            "{{ asset('svg/close_eye.svg') }}") : (passwordInput.type = "password", eyeIcon.src =
            "{{ asset('svg/open_eye.svg') }}");
    }
</script>

</html>
