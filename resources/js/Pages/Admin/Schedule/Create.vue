<template>

    <head>
        <title>Админ панель | Добавить расписание</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Расписания {{ days[day - 1] }} {{ date }}</h1>
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
                            <a :href="route('admin.schedule.index')">
                                <i class="fas fa-dashboard"></i>
                                Список расписаний
                            </a>
                        </li>
                        <li class="breadcrumb-item active">
                            Добавить расписание
                        </li>
                    </ol>
                </div>
            </div>
        </template>
        <div class="container-fluid">
            <div class="card card-primary">
                <form method="post" @submit.prevent="submit">
                    <div class="card-body">
                        <table class="table table-hover table-bordered table-striped dataTable dtr-inline">
                            <thead>
                                <tr>
                                    <th>Время</th>
                                    <th>Учитель</th>
                                    <th>Группа</th>
                                    <th>Действия</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="sch in schedules">
                                    <td>{{ sch.start_time }} - {{ sch.end_time }}</td>
                                    <td>{{ sch.teacher.fio }}</td>
                                    <td>{{ sch.group ? sch.group.name : 'Енгізілмеген' }}</td>
                                    <td>
                                        <button @click.prevent="deleteData(sch.id)" class="btn btn-danger" title="Жою">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="row mt-5">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="">Начало <span class="red">*</span></label>
                                    <input type="time" class="form-control" v-model="schedule.start_time" required />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="">Длительность <span class="red">*</span></label>
                                    <select
                                        class="form-control"
                                        @change.prevent="search"
                                        v-model="schedule.duration"
                                        placeholder="Белсенді"
                                    >
                                       <template v-for="n in 180">
                                            <option v-if="!(n % 30)" :value="n">
                                                {{n}} минут
                                            </option>
                                       </template>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Учитель <span class="red">*</span></label>
                                    <select class="form-control" @change.prevent="getGroups(schedule.teacher_id)"
                                        v-model="schedule.teacher_id" placeholder="Белсенді">
                                        <option :value="null" hidden>
                                            Выбрать
                                        </option>
                                        <option v-for="teacher in teachers" :value="teacher.id">
                                            {{ teacher.fio }}
                                        </option>
                                    </select>

                                </div>
                            </div>
                            <div v-if="groups.length" class="col-md-4">
                                <div class="form-group">
                                    <label for="">Группа</label>
                                    <select class="form-control" @change.prevent="search" v-model="schedule.group_id"
                                        placeholder="Белсенді">
                                        <option :value="null" hidden>
                                            Выбрать
                                        </option>
                                        <option v-for="group in groups" :value="group.id">
                                            {{ group.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary mr-1">
                            Сохранить
                        </button>
                        <button type="button" class="btn btn-danger" @click.prevent="back()">
                            Назад
                        </button>
                    </div>
                </form>
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
import ValidationError from "../../../Components/ValidationError.vue";

    export default {
        components: {
            AdminLayout,
            Link,
            Pagination,
            ValidationError,
            Head
        },
        props: ['schedules', 'date', 'day', 'teachers'],
        data() {
            return {
                schedule: {
                    start_time: null,
                    end_time: null,
                    duration: 60,
                    teacher_id: null,
                    group_id: null,
                    date: this.date,
                    day: route().params.day,
                },
                groups: [],
                days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'],
            }
        },
        methods: {
            getGroups(id) {
                axios.get(route('admin.schedule.getGroups', id)).then((res) => {
                    this.groups = res.data
                })
            },
            submit() {
                this.$inertia.post(
                    route("admin.schedule.store"),
                    this.schedule, {
                        onError: () => console.log("An error has occurred"),
                        onSuccess: () =>
                            console.log("The new contact has been saved"),
                    }
                );
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
                    cancelButtonText: "Отмена",
                }).then((result) => {
                    if (result.isConfirmed && !length) {
                        this.$inertia.delete(
                            route("admin.schedule.destroy", id)
                        );
                    }
                });
            },
        },
    };

</script>
