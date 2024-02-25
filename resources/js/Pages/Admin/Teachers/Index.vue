<template>
    <head>
        <title>Админ панель | Мұғалімдер</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Мұғалімдер тізімі</h1>
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
                            Мұғалімдер тізімі
                        </li>
                    </ol>
                </div>
            </div>
        </template>
        <template #header>
            <div class="buttons d-flex align-items-center">
                <Link class="btn btn-primary mr-2" :href="route('admin.teachers.create')">
                <i class="fa fa-plus"></i> Қосу
                </Link>

                <Link class="btn btn-danger" :href="route('admin.teachers.index')">
                <i class="fa fa-trash"></i> Фильтрді тазалау
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
                            <table class="table table-hover table-bordered dataTable dtr-inline">
                                <thead>
                                    <tr role="row">
                                        <th>№</th>
                                        <th>ФИО</th>
                                        <th>Зарплата</th>
                                        <th>Режим работы</th>
                                        <th>Отчет</th>
                                        <th>Әрекет</th>
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
                                    <tr class="odd" v-for="(teacher, index) in teachers.data" :key="'teacher' + teacher.id">
                                        <td>
                                            {{
                                                teacher.from
                                                ? teacher.from + index
                                                : index + 1
                                            }}
                                        </td>
                                        <td>
                                            <div class="d-flex gap-20">
                                                <div class="avatar"
                                                    :style="{ backgroundImage: `url(/storage/files/${teacher.avatar})` }">
                                                </div>
                                                {{ teacher.fio }}
                                            </div>
                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            <div class="block">
                                                Расписание
                                            </div>
                                        </td>
                                        <td>
                                            <div class="block">
                                                Список студентов
                                            </div>
                                        </td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <Link :href="route(
                                                    'admin.teachers.edit',
                                                    teacher
                                                )
                                                    " class="btn btn-primary" title="Изменить">
                                                <i class="fas fa-edit"></i>
                                                </Link>

                                                <button @click.prevent="deleteData(teacher.id)" class="btn btn-danger"
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
                    <Pagination :links="teachers.links" />
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
    props: ["teachers"],
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
                    this.$inertia.delete(route('admin.teachers.destroy', id))
                }
            });


        },
        dublicate(id) {
            Swal.fire({
                title: "Дубликатқа жасауға сенімдісіз бе?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Иә, жоямын!",
                cancelButtonText: "Жоқ",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$inertia.get(route('admin.teachers.dublicate', id))
                }
            });


        },

        search() {
            this.loading = 1
            const params = this.clearParams(this.filter);
            this.$inertia.get(route('admin.teachers.index'), params)
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
    border-radius: 50%;
}

.gap-20 {
    gap: 20px;
}

.block {
    background: #F2F3F4;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    cursor: pointer;
}
</style>