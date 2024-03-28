<template>

    <head>
        <title>Админ панель | Журнал</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Журнал преподавателя {{ schedule.teacher.fio }}</h1>
                    <h5 class="mt-1">Группа: {{ schedule.group.name }}</h5>
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
                            Журнал
                        </li>
                    </ol>
                </div>
            </div>
            <div v-if="likeThisDate" class="d-f j-b">
                <div></div>
                <div class="form-group">
                    <div class="custom-control custom-switch">
                        <input type="checkbox" v-model="hiddenOrio" class="custom-control-input" id="customSwitch1" />
                        <label class="custom-control-label" for="customSwitch1">Скрыть лишние дни</label>
                    </div>
                </div>
            </div>
        </template>
        <div class="container-fluid">
            <div class="card">
                <div class="card-body overflow-auto">
                    <div class="row">
                        <div class="col-sm-12">
                            <table class="table table-hover table-bordered dataTable dtr-inline">
                                <thead>
                                    <tr role="row">
                                        <th>№</th>
                                        <th>Аты</th>
                                        <template v-for="day in lastDayOfMonth" :key="day">
                                            <template v-if="parsedDays.includes(day)">
                                                <th v-if="!hiddenOrio || (day == schedule_day && likeThisDate)" class="t-c">
                                                    {{ day }} {{hiddenOrio ? '(Сегодня)' : ''}}
                                                </th>
                                            </template>
                                        </template>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="odd" v-for="(student, index) in schedule.group_orders">
                                        <td>
                                            {{index+1}}
                                        </td>
                                        <td>
                                            {{student.edu_order.user?.fio}}
                                        </td>
                                        <template v-for="day in lastDayOfMonth" :key="day">
                                            <template v-if="parsedDays.includes(day)">
                                                <td v-if="!hiddenOrio || (day == schedule_day && likeThisDate)" @click="changeStatus(student.edu_order_id, day, statusByStudentId(student.edu_order_id, day))" :class="[day == schedule_day && likeThisDate ? 'c-p bg' : 'disabled']" class="square">
                                                    <template v-if="statusByStudentId(student.edu_order_id, day) == 1">
                                                        <i class="fas fa-solid fa-plus"></i>
                                                    </template>
                                                    <template v-if="statusByStudentId(student.edu_order_id, day) == 2">
                                                        <i class="fas fa-solid fa-minus"></i>
                                                    </template>
                                                </td>

                                            </template>
                                        </template>
                                    </tr>
                                </tbody>
                            </table>
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
        props: [
            'schedule',
            'schedule_day',
            'lastDayOfMonth',
            'journals',
            'likeThisDate',
            'days',
        ],
        data() {
            return {
                loading: 0,
                journal_students: this.journals ?? [],
                isPopupOpen: false,
                student_id: null,
                status: null,
                hiddenOrio: false,
                parsedDays: [],
            };
        },
        computed: {
            statusByStudentId() {
                return (student_id, day) => {
                    const item = this.journal_students.find(item => {
                        const date = new Date(item.date);
                        return item.edu_order_id === student_id && date.getDate() === day;
                    });
                    return item ? item.type : 0;
                };
            }
        },
        mounted() {
            this.parsedDays = this.days;
        },
        methods: {
            submit(type, day, edu_order_id) {
                axios.post(
                    route("admin.journal.store", {
                        schedule_id: this.schedule.id,
                    }), {
                        teacher_id: this.schedule.teacher_id,
                        edu_order_id: edu_order_id,
                        group_id: this.schedule.group_id,
                        type: type,
                        date: this.schedule.year + '-' + this.schedule.month + '-' + day,
                    }
                ).then(res => {
                    this.journal_students = res.data.journals
                });
            },
            changeStatus(edu_order_id, day, status) {
                //                if(day == this.schedule_day && this.likeThisDate) {
                switch (status) {
                    case 0:
                        return this.submit(1, day, edu_order_id)
                    case 1:
                        return this.submit(2, day, edu_order_id)
                    case 2:
                        return this.submit(0, day, edu_order_id)
                }
                //                }
            },
        }
    };

</script>
<style>
    td.square {
        min-width: 50px;
        height: 50px;
        text-align: center;
    }

    .disabled {
        background: #8080800f;
    }

</style>
