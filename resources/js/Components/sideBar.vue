<template>
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <a href="/admin" class="brand-link">
            <span class="d-flex align-items-center justify-content-between">
                <span class="d-flex align-items-center">
                    <img src="../../../public/images/logo.svg" alt="Главная страница" class="brand-image img-circle elevation-3" style="opacity: .8">
                    <span class="brand-text font-weight-light">King`s School</span>
                </span>
                <a class="nav-link w-auto" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
            </span>
        </a>

        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img :src="'../../../storage/files/' + $page.props.auth.user.avatar" class="img-circle elevation-2" alt="User Image" style="width: 35px; height: 35px">
                </div>
                <div class="info">
                    <a href="#" class="d-block">{{ $page.props.auth.user.fio }}</a>
                </div>
            </div>


            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
                    <template v-for="(menu_item, index) in menu_items" :key="'menu_item' + index">
                        <template v-if="menu_item.role.includes($page.props.auth.user.role_id)">
                            <li class="nav-item " v-if="menu_item.childs_items" :class="{
                        'menu-open':
                            menu_item.menu_active.includes(
                                currentRoute
                            ),
                    }">
                                <a href="#" class="nav-link" :class="{
                        active: menu_item.menu_active.includes(
                            currentRoute
                        ),
                    }">
                                    <i class="nav-icon fas fa-solid" :class="[menu_item.font]"></i>
                                    <p>
                                        {{ menu_item.name }}
                                        <i class="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul class="nav nav-treeview">
                                    <li class="nav-item ml-2" v-for="(
                                        childs_item, child_index
                                    ) in menu_item.childs_items" :key="'child' + child_index">
                                        <Link :href="route(childs_item.route_name)" class="nav-link" :class="{
                        active: childs_item.menu_active.includes(
                            currentRoute
                        ),
                    }">
                                        <i class="nav-icon fas" :class="childs_item.font"></i>
                                        <p>{{ childs_item.name }}</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item" v-else>
                                <Link :href="route(menu_item.route_name)" class="nav-link" :class="{
                        active: menu_item.menu_active.includes(
                            currentRoute
                        ),
                    }">
                                <i class="nav-icon fas" :class="menu_item.font"></i>
                                <p>{{ menu_item.name }}</p>
                                </Link>
                            </li>
                        </template>
                    </template>
                    <li class="nav-item">
                        <a class="nav-link" :href="route('logout')">
                            <i class="nav-icon fas fa-sign-out-alt"></i>
                            <p>Шығу</p>
                        </a>
                    </li>
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>
</template>

<script>
    import {
        Link
    } from "@inertiajs/inertia-vue3";
    export default {
        components: {
            Link
        },
        data() {
            return {
                menu_items: [{
                        name: "Главная страница",
                        font: "fa-home",
                        route_name: "admin.index",
                        menu_active: ["admin.index"],
                        role: [1, 2],
                    },
                    {
                        name: "Пользователи",
                        font: "fas fa-bars",
                        menu_active: [
                            "admin.users",
                            "admin.students",
                            "admin.teachers",
                        ],
                        role: [1, 2],
                        route_name: "",
                        childs_items: [{
                                name: "Общий список",
                                font: "fa-users",
                                route_name: "admin.users.index",
                                menu_active: ["admin.users", "admin.eduOrders"],
                                role: [1, 2],
                            },
                            {
                                name: "Студенты",
                                font: "fa-graduation-cap",
                                route_name: "admin.students.index",
                                menu_active: ["admin.students"],
                                role: [1, 2, 3],
                            },
                            {
                                name: "Преподаватели",
                                font: "fa-chalkboard-teacher",
                                route_name: "admin.teachers.index",
                                menu_active: ["admin.teachers"],
                                role: [1, 2],
                            },
                        ],
                    },
                    {
                        name: "Мои студенты",
                        font: "fa-graduation-cap",
                        route_name: "admin.students.index",
                        menu_active: ["admin.students"],
                        role: [3],
                    },
                    {
                        name: "Расписания",
                        font: "fa-calendar-alt",
                        route_name: "admin.schedule.index",
                        menu_active: ["admin.schedule"],
                        role: [1, 2, 3],
                    },
                    {
                        name: "История платежей",
                        font: "fa-file-invoice-dollar",
                        route_name: "admin.paidHistories.index",
                        menu_active: ["admin.paidHistories"],
                        role: [1, 2],
                    },
                    {
                        name: "Расходы",
                        font: "fa-file-invoice-dollar",
                        route_name: "admin.expenses.index",
                        menu_active: ["admin.expenses"],
                        role: [1, 2],
                    },
                    {
                        name: "Пәндер",
                        font: "fa-book",
                        route_name: "admin.subjects.index",
                        menu_active: ["admin.subjects"],
                        role: [1, 2],
                    },
                    {
                        name: "Типы",
                        font: "fa-solid fa-list",
                        menu_active: [
                            "admin.trainTypes",
                            "admin.courseTypes",
                            "admin.roles",
                            "admin.filials",
                        ],
                        role: [1],
                        route_name: "",
                        childs_items: [{
                                name: "Типы Обучения",
                                font: "fa-university",
                                route_name: "admin.trainTypes.index",
                                menu_active: ["admin.trainTypes"],
                            },
                            {
                                name: "Типы Курсов",
                                font: "fa-laptop-code",
                                route_name: "admin.courseTypes.index",
                                menu_active: ["admin.courseTypes"],
                            },
                            {
                                name: "Рөлдер",
                                font: "fa-dice-four",
                                route_name: "admin.roles.index",
                                menu_active: ["admin.roles"],
                            },
                            {
                                name: "Филиал",
                                font: "fa-hotel",
                                route_name: "admin.filials.index",
                                menu_active: ["admin.filials"],
                            },
                        ],
                    },
                ],
            }
        },
        mounted() {
            $('[data-widget="treeview"]').each(function() {
                adminlte.Treeview._jQueryInterface.call($(this), "init");
            });
        },
        computed: {
            currentRoute() {
                let currentRoute = route().current().split(".");
                currentRoute.pop();
                return currentRoute.join(".");
            },
        },
    }

</script>


<style scoped></style>
