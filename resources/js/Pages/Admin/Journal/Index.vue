<template>

    <head>
        <title>Админ панель | Журнал</title>
        <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Журнал группы {{ schedule.group.name }}</h1>
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
        </template>
        <div class="container-fluid">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-12">
                            <table class="table table-hover table-bordered table-striped dataTable dtr-inline">
                                <thead>
                                    <tr role="row">
                                        <th>Аты</th>
                                        <th v-for="day in lastDayOfMonth" :key="day">
                                            {{ day }}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="odd" v-for="(student, index) in student.data"
                                        :key="'student' + student.id">
                                        <td>{{ student.user.fio }}</td>
                                        <td v-for="day in lastDayOfMonth" :key="day"
                                            @click.prevent="submit(student.id, day, statusByStudentId(student.id, day))"
                                            :class="[day == schedule_day ? 'c-p bg' : '']">
                                            <div v-if="statusByStudentId(student.id, day) == 1">
                                                <i class="fas fa-solid fa-plus"></i>
                                            </div>
                                            <div v-if="statusByStudentId(student.id, day) == 2">
                                                <i class="fas fa-solid fa-minus"></i>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Pagination :links="student.links" />
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
        'student',
        'journal_students',
        'schedule_day',
        'lastDayOfMonth',
        'schedule',
    ],
    data() {
        return {
            loading: 0,
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
    methods: {
        submit(student_id, day, type) {
            if (day == this.schedule_day) {
                type = type == 0 ? 1 : type == 1 ? 2 : type == 2 ? 0 : 3;
                this.$inertia.post(
                    route("admin.journal.store"),
                    {
                        schedule: this.schedule,
                        student_id: student_id,
                        type: type,
                        status: this.status,
                    }
                );
            }
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
                    this.$inertia.delete(route('admin.journal.destroy', id))
                }
            });
        },
    }
};
</script>
<style>
.bg {
    background: #3de43d;
}

.popup {
    padding: 30px 0 43px;
    background: #fff;
    border-radius: 20px;
    width: 370px;
}

.close-ico {
    right: 0;
    top: 0;
    margin: 20px 20px 0 0;
    cursor: pointer;
}

.end_title {
    margin-bottom: 15px;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 0em;
    font-weight: 600;
}

.endBtn {
    height: 48px;
    width: 280px;
}

.cancelBtn {
    border: 1px solid #3464E7;
    border-radius: 15px;
    color: #3464E7;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0px;
    transition: all 0.3s ease;
    margin: 0 auto;
    cursor: pointer;
}

.cancelBtn:hover {
    background: #1943B8;
    color: #fff;
}
</style>