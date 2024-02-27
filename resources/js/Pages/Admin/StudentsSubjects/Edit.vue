<template>
    <head>
        <title>Админ панель | Изменить предмет</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Изменить предмет</h1>
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
                            <a :href="route('admin.studentsSubjects.index', this.user_id)">
                                <i class="fas fa-dashboard"></i>
                                Предметы студента
                            </a>
                        </li>
                        <li class="breadcrumb-item active">
                            Изменить предмет
                        </li>
                    </ol>
                </div>
            </div>
        </template>
        <div class="container-fluid">
            <div class="card card-primary">
                <form method="post" @submit.prevent="submit">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Предмет</label>
                                    <select class="form-control" @change.prevent="calculatePrice(true)"
                                        v-model="edu_order.subject_id" required>
                                        <option value="" disabled selected hidden>
                                            Выбрать
                                        </option>
                                        <option v-for="subject in subjects" :key="'subject' + subject.id"
                                            :value="subject.id">
                                            {{ subject.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Преподаватель</label>
                                    <select class="form-control" v-model="edu_order.teacher_id" placeholder="Выбрать"
                                        required>
                                        <option value="" hidden>
                                            Выбрать
                                        </option>
                                        <option v-for="teacher in teachers" :key="'teacher' + teacher.id"
                                            :value="teacher.id">
                                            {{ teacher.fio }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Тип посещения</label>
                                    <select class="form-control" v-model="edu_order.shift_id"
                                        @change.prevent="calculatePrice(true)" placeholder="Выбрать" required>
                                        <option value="" hidden>
                                            Выбрать
                                        </option>
                                        <option v-for="shift in shifts" :key="'shift' + shift.id" :value="shift.id">
                                            {{ shift.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Курс</label>
                                    <select class="form-control" @change.prevent="calculatePrice(true)"
                                        v-model="edu_order.course_type_id" placeholder="Выбрать" required>
                                        <option :value="null" hidden>
                                            Выбрать
                                        </option>
                                        <option v-for="courseType in courseTypes" :key="'courseType' + courseType.id"
                                            :value="courseType.id">
                                            {{ courseType.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Обучение</label>
                                    <select class="form-control" @change.prevent="calculatePrice(true)"
                                        v-model="edu_order.train_type_id" placeholder="Выбрать" required>
                                        <option :value="null" hidden>
                                            Выбрать
                                        </option>
                                        <option v-for="trainType in trainTypes" :key="'trainType' + trainType.id"
                                            :value="trainType.id">
                                            {{ trainType.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Цена</label>
                                    <input type="text" class="form-control" v-model="eduOrder.price"
                                        name="eduOrderPricePrice" placeholder="Цена" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Дата начало обучения</label>
                                    <input type="date" class="form-control" @change.prevent="add28Days()"
                                        v-model="edu_order.start_date" name="eduOrderPrice" required />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Дата конца обучения</label>
                                    <input type="date" class="form-control" v-model="edu_order.end_date"
                                        name="eduOrderPrice" required />
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
    props: ['edu_order', 'trainTypes', 'courseTypes', 'subjects', 'teachers', 'shifts', 'user_id'],
    data() {
        return {
            eduOrder: {
                price: this.edu_order.price,
            },
            teacherOrders: this.trainTypes,
            subjectOrders: null,
        }
    },
    methods: {
        calculatePrice(ne = null) {
            if (!this.edu_order.subject_id) return this.warningText("Предмет не выбран!", null)
            if (!ne) {
                this.eduOrder.price = this.subjectOrders.find((el) => {
                    return el.course_type_id == this.edu_order.course_type_id &&
                        el.shift_id == this.edu_order.shift_id &&
                        el.train_type_id == this.edu_order.train_type_id
                }).price
            } else {
                axios.get(`/subject/${this.edu_order.subject_id}/get-subject-order`).then((res) => {
                    this.subjectOrders = res.data
                    this.eduOrder.price = this.subjectOrders.find((el) => {
                        return el.course_type_id == this.edu_order.course_type_id &&
                            el.shift_id == this.edu_order.shift_id &&
                            el.train_type_id == this.edu_order.train_type_id
                    }).price
                })
            }
        },
        warningText(text, desc = "Барлық бағандар толтыру қажет!") {
            Swal.fire({
                title: text,
                text: desc,
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Окей!",
            });
        },
        add28Days() {
            if (this.edu_order.start_date) {
                const inputDateObj = new Date(this.edu_order.start_date);
                const resultDateObj = new Date(inputDateObj.getTime() + 28 * 24 * 60 * 60 * 1000);
                this.edu_order.end_date = resultDateObj.toISOString().split("T")[0];
            } else {
                console.error("Введите дату");
            }
        },
        submit() {
            this.edu_order.price = this.eduOrder.price;
            this.$inertia.put(
                route('admin.studentsSubjects.update', [this.user_id, this.edu_order.id]),
                this.edu_order, {
                onError: () => console.log("An errors has occurred"),
                onSuccess: () =>
                    console.log("The new contact has been saved"),
            }
            );
        },

        logme(index, shindex, trindex) {
            console.log(index + ' ' + shindex + ' ' + trindex)
        }
    },
};

</script>
