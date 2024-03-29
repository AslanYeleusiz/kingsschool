<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link href="{{ asset('css/fontawesome-free/css/all.min.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/overlayScrollbars.min.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/adminlte.min.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/style.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/onlyBootstrapModal.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/daterangepicker.css') }}" rel="stylesheet" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @routes
    <script type="text/javascript" src="{{ asset('js/jquery-36.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/overlayScrollbars.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/adminlte.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/sweetalert.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('js/moment.min.js') }}"></script>
    <script src="{{ asset('js/tempusdominus-bootstrap-4.min.js') }}"></script>
    <script src="{{ asset('js/Chart.min.js') }}"></script>
    @vite('resources/sass/app.scss')
    @inertiaHead
</head>

<body class="hold-transition sidebar-mini layout-fixed">
    @inertia
    @vite('resources/js/app.js')
</body>

</html>
