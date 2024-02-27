<template>
    <head>
        <title>Админ панель | Предметы студента</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Предметы студента {{ subjects.data[0].user.fio }}</h1>
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
                            Предметы студента
                        </li>
                    </ol>
                </div>
            </div>
        </template>
        <template #header>
            <div class="buttons d-flex align-items-center">
                <Link class="btn btn-primary mr-2" :href="route('admin.studentsSubjects.create',
                    subjects.data[0].user_id
                )">
                <i class="fa fa-plus"></i> Қосу
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
                                        <th>Название</th>
                                        <th>Тип курса</th>
                                        <th>Тип обучения</th>
                                        <th>Цена</th>
                                        <th>Группа</th>
                                        <th>Әрекет</th>
                                    </tr>
                                    <tr class="filters">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="odd" v-for="(subject, index) in subjects.data" :key="'subject' + subject.id">
                                        <td>
                                            {{
                                                subject.from
                                                ? subject.from + index
                                                : index + 1
                                            }}
                                        </td>
                                        <td>{{ subject.subject.name }}</td>
                                        <td>{{ subject.course_type.name }}</td>
                                        <td>{{ subject.train_type.name }}</td>
                                        <td><span class="d-flex"> {{ subject.price }} ₸</span></td>
                                        <td v-if="subject.group">{{ subject.group.name }}</td>
                                        <td v-else>Нет группы!</td>
                                        <td>{{ subject.teacher.fio }} /
                                            <Link :href="route(
                                                'admin.students.index',
                                                { teacher_id: subject.teacher_id }
                                            )
                                                " class="block" title="Список студентов">
                                            Список студентов
                                            </Link>
                                        </td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <Link :href="route(
                                                    'admin.studentsSubjects.edit',
                                                    [subject.user_id, subject.id]
                                                )
                                                    " class="btn btn-primary" title="Изменить">
                                                <i class="fas fa-edit"></i>
                                                </Link>
                                                <button @click.prevent="deleteData(subject.user_id, subject.id)"
                                                    class="btn btn-danger" title="Жою">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Pagination :links="subjects.links" />
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
    props: ["subjects"],
    data() {
        return {
            loading: 0,
        };
    },
    mounted() {
        console.log(this.subjects.data);
    },
    methods: {
        deleteData(user_id, edu_order_id) {
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
                    this.$inertia.delete(route('admin.studentsSubjects.destroy', [user_id, edu_order_id]))
                }
            });


        },
        dublicate(id) {
            Swal.fire({
                title: "Дубликатқа жасауға сенімдісіз бе?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Иә, жоямын!",
                cancelButtonText: "Жоқ",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$inertia.get(route('admin.subjects.dublicate', id))
                }
            });


        },

        search() {
            this.loading = 1
            const params = this.clearParams(this.filter);
            this.$inertia.get(route('admin.studentsSubjects.index'), params)
        },
    }
};
</script>