<template>

    <head>
        <title>Админ панель | Отчет</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0"><b>{{teacher.fio}}</b></h1>
                    <h5 class="m-0">Отчет для выдачи зарплаты за этот период</h5>
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
                            Отчет тізімі
                        </li>
                    </ol>
                </div>
            </div>
        </template>
        <div v-if="eduPaidOrders.length" class="container-fluid">
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
                                        <th class="t-c">Статус</th>
                                        <th class="t-c">Общ. кол-во занятий (часов)</th>
                                        <th class="t-c">Кол-во оств. занятий (часов)</th>
                                        <th class="t-c">Кол-во пройденных занятий (часов)</th>
                                        <th class="t-c">Оплата</th>
                                        <th class="t-c">Зарплата</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="odd" v-for="(eduPaidOrder, index) in eduPaidOrders" :key="'eduPaidOrder' + eduPaidOrder.id">
                                        <td>
                                            {{
                                                eduPaidOrder.from
                                                    ? eduPaidOrder.from + index
                                                    : index + 1
                                            }}
                                        </td>
                                        <td class="d-f aj-c">
                                            <div class="avatar" :style="{ backgroundImage: `url(/storage/files/${eduPaidOrder.edu_order.user.avatar})` }" @click="$page.props.flash.image = eduPaidOrder.edu_order.user?.avatar">
                                            </div>
                                        </td>
                                        <td>{{ eduPaidOrder.edu_order.user.fio }}</td>
                                        <td>{{ eduPaidOrder.edu_order.subject ? eduPaidOrder.edu_order.subject.name : 'Нет данных' }}</td>
                                        <td>
                                            <div class="d-f j-c">
                                                <div class="paidBlock">
                                                    <div class="paid success">Оплачено</div>
                                                    <div class="paid date">до {{ eduPaidOrder.date }}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="t-c">{{eduPaidOrder.edu_order.hours}}</td>
                                        <td class="t-c">{{eduPaidOrder.remain_hours - eduPaidOrder.completed_hours}}</td>
                                        <td class="t-c">{{eduPaidOrder.completed_hours}}</td>
                                        <td>
                                            <div class="d-f j-c">
                                                <div class="paidBlock">
                                                    <div class="paid success">{{eduPaidOrder.price.toLocaleString()}}</div>
                                                    <div class="paid date">{{ eduPaidOrder.newPrice.toLocaleString() }}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="d-f j-c">
                                                <span class="badge badge-warning">
                                                    Не выдано
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="odd">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td class="t-r">Общее</td>
                                        <td>
                                            <div class="d-f j-c">
                                                <div class="paidBlock">
                                                    <div class="paid pd success no-hover">{{calculateAllPrice(0).toLocaleString()}}</div>
                                                    <div class="paid date no-hover">{{calculateAllPrice(1).toLocaleString()}}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr class="odd">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td class="t-r">Штраф</td>
                                        <td>
                                            <input type="integer" class="form-control" v-model="penalty">
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr class="odd">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td class="t-r">Премия</td>
                                        <td>
                                            <input type="integer" class="form-control" v-model="bonus">
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr class="odd">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td class="t-r">Итог</td>
                                        <td>
                                            <div class="d-f j-c">
                                                <div class="paidBlock">
                                                    <div class="paid pd success no-hover">{{calculateAllPrice(0).toLocaleString()}}</div>
                                                    <div class="paid date no-hover">{{(calculateAllPrice(1) + (bonus - penalty)).toLocaleString()}}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr class="odd">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <button @click.prevent="getSalary(teacher.id)" class="btn btn-success w-100">Выдать зарплату</button>
                                        </td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Pagination :links="eduPaidOrders.links" />
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
        props: ["eduPaidOrders", "teacher"],
        data() {
            return {
                filter: {
                    fio: route().params.fio ? route().params.fio : null,
                },
                loading: 0,
                penalty: 0,
                bonus: 0,
            };
        },
        methods: {
            getSalary(id){
                Swal.fire({
                    title: "Выдать зарплату?",
                    text: "Отчёт о предыдущих зарплатах можно увидеть на панеле отчёта!",
                    icon: "success",
                    showCancelButton: true,
                    confirmButtonColor: "#71DD37",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Выдать!",
                    cancelButtonText: "Отмена",
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.$inertia.post(route('admin.teachers.reportStore',id), {
                            penalty: this.penalty,
                            bonus: this.bonus,
                            price: this.calculateAllPrice(1) + (this.bonus - this.penalty),
                        })
                    }
                });
            },
            calculateAllPrice(newPriceType){
                let sum = this.eduPaidOrders.reduce((sum, element) => {
                    return sum + (newPriceType ? element.newPrice : element.price);
                }, 0);
                return sum;
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

</style>
