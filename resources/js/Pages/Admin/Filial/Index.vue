<template>

    <head>
        <title>Админ панель | Филиалы</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Список филиалов</h1>
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
                            Список филиалов
                        </li>
                    </ol>
                </div>
            </div>
        </template>
        <template #header>
            <div class="buttons d-flex align-items-center">
                <Link class="btn btn-primary mr-2" :href="route('admin.filials.create')">
                <i class="fa fa-plus"></i> Добавить
                </Link>
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
                                    <tr class="odd" v-for="(filial, index) in filials.data" :key="'filial' + filial.id">
                                        <td>
                                            {{
                                filial.from
                                    ? filial.from + index
                                    : index + 1
                            }}
                                        </td>
                                        <td>{{ filial.name }}</td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <Link :href="route(
                                'admin.filials.edit',
                                filial
                            )
                                " class="btn btn-primary" title="Изменить">
                                                <i class="fas fa-edit"></i>
                                                </Link>

                                                <!--
                                                <button
                                                @click.prevent="deleteData(filial.id)"
                                                    class="btn btn-danger"
                                                    title="Удалить"
                                                >
                                                    <i
                                                        class="fas fa-times"
                                                    ></i>
                                                </button>
-->
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Pagination :links="filials.links" />
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
    props: ["filials"],
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
                    this.$inertia.delete(route('admin.filials.destroy', id))
                }
            });


        },
        search() {
            this.loading = 1
            const params = this.clearParams(this.filter);
            this.$inertia.get(route('admin.filials.index'), params)
        },
    }
};
</script>