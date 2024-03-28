<template>

    <head>
        <title>Админ панель | Удалённые пользователи</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Удалённые пользователи</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a :href="route('admin.index')">
                                <i class="fas fa-dashboard"></i>
                                Главная страница
                            </a>
                        </li>
                        <li class="breadcrumb-item">
                            <a :href="route('admin.users.index')">
                                <i class="fas fa-dashboard"></i>
                                Пользователи
                            </a>
                        </li>

                        <li class="breadcrumb-item active">
                            Удалённые пользователи
                        </li>
                    </ol>
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
                                        <th></th>
                                        <th>ФИО</th>
                                        <th>Номер телефона</th>
                                        <th>Филиал</th>
                                        <th>Роль</th>
                                        <th>Действия</th>
                                    </tr>
                                    <tr class="filters">
                                        <td></td>
                                        <td>
                                            <input v-model="filter.fio" class="form-control" placeholder="ФИО"
                                                @keyup.enter="search" />
                                        </td>
                                        <td>
                                            <input v-model="filter.tel_num" class="form-control"
                                                placeholder="Номер телефона" @keyup.enter="search" />
                                        </td>


                                        <td>
                                            <select class="form-control" @change.prevent="search"
                                                v-model="filter.filial_id" placeholder="Филиал">
                                                <option :value="null">
                                                    Все
                                                </option>
                                                <option v-for="filial in filials" :key="'filial' + filial.id"
                                                    :value="filial.id">
                                                    {{ filial.name }}
                                                </option>
                                            </select>
                                        </td>
                                        <td>
                                            <select class="form-control" @change.prevent="search"
                                                v-model="filter.role_id" placeholder="Филиал">
                                                <option :value="null">
                                                    Все
                                                </option>
                                                <option v-for="role in roles" :key="'role' + role.id" :value="role.id">
                                                    {{ role.name }}
                                                </option>
                                            </select>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="odd" v-for="(user, index) in users.data" :key="'user' + user.id">
                                        <td>
                                            <div class="avatar"
                                                :style="{ backgroundImage: `url(/storage/files/${user.avatar})` }"></div>
                                        </td>
                                        <td>{{ user.fio }}</td>
                                        <td>{{ user.tel_num }}</td>
                                        <td>{{ user.filial.name }}</td>
                                        <td>{{ user.role.name }}</td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <button @click.prevent="deleteData(user.id)" class="btn btn-danger"
                                                    title="Восстановить">
                                                    <i class="fas fa-undo"></i>
                                                </button>
                                                <button @click.prevent="removeData(user.id)" class="btn btn-danger"
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
                    <Pagination :links="users.links" />
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
    props: ["users", "roles", "filials"],
    data() {
        return {
            filter: {
                fio: route().params.fio ? route().params.fio : null,
                tel_num: route().params.tel_num ? route().params.tel_num : null,
                role_id: route().params.role_id ? route().params.role_id : null,
                filial_id: route().params.filial_id ? route().params.filial_id : null,
            },
            loading: 0,
        };
    },
    methods: {
        deleteData(id) {
            Swal.fire({
                title: "Уверены, что хотите восстановить?",
                text: "Можно будет снова удалить!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Да, удалю!",
                cancelButtonText: "Нет",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$inertia.delete(route('admin.users.activate', id))
                }
            });


        },
        removeData(id) {
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
                    this.$inertia.delete(route('admin.users.remove', id))
                }
            });


        },

        search() {
            this.loading = 1
            const params = this.clearParams(this.filter);
            this.$inertia.get(route('admin.users.deleted'), params)
        },
    }
};
</script>



<style>
.avatar {
    width: 40px;
    height: 40px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100%;
}
</style>