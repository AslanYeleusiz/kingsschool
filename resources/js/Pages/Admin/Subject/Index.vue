<template>

    <head>
        <title>Админ панель | Предметы</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Список предметов</h1>
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
                            Список предметов
                        </li>
                    </ol>
                </div>
            </div>
        </template>
        <template #header>
            <div class="buttons d-flex align-items-center">
                <Link class="btn btn-primary mr-2" :href="route('admin.subjects.create')">
                <i class="fa fa-plus"></i> Добавить
                </Link>

                <Link class="btn btn-danger" :href="route('admin.subjects.index')">
                <i class="fa fa-trash"></i> Очистить фильтр
                </Link>
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
                                        <th>№</th>
                                        <th>Название</th>
                                        <th>Действия</th>
                                    </tr>
                                    <tr class="filters">
                                        <td></td>
                                        <td>
                                            <input v-model="filter.name" class="form-control" placeholder="Аты"
                                                @keyup.enter="search" />
                                        </td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="odd" v-for="(subject, index) in subjects.data"
                                        :key="'subject' + subject.id">
                                        <td>
                                            {{
                                subject.from
                                    ? subject.from + index
                                    : index + 1
                            }}
                                        </td>
                                        <td>{{ subject.name }}</td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <button @click.prevent="dublicate(subject.id)" class="btn btn-success"
                                                    title="Дублировать">
                                                    <i class="fas fa-check-double"></i>
                                                </button>

                                                <Link :href="route(
                                'admin.subjects.edit',
                                subject
                            )
                                " class="btn btn-primary" title="Изменить">
                                                <i class="fas fa-edit"></i>
                                                </Link>

                                                <button @click.prevent="deleteData(subject.id)" class="btn btn-danger"
                                                    title="Удалить">
                                                    <i class="fas fa-times"></i>
                                                </button>

                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Pagination :links="subjects.links" />
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
    props: ["subjects"],
    data() {
        return {
            filter: {
                name: route().params.name ? route().params.name : null,
            },
            loading: 0,
        };
    },
    methods: {
        deleteData(id) {
            Swal.fire({
                title: "Уверены, что хотите удалить?",
                text: "Возможно, что нельзя будет восстановить!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Да, удалю!",
                cancelButtonText: "Нет",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$inertia.delete(route('admin.subjects.destroy', id))
                }
            });


        },
        dublicate(id) {
            Swal.fire({
                title: "Уверены, что хотите сделать дубликат?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Да, уверен!",
                cancelButtonText: "Нет",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$inertia.get(route('admin.subjects.dublicate', id))
                }
            });


        },

        search() {
            this.loading = 1
            const params = this.clearParams(this.filter);
            this.$inertia.get(route('admin.subjects.index'), params)
        },
    }
};
</script>