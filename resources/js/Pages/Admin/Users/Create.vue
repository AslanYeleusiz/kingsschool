<template>

    <head>
        <title>Админ панель | Қолданушы қосу</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Қолданушы қосу</h1>
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
                            <a :href="route('admin.users.index')">
                                <i class="fas fa-dashboard"></i>
                                Қолданушы тізімі
                            </a>
                        </li>
                        <li class="breadcrumb-item active">
                            Қолданушы қосу
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
                                    <label for="">Роль</label>
                                    <select class="form-control" v-model="user.role_id" placeholder="Белсенді" required>
                                        <option value="" hidden>
                                            Роль таңдаңыз
                                        </option>
                                        <option v-for="role in roles" :key="'role' + role.id" :value="role.id">
                                            {{ role.name }}
                                        </option>
                                    </select>
                                    <validation-error :field="'role_id'" />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Филлиал</label>
                                    <select class="form-control" v-model="user.filial_id" placeholder="Белсенді"
                                        required @change.prevent="getTeachers(user.filial_id)">
                                        <option :value="null" hidden disabled selected>
                                            Филлиал таңдаңыз
                                        </option>
                                        <option v-for="filial in filials" :key="'filial' + filial.id"
                                            :value="filial.id">
                                            {{ filial.name }}
                                        </option>
                                    </select>
                                    <validation-error :field="'filial_id'" />
                                </div>
                            </div>
                            <div v-if="user.role_id != 4" class="col-md-4">
                                <div class="form-group">
                                    <label for="">Құпия сөз</label>
                                    <input type="text" class="form-control" v-model="user.real_password"
                                        name="real_password" placeholder="Құпия сөз" />
                                    <validation-error :field="'real_password'" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">ИИН</label>
                                    <input type="text" class="form-control" v-model="iin" name="iin" placeholder="ИИН"
                                        required maxlength="12" />
                                    <validation-error :field="'iin'" />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div v-if="check_iin" class="spinner-border text-primary matop" role="status"></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Фамилия</label>
                                    <input type="text" class="form-control" v-model="user.s_name" name="s_name"
                                        placeholder="Фамилия" required />
                                    <validation-error :field="'s_name'" />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Имя</label>
                                    <input type="text" class="form-control" v-model="user.name" name="name"
                                        placeholder="Имя" required />
                                    <validation-error :field="'name'" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Дата рожденья</label>
                                    <input type="date" class="form-control" v-model="user.birthday" name="birthday"
                                        placeholder="Фамилия" required />
                                    <validation-error :field="'birthday'" />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Телефон</label>
                                    <input type="text" class="form-control" v-model="user.tel_num" name="tel_num"
                                        placeholder="Номер телефона" required />
                                    <validation-error :field="'tel_num'" />
                                </div>
                            </div>
                            <div v-if="user.role_id == 4" class="col-md-4">
                                <div class="form-group">
                                    <label for="">Телефон родителя</label>
                                    <input type="text" class="form-control" v-model="user.tel_num_family"
                                        name="tel_num_family" placeholder="Телефон родителя" />
                                    <validation-error :field="'tel_num_family'" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Айди карточки</label>
                                    <input type="number" class="form-control" v-model="card_id" name="card_id"
                                        placeholder="Айди" />
                                    <validation-error :field="'card_id'" />
                                </div>
                            </div>
                        </div>
                        <div class="form-group file-upload">
                            <label for="">Сурет</label>
                            <div class="ml-2">
                                <img v-if="user.image && !image.file"
                                    :src="route('index') + '/storage/images/' + user.image" height="300" alt="image"
                                    style="padding-bottom: 10px" />
                                <img v-show="image.preview" :src="image.preview" height="300"
                                    style="padding-bottom: 10px" />
                                <div class="file-input" style="margin-right: 10px">
                                    <input type="file" hidden name="image" @change="handleImageUpload()" ref="image"
                                        accept="image/jpeg,image/png" class="file" id="image" />
                                    <label for="image"> Загрузить </label>
                                </div>
                            </div>
                            <validation-error :field="'image'" />
                        </div>
                        <h2 v-if="user.role_id == 3 || user.role_id == 4" class="mt-5">Обучение</h2>

                        <template v-if="user.role_id == 4" v-for="(eduOrder, index) in eduOrders">
                            <hr>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="">Предмет</label>
                                        <select class="form-control" @change.prevent="calculatePrice(index, true)"
                                            v-model="eduOrder.subject_id" placeholder="Выбрать" required>
                                            <option value="" hidden>
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
                                        <select class="form-control" v-model="eduOrder.teacher_id" placeholder="Выбрать"
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
                                        <select class="form-control" v-model="eduOrder.shift_id"
                                            @change.prevent="calculatePrice(index)" placeholder="Выбрать" required>
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
                                        <select class="form-control" @change.prevent="calculatePrice(index)"
                                            v-model="eduOrder.course_type_id" placeholder="Выбрать" required>
                                            <option :value="null" hidden>
                                                Выбрать
                                            </option>
                                            <option v-for="courseType in courseTypes"
                                                :key="'courseType' + courseType.id" :value="courseType.id">
                                                {{ courseType.name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="">Обучение</label>
                                        <select class="form-control" @change.prevent="calculatePrice(index)"
                                            v-model="eduOrder.train_type_id" placeholder="Выбрать" required>
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
                                            name="eduOrderPrice" placeholder="Цена" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="">Дата начало обучения</label>
                                        <input type="date" class="form-control" @change.prevent="add28Days(index)"
                                            v-model="eduOrder.start_date" name="eduOrderPrice" required />
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="">Дата конца обучения</label>
                                        <input type="date" class="form-control" v-model="eduOrder.end_date"
                                            name="eduOrderPrice" required />
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="">Количество часов</label>
                                        <input type="number" class="form-control" v-model="eduOrder.hours"
                                            name="hours" required />
                                    </div>
                                </div>
                                
                            </div>
                            <div class="d-flex justify-content-end"><button @click.prevent="deleteOrder(index)"
                                    class="btn btn-danger mt-4">
                                    <i class="fas fa-times"></i>
                                </button></div>
                        </template>
                        <button v-if="user.role_id == 4" @click.prevent="addEduOrder()" class="btn btn-primary mt-4">
                            + Добавить обучения
                        </button>


                        <template v-if="user.role_id == 3">
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <label for="">Дата начала обучения</label>
                                        <input type="date" class="form-control" v-model="user.start_edu_date"
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <label for="">Зарплата</label>
                                        <div v-for="teacherOrder in teacherOrders" class="input-group mt-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="basic-addon3">{{ teacherOrder.name
                                                    }}</span>
                                            </div>
                                            <input type="number" class="form-control" v-model="teacherOrder.percent"
                                                aria-describedby="basic-addon3" style="text-align: right;" required />
                                            <div class="input-group-append">
                                                <span class="input-group-text">%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <div class="card-footer mt-5">
                            <button type="submit" class="btn btn-success mr-1">
                                Сақтау
                            </button>
                            <button type="button" class="btn btn-danger" @click.prevent="back()">
                                Артқа
                            </button>
                        </div>
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
    props: ['roles', 'filials', 'trainTypes', 'courseTypes', 'subjects', 'shifts'],
    //Далбаеб осы жерын бытыр
    data() {
        return {
            user: {
                image: '',
                role_id: '',
                filial_id: route().params.filial_id ?? null,
                start_date: null,
            },
            image: {
                file: "",
                preview: "",
            },

            eduOrders: [{
                subject_id: '',
                teacher_id: '',
                shift_id: 1,
                course_type_id: 1,
                train_type_id: 1,
                price: 0,
                hours: null,
                start_date: null,
                end_date: null,
            }],
            teachers: [],
            teacherOrders: this.trainTypes,
            subjectOrders: null,
            iin: '',
            check_iin: false,
            card_id: null,
        }
    },
    methods: {
        getTeachers(id) {
            axios.get(route('admin.filials.getTeachers', id)).then((res) => {
                this.teachers = res.data
            })
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
        deleteOrder(index) {
            this.eduOrders.splice(index, 1);
        },
        calculatePrice(index, ne = null) {
            if (!this.eduOrders[index].subject_id) return this.warningText("Предмет не выбран!", null)
            if (!ne) {
                this.eduOrders[index].price = this.subjectOrders.find((el) => {
                    return el.course_type_id == this.eduOrders[index].course_type_id &&
                        el.shift_id == this.eduOrders[index].shift_id &&
                        el.train_type_id == this.eduOrders[index].train_type_id
                }).price
            } else {
                axios.get(`/subject/${this.eduOrders[index].subject_id}/get-subject-order`).then((res) => {
                    this.subjectOrders = res.data
                    this.eduOrders[index].price = this.subjectOrders.find((el) => {
                        return el.course_type_id == this.eduOrders[index].course_type_id &&
                            el.shift_id == this.eduOrders[index].shift_id &&
                            el.train_type_id == this.eduOrders[index].train_type_id
                    }).price
                })
            }
        },
        add28Days(index) {
            if (this.eduOrders[index].start_date) {
                const inputDateObj = new Date(this.eduOrders[index].start_date);
                const resultDateObj = new Date(inputDateObj.getTime() + 28 * 24 * 60 * 60 * 1000);
                this.eduOrders[index].end_date = resultDateObj.toISOString().split("T")[0]; // Форматирует результат в строку YYYY-MM-DD
            } else {
                // Обработка случая, если дата не была введена
                console.error("Введите дату");
            }
        },
        addEduOrder() {
            const order = {
                subject_id: '',
                teacher_id: '',
                course_type_id: 1,
                train_type_id: 1,
                shift_id: 1,
                price: 0,
                hours: null,
                start_date: null,
                end_date: null,
            }
            this.eduOrders.push(order)
        },

        submit() {
            this.user.iin = this.iin
            this.user.card_id = this.card_id
            if (this.image.file) {
                this.user.image = this.image.file
            }
            //                if(this.$auth.user.role_id == 1) {
            if (!this.user.role_id) return this.warningText('Роль тандалмады!')
            if (!this.user.filial_id) return this.warningText('Филиал тандалмады!')

            //                }
            if (this.user.role_id == 4) {
                this.user.eduOrders = this.eduOrders
            }

            if (this.user.role_id == 3) {
                this.user.eduOrders = this.teacherOrders
            }



            this.$inertia.post(
                route("admin.users.store"),
                this.user, {
                onError: () => console.log("An error has occurred"),
                onSuccess: () =>
                    console.log("The new contact has been saved"),
            }
            );
        },
        handleImageUpload() {
            this.image.file = this.$refs.image.files[0];
            if (this.image.file) {
                const reader = new FileReader();
                reader.onloadend = (file) => {
                    this.image.preview = reader.result;
                };
                reader.readAsDataURL(this.image.file);
                this.$refs.image.value = "";
            } else {
                this.user.image = "";
                this.image.file = "";
                this.image.preview = "";
            }
        },
        checkIin() {
            this.check_iin = 1
            axios.get('/admin/check-iin', {
                params: {
                    iin: this.iin
                }
            }).then((res) => {
                if (res.data.status == true) {
                    this.warningText('Бұндай ИИН бұрын тіркелген', null)
                }
                console.log(res.data)
                this.check_iin = 0
            })

        }

    },
    watch: {
        iin(newVal) {
            if (newVal.length === 12) {
                this.checkIin();
            }
        }
    },
};

</script>

<style lang="scss">
.file-upload {
    .file {
        opacity: 0;
        width: 0.1px;
        height: 0.1px;
    }

    .file-input label {
        width: 158px;
        height: 40px;
        border-radius: 5px;
        border-color: #ddd;
        background: #eee;
        box-shadow: 0 3px 4px rgb(0 0 0 / 40%);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #555;
        cursor: pointer;
        transition: transform 0.2s ease-out;
    }

    input:hover+label,
    input:focus+label {
        transform: scale(1.02);
    }
}

.matop {
    margin-top: 33px;
}
</style>
