<template>
    <head>
        <title>Админ панель | Студенты</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Студенты</h1>
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
                            Студенты
                        </li>
                    </ol>
                </div>
            </div>
        </template>
        <template #header>
            <div class="buttons d-flex align-items-center">
                <Link class="btn btn-primary mr-2" :href="route('admin.users.create')"
                    v-if="user.role_id == 1 || user.role_id == 2">
                <i class="fa fa-plus"></i> Қосу
                </Link>

                <Link class="btn btn-danger" :href="route('admin.students.index')">
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
                                        <th></th>
                                        <th>ФИО</th>
                                        <th>Предмет</th>
                                        <th>Статус</th>
                                        <th>Преподаватель</th>
                                        <th>Номер телефона</th>
                                        <th>Цена</th>
                                        <th v-if="groups">Группа</th>
                                        <th v-show="user.role_id == 1 || user.role_id == 2"></th>
                                    </tr>
                                    <tr class="filters">
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <input v-model="filter.fio" class="form-control" placeholder="ФИО"
                                                @keyup.enter="search" />
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td v-if="groups"></td>
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
                                                :style="{ backgroundImage: `url(/storage/files/${order.user.avatar})` }">
                                            </div>
                                        </td>
                                        <td>{{ order.user.fio }}</td>
                                        <td>{{ order.subject ? order.subject.name : 'Нет данных' }}</td>
                                        <td>
                                            <div class="d-f j-c">
                                                <div class="paidBlock">
                                                    <div v-if="order.lastEduPaid.status == 1" class="paid success"
                                                        @click="setPaid(order.id, 0)">Оплачено</div>
                                                    <div v-else-if="order.lastEduPaid.status == 2" class="paid danger"
                                                        @click="setPaid(order.id, 1)">Не оплачено</div>
                                                    <div v-else class="paid black" @click="setPaid(order.id, 1)">Просрочено
                                                    </div>
                                                    <div class="paid date">{{ order.lastEduPaid.date }}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{{ order.teacher.fio }}</td>
                                        <td>
                                            <div class="d-f j-c">
                                                <div class="tablemask" title="Написать по Whatsapp">
                                                    {{ order.user.tel_num }}
                                                </div>
                                            </div>
                                        </td>
                                        <td>{{ order.price }}</td>
                                        <template v-if="user.role_id == 3">
                                            <td v-if="groups && order.group_id != 0">
                                                <select class="form-control"
                                                    @change.prevent="setGroup(order.id, order.group_id)"
                                                    v-model="order.group_id" placeholder="Белсенді">
                                                    <option :value="null" hidden>
                                                        Выбрать
                                                    </option>
                                                    <option :value="0">
                                                        + Добавить группу
                                                    </option>
                                                    <option v-for="group in groups" :value="group.id">
                                                        {{ group.name }}
                                                    </option>
                                                </select>
                                            </td>
                                            <td v-else>
                                                <input type="text" class="form-control" v-model="newGroup"
                                                    @focusout="setNewGroup(order.id)">
                                            </td>
                                        </template>
                                        <td v-show="user.role_id == 1 || user.role_id == 2">
                                            <div class="btn-group btn-group-sm">
                                                <Link :href="route(
                                                    'admin.users.edit',
                                                    order
                                                )
                                                    " class="btn btn-primary" title="Изменить">
                                                <i class="fas fa-edit"></i>
                                                </Link>
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
        <div class="container-fluid">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="module" v-for="group in groups" :key="'group' + group.id">
                                <div class="module-header" data-toggle="collapse"
                                    :data-target="'#moduleContent_' + group.id">
                                    <div class="d-flex center">
                                        <div class="d-flex gap-20">
                                            <h4 class="mr-3 modul_name">
                                                {{ group.name }}
                                            </h4>
                                            <div class="btn-group btn-group-sm" @click.stop>
                                                <button @click.prevent="deleteData(group.id, true)" class="btn btn-danger"
                                                    title="Жою">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <span class="arrow mr-3">&#9660;</span>
                                    </div>
                                </div>
                                <div :id="'moduleContent_' + group.id" class="module-content collapse show">
                                    <table class="table table-hover table-bordered table-striped dataTable dtr-inline">
                                        <thead>
                                            <tr role="row">
                                                <th>№</th>
                                                <th>Студент</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="odd" v-for="(student, index) in group.students"
                                                :key="'modul' + student.id">
                                                <td>
                                                    {{
                                                        student.from
                                                        ? student.from + index
                                                        : index + 1
                                                    }}
                                                </td>
                                                <td>{{ student.user.name }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
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
    props: ["orders", "groups", "user"],
    data() {
        return {
            filter: {
                name: route().params.name ? route().params.name : null,
            },
            loading: 0,
            newGroup: '',
        };
    },
    methods: {
        setNewGroup(id, groupId = null) {
            if(this.newGroup != '') {
                this.$inertia.put(route('admin.students.update', id), {
                    name: this.newGroup,
                    groupId: groupId
                })
            }
        },
        setGroup(id, groupId = null) {
            if(this.orders.data.find(order=>order.id == id).group_id == 0) {
                this.newGroup = '';
            } else {
                this.setNewGroup(id,groupId);
            }
        },
        
        setPaid(id, e) {
            if (e) {
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
                        this.$inertia.post(route('admin.students.paid', id))
                    }
                });
            } else {
                Swal.fire({
                    title: "Отменить оплату?",
                    icon: "error",
                    showCancelButton: true,
                    confirmButtonColor: "#71DD37",
                    cancelButtonColor: "#adb5bd",
                    confirmButtonText: "Подтвердить",
                    cancelButtonText: "Отклонить",
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.$inertia.post(route('admin.students.deletePaid', id))
                    }
                });
            }
        },
        search() {
            this.loading = 1
            const params = this.clearParams(this.filter);
            this.$inertia.get(route('admin.students.index'), params)
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
                    this.$inertia.delete(route('admin.groups.destroy', id))
                }
            });
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