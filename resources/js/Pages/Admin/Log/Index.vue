<template>

    <head>
        <title>Админ панель | Логи</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Логи</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a :href="route('admin.index')">
                                <i class="fas fa-dashboard"></i>
                                Главная страница
                            </a>
                        </li>
                        <li class="breadcrumb-item active">
                            Логи
                        </li>
                    </ol>
                </div>
            </div>
        </template>
        <template #header>
            <div class="buttons d-flex align-items-center">

                <Link class="btn btn-danger mr-2" :href="route('admin.logs.index')">
                <i class="fa fa-trash"></i> Фильтрді тазалау
                </Link>
                {{ log_status }}
                <div class="btn btn-warning" v-if="log_status">
                    Отключить логгирование
                </div>
                <div class="btn btn-success" v-else>
                    Включить логгирование
                </div>
                <div v-if="loading" class="spinner-border text-primary mx-3" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </template>
        <div class="container-fluid">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-12">
                            <table class="table table-hover table-bordered table-striped dataTable dtr-inline">
                                <thead>
                                    <tr role="row">
                                        <th>Пользователь</th>
                                        <th>Әрекет</th>
                                        <th>Дата</th>
                                    </tr>
                                    <tr class="filters">
                                        <td>
                                            <input v-model="filter.fio" class="form-control"
                                                placeholder="ФИО пользователя" @keyup.enter="search" />
                                        </td>
                                        <td>
                                            <select class="form-control" @change.prevent="search"
                                                v-model="filter.type_id">
                                                <option :value="null">
                                                    Барлығы
                                                </option>
                                                <option v-for="typee in types" :key="'typee' + typee.id"
                                                    :value="typee.id">
                                                    {{ typee.name }}
                                                </option>
                                            </select>
                                        </td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="odd" v-for="(role, index) in logs.data" :key="'role' + role.id">
                                        <td>{{ role.user.fio }}</td>
                                        <td>{{ role.name }}</td>
                                        <td>{{ formatDateTime(role.created_at) }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Pagination :links="logs.links" />
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
<script>
import AdminLayout from "../../../Layouts/AdminLayout.vue";
import { Link, Head } from "@inertiajs/inertia-vue3";
import Pagination from "../../../Components/Pagination.vue";
export default {
    components: {
        AdminLayout,
        Link,
        Pagination,
        Head
    },
    props: ["logs", "log_status", "types"],
    data() {
        return {
            filter: {
                name: route().params.name ? route().params.name : null,
                type_id: route().params.type_id ? route().params.type_id : null,
            },
            loading: 0,
        };
    },
    methods: {
        formatDateTime(dateTime) {
            if (!dateTime) return '';
            const date = new Date(dateTime);
            const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} `;
            const formattedTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;

            return `${formattedDate}${formattedTime}`;
        },
        deleteData(id) {
            Swal.fire({
                title: "Жоюға сенімдісіз бе?",
                text: "Қайтып қалпына келмеуі мүмкін!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Иә, жоямын!",
                cancelButtonText: "Жоқ",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$inertia.delete(route('admin.logs.destroy', id))
                }
            });


        },
        search() {
            this.loading = 1
            const params = this.clearParams(this.filter);
            this.$inertia.get(route('admin.logs.index'), params)
        },
    }
};
</script>
