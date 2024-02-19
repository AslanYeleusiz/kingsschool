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
                                    <label for="">ИИН</label>
                                    <input type="text" class="form-control" v-model="iin" name="iin" placeholder="ИИН" />
                                    <validation-error :field="'iin'" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Фамилия</label>
                                    <input type="text" class="form-control" v-model="user.s_name" name="s_name" placeholder="Фамилия" />
                                    <validation-error :field="'s_name'" />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Имя</label>
                                    <input type="text" class="form-control" v-model="user.name" name="name" placeholder="Имя" />
                                    <validation-error :field="'name'" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Дата рожденья</label>
                                    <input type="date" class="form-control" v-model="user.birthday" name="birthday" placeholder="Фамилия" />
                                    <validation-error :field="'birthday'" />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Телефон</label>
                                    <input type="text" class="form-control" v-model="user.tel_num" name="tel_num" placeholder="Имя" />
                                    <validation-error :field="'tel_num'" />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Телефон родителя</label>
                                    <input type="text" class="form-control" v-model="user.tel_num_family" name="tel_num_family" placeholder="Телефон родителя" />
                                    <validation-error :field="'tel_num_family'" />
                                </div>
                            </div>
                        </div>
                        <div class="form-group file-upload">
                            <label for="">Сурет</label>
                            <div class="ml-2">
                                <img v-if="user.avatar && !image.file" :src="route('index')  +'/storage/files/' +  user.avatar" height="300" alt="image" style="padding-bottom: 10px" />
                                <img v-show="image.preview" :src="image.preview" height="300" style="padding-bottom: 10px" />
                                <div class="file-input" style="margin-right: 10px">
                                    <input type="file" hidden name="image" @change="handleImageUpload()" ref="image" accept="image/jpeg,image/png" class="file" id="image" />
                                    <label for="image"> Загрузить </label>
                                </div>
                            </div>
                            <validation-error :field="'image'" />
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Роль</label>
                                    <select class="form-control" @change.prevent="search" v-model="user.role_id" placeholder="Белсенді">
                                        <option :value="null" hidden>
                                            Роль таңдаңыз
                                        </option>
                                        <option v-for="role in roles" :key="'role' + role.id" :value="role.id">
                                            {{role.name}}
                                        </option>
                                    </select>
                                    <validation-error :field="'role_id'" />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Филлиал</label>
                                    <select class="form-control" @change.prevent="search" v-model="user.filial_id" placeholder="Белсенді">
                                        <option :value="null" hidden>
                                            Филлиал таңдаңыз
                                        </option>
                                        <option v-for="filial in filials" :key="'filial' + filial.id" :value="filial.id">
                                            {{filial.name}}
                                        </option>
                                    </select>
                                    <validation-error :field="'filial_id'" />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Құпия сөз</label>
                                    <input type="text" class="form-control" v-model="user.real_password" name="real_password" placeholder="Құпия сөз" />
                                    <validation-error :field="'real_password'" />
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
        props: ['roles', 'filials', 'user'],
        data() {
            return {
                image: {
                    file: "",
                    preview: "",
                },
                iin: this.user.iin,
            }
        },
        methods: {
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

            submit() {
                this.user.iin = this.iin
                if(this.image.file){
                    this.user.image = this.image.file
                }
                //                if(this.$auth.user.role_id == 1) {
                if (!this.user.role_id) return this.warningText('Роль тандалмады!')
                if (!this.user.filial_id) return this.warningText('Филиал тандалмады!')
                
                //                }
                this.user['_method'] = 'put';
                this.$inertia.post(
                    route("admin.users.update", this.user.id),
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
                this.warningText('Бұндай ИИН бұрын тіркелген', null)
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

</style>
