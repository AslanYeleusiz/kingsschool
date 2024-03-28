<template>

    <head>
        <title>Админ панель | Полный отчёт</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Полный отчёт {{teacher.fio}}</h1>
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
                            Полный отчёт
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
                            <table class="table table-hover">
                                <tbody>
                                    <template v-for="(salary, salaryindex) in salaries">
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <td>
                                                <div class="d-flex justify-content-between">
                                                    {{ salary.date }}
                                                   <button @click.native="getReport(salary.id, salaryindex)" class="btn btn-primary">
                                                       Показать
                                                   </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td>
                                                <div class="p-0" style="">
                                                    <table v-if="salary.orders" class="table table-hover table-bordered table-striped dataTable dtr-inline">
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
                                                            <tr class="filters">
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
                                                        </thead>
                                                        <tbody>
                                                            <tr class="odd" v-for="(eduPaidOrder, index) in salary.orders" :key="'eduPaidOrder' + eduPaidOrder.id">
                                                                <td>
                                                                    {{
                                                eduPaidOrder.from
                                                    ? eduPaidOrder.from + index
                                                    : index + 1
                                            }}
                                                                </td>
                                                                <td class="d-f aj-c">
                                                                    <div class="avatar" :style="{ backgroundImage: `url(/storage/files/${eduPaidOrder.edu_order.user?.avatar})` }" @click="$page.props.flash.image = eduPaidOrder.edu_order.user?.avatar" >
                                                                    </div>
                                                                </td>
                                                                <td>{{ eduPaidOrder.edu_order.user?.fio }}</td>
                                                                <td>{{ eduPaidOrder.edu_order.subject ? eduPaidOrder.edu_order.subject.name : 'Нет данных' }}</td>
                                                                <td>
                                                                    <div class="d-f j-c">
                                                                        <div class="paidBlock">
                                                                            <div class="paid success d-f aj-c">{{eduPaidOrder.edu_order.price.toLocaleString()}}</div>
                                                                            <div class="paid date">до {{ eduPaidOrder.date }}</div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>{{ eduPaidOrder.edu_order.hours }}</td>
                                                                <td>{{ eduPaidOrder.remain_hours }}</td>
                                                                <td>{{ eduPaidOrder.completed_hours }}</td>
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
                                                                        <span class="badge badge-success">
                                                                            Выдано
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
                                                                            <div class="paid pd success no-hover">{{calculateAllPrice(0,salaryindex).toLocaleString()}}</div>
                                                                            <div class="paid date no-hover">{{calculateAllPrice(1,salaryindex).toLocaleString()}}</div>
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
                                                                    <div class="d-f j-c">
                                                                        <div class="paidBlock px-4">
                                                                            {{salary.penalty}}
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
                                                                <td class="t-r">Премия</td>
                                                                <td>
                                                                    <div class="d-f j-c">
                                                                        <div class="paidBlock px-4">
                                                                            {{salary.bonus}}
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
                                                                <td class="t-r">Итог</td>
                                                                <td>
                                                                    <div class="d-f j-c">
                                                                        <div class="paidBlock">
                                                                            <div class="paid pd success no-hover">{{calculateAllPrice(0,salaryindex).toLocaleString()}}</div>
                                                                            <div class="paid date no-hover">{{salary.price.toLocaleString()}}</div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td></td>
                                                            </tr>
                                                            
                                                            
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Pagination :links="salaries.links" />
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
        props: ["salaries", "teacher"],
        data() {
            return {
                isTableExpanded: true,
            };
        },
        methods: {
            getReport(id, salaryindex) {
                if(this.salaries[salaryindex].orders == null){
                    
                    axios.get(route('admin.teachers.fullReportItem', {
                        id: this.teacher.id,
                        report_id: id
                    })).then(res=>{
                        this.salaries[salaryindex].orders = res.data.orders
                        setTimeout(()=>{
                            this.isTableExpanded = false
                        },1000)
                    })
                }
            },
            calculateAllPrice(newPriceType, salaryindex) {
                let sum = this.salaries[salaryindex].orders.reduce((sum, element) => {
                    return sum + (newPriceType ? element.newPrice : element.price);
                }, 0);
                return sum;
            },
        }
    };

</script>
