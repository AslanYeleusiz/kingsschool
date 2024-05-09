<template>
    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <a href="/admin" class="nav-link">Главная страница</a>
            </li>
        </ul>

           
       
        <!-- Right navbar links -->
        <!-- <ul class="navbar-nav ml-auto">
            <div class="custom-control custom-switch">
               <input type="checkbox" v-model="darkmode" class="custom-control-input" id="customSwitch1" true-value=1 false-value=0 />
               <label class="custom-control-label" for="customSwitch1">Тема ({{darkmode}})</label>
            </div>
        </ul> -->
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                    <i class="fas fa-expand-arrows-alt"></i>
                </a>
            </li>
        </ul>
        
    </nav>
    <!-- /.navbar -->
</template>

<script>
    export default {
        data() {
            return {
                darkmode: 0,
            }
        },
        watch: {
            darkmode(e){
              if (e == 1) {
                // Добавляем класс `dark-mode` к элементу <body>
                document.body.classList.add('dark-mode');
                  
              } else {
                  document.body.classList.remove('dark-mode');
              }
            }
        }
    }
</script>