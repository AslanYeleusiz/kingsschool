<template>
    <head>
        <title>Админ панель | Типы обучения</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Список типов обучения</h1>
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
                            Список типов обучения
                        </li>
                    </ol>
                </div>
            </div>
        </template>
        <template #header>
            <div class="buttons d-flex align-items-center">
                <Link class="btn btn-primary mr-2" :href="route('admin.trainTypes.create')">
                <i class="fa fa-plus"></i> Добавить
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
                                </thead>
                                <tbody>
                                    <tr class="odd" v-for="(trainType, index) in trainTypes.data"
                                        :key="'trainType' + trainType.id">
                                        <td>
                                            {{
                                                trainType.from
                                                ? trainType.from + index
                                                : index + 1
                                            }}
                                        </td>
                                        <td>{{ trainType.name }}</td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <Link :href="route(
                                                    'admin.trainTypes.edit',
                                                    trainType
                                                )
                                                    " class="btn btn-primary" title="Изменить">
                                                <i class="fas fa-edit"></i>
                                                </Link>

<!--
                                                <button @click.prevent="deleteData(trainType.id)" class="btn btn-danger"
                                                    title="Жою">
                                                    <i class="fas fa-times"></i>
                                                </button>
-->
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Pagination :links="trainTypes.links" />
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
    props: ["trainTypes"],
    data() {
        return {
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
                    this.$inertia.delete(route('admin.trainTypes.destroy', id))
                }
            });


        },
    }
};
</script>