<template>

    <head>
        <title>Админ панель | Студенты</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Студенты {{ teacher?.fio }}</h1>
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

                <Link v-if="groups" class="btn btn-success ml-2" :href="route('admin.teachers.reports', teacher.id)">
                Отчёт для выдачи зарплаты
                </Link>

                <Link v-if="groups" class="btn btn-success ml-2"
                    :href="route('admin.teachers.fullReports', teacher.id)">
                Полный отчёт
                </Link>

                <div v-if="checkStudents()" class="ml-2 badge badge-danger">
                    <h3>{{ groups ? 'Ваши' : 'Некоторые' }} студенты не распределены по группам</h3>
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
                                        <th v-if="user.role_id < 3">Преподаватель</th>
                                        <th>Номер телефона</th>
                                        <th v-if="user.role_id < 3">Цена</th>
                                        <th v-if="groups">Группа</th>
                                        <th v-show="user.role_id == 1 || user.role_id == 2"></th>
                                    </tr>
                                    <tr class="filters">
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <input v-model="filter.studFio" class="form-control"
                                                placeholder="Студент ФИО" @keyup.enter="search" />
                                        </td>
                                        <td>
                                            <input v-model="filter.subj" class="form-control" placeholder="Предмет"
                                                @keyup.enter="search" />
                                        </td>
                                        <td v-if="user.role_id < 3">
                                            <!--
                                            <div class="d-f a-c">
                                                <input type="date" v-model="filter.start_date" class="form-control mx-2">
                                                <input type="date" v-model="filter.start_date" class="form-control mx-2">
                                            </div>
-->
                                        </td>
                                        <td>
                                            <input v-model="filter.prepodFio" class="form-control"
                                                placeholder="Преподаватель ФИО" @keyup.enter="search" />
                                        </td>
                                        <td v-if="user.role_id < 3">
                                            <input v-model="filter.phone" class="form-control"
                                                placeholder="Номер телефона" @keyup.enter="search" />
                                        </td>
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
                                                    <div v-else class="paid black" @click="setPaid(order.id, 1)">
                                                        Просрочено
                                                    </div>
                                                    <div class="paid date">{{ order.lastEduPaid.date }}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td v-if="user.role_id < 3">{{ order.teacher.fio }}</td>
                                        <td>
                                            <div class="d-f j-c">
                                                <div class="tablemask" title="Написать по Whatsapp">
                                                    {{ order.user.tel_num }}
                                                </div>
                                            </div>
                                        </td>
                                        <td v-if="user.role_id < 3">
                                            <div class="d-f j-c">
                                                <div class="paidBlock">
                                                    <div v-if="order.lastEduPaid.status == 1"
                                                        class="paid success no-hover">
                                                        {{ order.price.toLocaleString() }}
                                                    </div>
                                                    <div v-else-if="order.lastEduPaid.status == 2"
                                                        class="paid pd danger no-hover" @click="setPaid(order.id, 1)">
                                                        {{ order.price.toLocaleString() }}
                                                    </div>
                                                    <div v-else class="paid pd black no-hover"
                                                        @click="setPaid(order.id, 1)">{{
                        order.price.toLocaleString() }}
                                                    </div>
                                                    <div class="paid date no-hover">{{ order.newPrice.toLocaleString()
                                                        }}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <template v-if="groups">
                                            <td v-if="order.newGroup == 0">
                                                <div class="dropdown">
                                                    <div class="tablemask">Выбрать группу</div>
                                                    <div class="dropdown-content">
                                                        <div class="pb-3 px-2 newgroup item" @click="order.newGroup = 1">Добавить группу</div>
                                                        <div v-for="(group, gindex) in groups" class="form-group form-check item">
                                                            <input type="checkbox" class="form-check-input" :id="'group_'+gindex+'_'+index" :value="group.id" v-model="order.group_ids" @change.prevent="setGroup(order.id, order.group_ids)">
                                                            <label class="form-check-label" :for="'group_'+gindex+'_'+index">{{group.name}}</label>
                                                        </div>
                                                        <!-- Добавьте нужные пункты с чекбоксами -->
                                                    </div>
                                                </div>
                                                <!--
                                                <select class="form-control" @change.prevent="setGroup(order.id, order.group_id)" v-model="order.group_id" placeholder="Белсенді">
                                                    <option :value="null" hidden>
                                                        Выбрать
                                                    </option>
                                                    <option :value="0">
                                                        + Добавить группу
                                                    </option>
                                                    <option v-for="group in groups" :value="group.id">
                                                        <input type="checkbox">
                                                        {{ group.name }}
                                                    </option>
                                                </select>
-->
                                            </td>
                                            <td v-else>
                                                <input type="text" class="form-control" v-model="newGroup" @keyup.enter="setNewGroup(order.id)" placeholder="Введите имя группы">
                                            </td>
                                        </template>
                                        <td v-show="user.role_id == 1 || user.role_id == 2">
                                            <div class="btn-group btn-group-sm">
                                                <Link :href="route('admin.users.edit', order.user_id)"
                                                    class="btn btn-primary" title="Изменить">
                                                <i class="fas fa-edit"></i>
                                                </Link>

                                                <button @click.prevent="deleteDataStudent(order.id)" class="btn btn-danger"
                                                    title="Жою">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="odd" v-if="user.role_id < 3">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Оплачено</td>
                                        <td>
                                            <div class="d-f j-c">
                                                <div class="paidBlock">
                                                    <div class="paid success no-hover">{{ calculatePrice(1, 0) }}</div>
                                                    <div class="paid date no-hover">{{ calculatePrice(1, 1) }}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="odd" v-if="user.role_id < 3">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Не оплачено</td>
                                        <td>
                                            <div class="d-f j-c">
                                                <div class="paidBlock">
                                                    <div class="paid pd danger no-hover">{{ calculatePrice(2, 0) }}
                                                    </div>
                                                    <div class="paid date no-hover">{{ calculatePrice(2, 1) }}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="odd" v-if="user.role_id < 3">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Общее</td>
                                        <td>
                                            <div class="d-f j-c">
                                                <div class="paidBlock">
                                                    <div class="paid pd success no-hover">{{ calculateAllPrice(0) }}
                                                    </div>
                                                    <div class="paid date no-hover">{{ calculateAllPrice(1) }}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Pagination :links="orders.links" />
                </div>
            </div>
        </div>
        <div v-if="groups" class="container-fluid">
            <div class="card">
                <div class="card-body">
                    <h2 class="mb-3">Группы</h2>
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
                                                <button @click.prevent="deleteData(group.id, true)"
                                                    class="btn btn-danger" title="Жою">
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
                                                <th></th>
                                                <th>ФИО</th>
                                                <th>Предмет</th>
                                                <th>Статус</th>
                                                <td></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="odd" v-for="(order, index) in orders.data" :key="'grouporder' + order.id">
                                                <template v-if="order.group_ids.includes(group.id)">
                                                    <td>
                                                        {{ order.from ? order.from + index : index + 1 }}
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
                                                                <div v-if="order.lastEduPaid.status == 1"
                                                                    class="paid success" @click="setPaid(order.id, 0)">
                                                                    Оплачено</div>
                                                                <div v-else-if="order.lastEduPaid.status == 2"
                                                                    class="paid danger" @click="setPaid(order.id, 1)">Не
                                                                    оплачено</div>
                                                                <div v-else class="paid black"
                                                                    @click="setPaid(order.id, 1)">Просрочено
                                                                </div>
                                                                <div class="paid date">{{ order.lastEduPaid.date }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="d-f j-b">
                                                            <div></div>
                                                            <button @click.prevent="deleteDataAtGroup(order.id,group.id )" class="btn btn-danger" title="Жою">
                                                                <i class="fas fa-times"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </template>
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
import {
    Link,
    Head
} from "@inertiajs/inertia-vue3";
import Pagination from "../../../Components/Pagination.vue";
export default {
    components: {
        AdminLayout,
        Link,
        Pagination,
        Head
    },
    props: ["orders", "groups", "user", "teacher"],
    data() {
        return {
            filter: {
                studFio: route().params.studFio ? route().params.studFio : null,
                subj: route().params.subj ? route().params.subj : null,
                prepodFio: route().params.prepodFio ? route().params.prepodFio : null,
                phone: route().params.phone ? route().params.phone : null,
            },
            loading: 0,
            newGroup: '',
            allPrice: 0,
            newAllPrice: 0,
        };
    },
    methods: {
        calculatePrice(type, newPriceType) {
            let sum = this.orders.data.reduce((sum, element) => {
                if (type == 2 && element.lastEduPaid.status == 3) {
                    return sum + (newPriceType ? element.newPrice : element.price);
                } else if (element.lastEduPaid && element.lastEduPaid.status == type) {
                    return sum + (newPriceType ? element.newPrice : element.price);
                } else {
                    return sum;
                }
            }, 0);
            return sum;
        },
        calculateAllPrice(newPriceType) {
            let sum = this.orders.data.reduce((sum, element) => {
                return sum + (newPriceType ? element.newPrice : element.price);
            }, 0);
            return sum;
        },

            checkStudents() {
                return this.user.role_id == 1 ? false : this.orders.data.every(student => student.group_id !== null) == false;
            },
            setNewGroup(order_id) {
                this.$inertia.put(route('admin.students.update', order_id), {
                    name: this.newGroup
                })
            },
            setGroup(orderId, groupIds) {
                axios.post(`/admin/students/${orderId}/setGroups`, {
                    group_ids: groupIds
                }).then(res=>{
                    console.log(res.data)
                })
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
                    let order = this.orders.data.find(el => el.id == id);
                    if (order.lastEduPaid.is_paid) {
                        return Swal.fire({
                            title: "Невозможно!",
                            text: "Оплата не может быть отменена, так как зарплата была выдана учителю!",
                            icon: "error",
                        });
                    }
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
            deleteDataAtGroup(id, groupId) {
                Swal.fire({
                    title: "Удалить ученика из группы?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Да!",
                    cancelButtonText: "Нет",
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.$inertia.delete(route('admin.groups.destroyOrder', {id:id, groupId: groupId}))
                    }
                });
            },

        deleteDataStudent(id) {
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
                    this.$inertia.delete(route('admin.students.destroy', id))
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

    /* Стилизация для красивого вида */
    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        right: 0;
        background-color: #fff;
        min-width: 160px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        padding: 20px 20px 10px;
        text-align: left;
        z-index: 21;
    }
    
    .dropdown-content .item {
        white-space: nowrap;
    }
    
    .dropdown .newgroup, .dropdown .form-check-label, .dropdown .form-check-input {
        cursor: pointer;
    }
    
    

    .dropdown:hover .dropdown-content {
        display: block;
    }

/*
    input[type="checkbox"] {
        margin-right: 8px;
    }
*/

</style>
