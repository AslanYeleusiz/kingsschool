<template>
    <head>
        <title>Админ панель | Қолданушылар</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Қолданушылар тізімі</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a :href="route('admin.index')">
                                <i class="fas fa-dashboard"></i>
                                Басты бет
                            </a>
                        </li>
                        <li class="breadcrumb-item active">
                            Қолданушылар тізімі
                        </li>
                    </ol>
                </div>
            </div>
        </template>
        <template #header>
            <div class="buttons d-flex align-items-center">
                <Link class="btn btn-primary" :href="route('admin.users.create')">
                <i class="fa fa-plus"></i> Қосу
                </Link>


                <Link class="btn btn-danger mx-2" :href="route('admin.users.index')">
                <i class="fa fa-trash"></i> Фильтрді тазалау
                </Link>

                <Link class="btn btn-primary" :href="route('admin.users.deleted')">
                <i class="fa fa-plus"></i> Удаленныё пользователи
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
                                        <th></th>
                                        <th>Толық аты-жөні</th>
                                        <th>Телефон нөмірі</th>
                                        <th>Филиал</th>
                                        <th>Роль</th>
                                        <th>Әрекет</th>
                                    </tr>
                                    <tr class="filters">
                                        <td></td>
                                        <td>
                                            <input v-model="filter.fio" class="form-control" placeholder="Толық аты-жөні"
                                                @keyup.enter="search" />
                                        </td>
                                        <td>
                                            <input v-model="filter.tel_num" class="form-control"
                                                placeholder="Телефон нөмірі" @keyup.enter="search" />
                                        </td>


                                        <td>
                                            <select class="form-control" @change.prevent="search" v-model="filter.filial_id"
                                                placeholder="Филиал">
                                                <option :value="null">
                                                    Барлығы
                                                </option>
                                                <option v-for="filial in filials" :key="'filial' + filial.id"
                                                    :value="filial.id">
                                                    {{ filial.name }}
                                                </option>
                                            </select>
                                        </td>
                                        <td>
                                            <select class="form-control" @change.prevent="search" v-model="filter.role_id"
                                                placeholder="Филиал">
                                                <option :value="null">
                                                    Барлығы
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
                                                :style="{ backgroundImage: `url(/storage/files/${user.avatar})` }" @click="$page.props.flash.image = user?.avatar"></div>
                                        </td>
                                        <td>{{ user.fio }}</td>
                                        <td>{{ user.tel_num }}</td>
                                        <td>{{ user.filial.name }}</td>
                                        <td>{{ user.role.name }}</td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <Link :href="route(
                                                    'admin.studentsSubjects.index',
                                                    user.id
                                                )
                                                    " class="btn btn-success" title="Предметы" v-if="user.role_id == 4 || user.role_id == 3">
                                                <i class="fas fa-question"></i>
                                                </Link>
                                                <Link :href="route(
                                                    'admin.users.edit',
                                                    user
                                                )
                                                    " class="btn btn-primary" title="Изменить">
                                                <i class="fas fa-edit"></i>
                                                </Link>

                                                <button @click.prevent="deleteData(user.id)" class="btn btn-danger"
                                                    title="Жою">
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
            showModal: 0,
            modalImageSrc: '',
        };
    },
    methods: {
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
                    this.$inertia.delete(route('admin.users.destroy', id))
                }
            });
        },
        search() {
            this.loading = 1
            const params = this.clearParams(this.filter);
            this.$inertia.get(route('admin.users.index'), params)
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