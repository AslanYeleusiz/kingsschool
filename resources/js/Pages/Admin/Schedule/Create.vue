<template>

    <head>
        <title>Админ панель | Расписания қосу</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Расписания {{days[day - 1]}} {{date}}</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a :href="route('admin.index')">
                                <i class="fas fa-dashboard"></i>
                                Басты бет
                            </a>
                        </li>
                        <li class="breadcrumb-item">
                            <a :href="route('admin.schedule.index')">
                                <i class="fas fa-dashboard"></i>
                                Расписания тізімі
                            </a>
                        </li>
                        <li class="breadcrumb-item active">
                            Расписания қосу
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
                                   <th>Предмет</th>
                                   <th>Учитель</th>
                                   <th>Курс</th>
                                   <th>Обучения</th>
                               </tr>
                           </thead>
                           <tbody>
                               <tr v-for="sch in schedules">
                                   <td>{{sch.start_time}} - {{sch.end_time}}</td>
                                   <td>{{sch.subject.name}}</td>
                                   <td>{{sch.teacher.fio}}</td>
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
                                    <label for="">Конец <span class="red">*</span></label>
                                    <input type="time" class="form-control" v-model="schedule.end_time" required />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="">Тип</label>
                                    <select
                                        class="form-control"
                                        @change.prevent="search"
                                        v-model="schedule.shift_id"
                                        placeholder="Белсенді"
                                    >
                                        <option :value=1>
                                            Дневной
                                        </option>
                                        <option :value=2>
                                            Вечерный
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Предмет <span class="red">*</span></label>
                                    <select
                                        class="form-control"
                                        @change.prevent="search"
                                        v-model="schedule.subject_id"
                                        placeholder="Белсенді"
                                    >
                                        <option :value="null" hidden>
                                            Выбрать
                                        </option>
                                        <option v-for="subject in subjects" :value="subject.id">
                                            {{subject.name}}
                                        </option>
                                    </select>
                                    
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Учитель <span class="red">*</span></label>
                                    <select
                                        class="form-control"
                                        @change.prevent="search"
                                        v-model="schedule.teacher_id"
                                        placeholder="Белсенді"
                                    >
                                        <option :value="null" hidden>
                                            Выбрать
                                        </option>
                                        <option v-for="teacher in teachers" :value="teacher.id">
                                            {{teacher.fio}}
                                        </option>
                                    </select>
                                    
                                </div>
                            </div>
                            
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Тип курса</label>
                                    <select
                                        class="form-control"
                                        @change.prevent="search"
                                        v-model="schedule.course_type_id"
                                        placeholder="Белсенді"
                                    >
                                        <option :value="null" hidden>
                                            Выбрать
                                        </option>
                                        <option v-for="courseType in courseTypes" :value="courseType.id">
                                            {{courseType.name}}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Тип обучения</label>
                                    <select
                                        class="form-control"
                                        @change.prevent="search"
                                        v-model="schedule.train_type_id"
                                        placeholder="Белсенді"
                                    >
                                        <option :value="null" hidden>
                                            Выбрать
                                        </option>
                                        <option v-for="trainType in trainTypes" :value="trainType.id">
                                            {{trainType.name}}
                                        </option>
                                    </select>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary mr-1">
                            Сақтау
                        </button>
                        <button type="button" class="btn btn-danger" @click.prevent="back()">
                            Артқа
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
        props: ['schedules', 'date', 'day', 'subjects', 'teachers', 'courseTypes', 'trainTypes', 'shifts'],
        data() {
            return {
                schedule: {
                    start_time: null,
                    end_time: null,
                    subject_id: null,
                    teacher_id: null,
                    shift_id: 1,
                    course_type_id: 1,
                    train_type_id: 1,
                    date: this.date,
                    day: route().params.day,
                },
                days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'],
            }
        },
        methods: {
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
        },
    };

</script>
