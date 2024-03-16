<template>
    <head>
        <title>Админ панель | Расходы</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Расходы</h1>
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
                            Расходы
                        </li>
                    </ol>
                </div>
            </div>
        </template>
        <template #header>
            <div class="buttons d-flex align-items-center">
                <Link class="btn btn-primary mr-2" :href="route('admin.expenses.create')">
                <i class="fa fa-plus"></i> Қосу
                </Link>

                <Link class="btn btn-danger" :href="route('admin.expenses.index')">
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
                            <table class="table table-hover table-bordered table-striped dataTable dtr-inline">
                                <thead>
                                    <tr role="row">
                                        <th>№</th>
                                        <th>Название</th>
                                        <th>Тип</th>
                                        <th>Администратор</th>
                                        <th>Филиал</th>
                                        <th>Дата</th>
                                        <th>Сумма</th>
                                        <th>Действия</th>
                                    </tr>
                                    <tr class="filters">
                                        <td></td>
                                        <td>
                                            <input v-model="filter.name" class="form-control" placeholder="Название"
                                                @keyup.enter="search" />
                                        </td>
                                        <td>
                                            <select class="form-control" @change.prevent="search" v-model="filter.type_id">
                                                <option :value="null">
                                                    Барлығы
                                                </option>
                                                <option v-for="typee in types" :key="typee.id" :value="typee.id">
                                                    {{ typee.name }}
                                                </option>
                                            </select>
                                        </td>
                                        <td>
                                            <input v-model="filter.fio" class="form-control"
                                                placeholder="Преподаватель ФИО" @keyup.enter="search" />
                                        </td>
                                        <td>
                                            <select class="form-control" @change.prevent="search"
                                                v-model="filter.filial_id">
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
                                            <input v-model="filter.date" class="form-control" placeholder="Дата"
                                                @keyup.enter="search" />
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="odd" v-for="(expense, index) in expenses.data" :key="'expense' + expense.id">
                                        <td>
                                            {{
                                                expense.from
                                                ? expense.from + index
                                                : index + 1
                                            }}
                                        </td>
                                        <td>{{ expense.name }}</td>
                                        <td>{{ types[expense.type_id - 1].name }}</td>
                                        <td>{{ expense.user.fio }}</td>
                                        <td>{{ expense.filial.name }}</td>
                                        <td>{{ expense.date }}</td>
                                        <td>{{ expense.summa }}</td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <Link :href="route(
                                                    'admin.expenses.edit',
                                                    expense
                                                )
                                                    " class="btn btn-primary" title="Изменить">
                                                <i class="fas fa-edit"></i>
                                                </Link>

                                                <button @click.prevent="deleteData(expense.id)" class="btn btn-danger"
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
                    <Pagination :links="expenses.links" />
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
    props: [
        'expenses',
        'types',
        'filials'
    ],
    data() {
        return {
            filter: {
                name: route().params.name ? route().params.name : null,
                type_id: route().params.type_id ? route().params.type_id : null,
                fio: route().params.fio ? route().params.fio : null,
                filial_id: route().params.filial_id ? route().params.filial_id : null,
                date: route().params.date ? route().params.date : null,
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
                    this.$inertia.delete(route('admin.expenses.destroy', id))
                }
            });


        },
        search() {
            this.loading = 1
            const params = this.clearParams(this.filter);
            this.$inertia.get(route('admin.expenses.index'), params)
        },
    }
};
</script>