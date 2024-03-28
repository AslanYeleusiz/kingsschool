<template>
    <head>
        <title>Админ панель | История платежей студентов</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">История платежей студентов</h1>
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
                            История платежей студентов
                        </li>
                    </ol>
                </div>
            </div>
        </template>
        <template #header>
            <div class="buttons d-flex align-items-center">
                <Link class="btn btn-danger" :href="route('admin.paidHistories.index')">
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
                                        <th></th>
                                        <th>ФИО</th>
                                        <th>Статус</th>
                                        <th>Преподаватель</th>
                                        <th>Подтверждение</th>
                                        <th>Номер телефона</th>
                                        <th>Действие</th>
                                    </tr>
                                    <tr class="filters">
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <input v-model="filter.studFio" class="form-control" placeholder="ФИО студента"
                                                @keyup.enter="search" />
                                        </td>
                                        <td></td>
                                        <td>
                                            <input v-model="filter.prepodFio" class="form-control" placeholder="ФИО преподавателя"
                                                @keyup.enter="search" />
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="odd" v-for="(order, index) in orders.data" :key="'order' + order.id">
                                        <td>
                                            {{
                                                order.from
                                                ? order.from + index
                                                : index + 1
                                            }}
                                        </td>
                                        <td class="d-f aj-c">
                                            <div class="avatar"
                                                :style="{ backgroundImage: `url(/storage/files/${order.paid_student.user?.avatar})` }" @click="$page.props.flash.image = order.paid_student.user?.avatar">
                                            </div>
                                        </td>
                                        <td>{{ order.paid_student.user?.fio }}</td>
                                        <td>
                                            <div class="d-f j-c">
                                                <div class="paidBlock">
                                                    <div v-if="order.status == 2" class="paid success">Подтверждено</div>
                                                    <div v-else class="paid danger">Не подтверждено</div>
                                                    <div class="paid date">{{ formatDateTime(order.created_at) }}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{{ order.paid_student.teacher.fio }} /
                                            <Link :href="route(
                                                'admin.students.index',
                                                { teacher_id: order.paid_student.teacher_id }
                                            )
                                                " class="block" title="Список студентов">
                                            Список студентов
                                            </Link>
                                        </td>
                                        <td>
                                            <div class="d-f j-c">
                                                <div class="paidBlock">
                                                    <div v-if="order.status == 1" class="paid warning"
                                                        @click="setPaid(order.id)">Подтвердить</div>
                                                    <div v-else class="paid success">Подтверждено</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="d-f j-c">
                                                <div class="tablemask" title="Написать по Whatsapp">
                                                    {{ order.paid_student.user?.tel_num }}
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <button @click.prevent="deleteData(order.id, true)" class="btn btn-danger"
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
                    <Pagination :links="orders.links" />
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
        'orders',
    ],
    data() {
        return {
            filter: {
                studFio: route().params.studFio ? route().params.studFio : null,
                prepodFio: route().params.prepodFio ? route().params.prepodFio : null,
            },
            loading: 0,
            newGroup: '',
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
        setPaid(id) {
            Swal.fire({
                title: "Подтвердите оплату",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#71DD37",
                cancelButtonColor: "#adb5bd",
                confirmButtonText: "Подтвердить",
                cancelButtonText: "Отклонить",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$inertia.post(route('admin.paidHistories.paid', id))
                }
            });
        },
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
                    this.$inertia.delete(route('admin.paidHistories.delete', id))
                }
            });
        },
        search() {
            this.loading = 1
            const params = this.clearParams(this.filter);
            this.$inertia.get(route('admin.paidHistories.index'), params)
        },
    }
};
</script>
<style>
.table td,
.table th {
    text-align: center;
}

.avatar {
    width: 40px;
    height: 40px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 50%;
}

.module {
    margin-bottom: 10px;
}

.module-header {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.module-content {
    border: 1px solid #ddd;
    border-top: none;
    border-radius: 0 0 5px 5px;
    background-color: #fff;
}

.arrow {
    transition: transform 0.3s ease;
}

.collapsed .arrow {
    transform: rotate(-90deg);
}

.center {
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.gap-20 {
    gap: 20px;
}
</style>