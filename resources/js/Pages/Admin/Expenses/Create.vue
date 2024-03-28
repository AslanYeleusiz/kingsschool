<template>
    <head>
        <title>Админ панель | Добавить расход</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Добавить расход</h1>
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
                            <a :href="route('admin.expenses.index')">
                                <i class="fas fa-dashboard"></i>
                                Расходы
                            </a>
                        </li>
                        <li class="breadcrumb-item active">
                            Добавить расход
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
                                <label for="">Название</label>
                                <input type="text" class="form-control" v-model="expenses.name" name="name"
                                    placeholder="Название" required />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="input-group mt-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Сумма</span>
                                    </div>
                                    <input type="number" class="form-control" v-model="expenses.summa"
                                        aria-describedby="basic-addon3" required />
                                    <div class="input-group-append">
                                        <span class="input-group-text">₸</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Типы расхода</label>
                                    <select class="form-control" v-model="expenses.type_id" required>
                                        <option :value="null" hidden disabled selected>
                                            Выберите тип расхода
                                        </option>
                                        <option v-for="typee in types" :key="typee.id" :value="typee.id">
                                            {{ typee.name }}
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
import { Link, Head } from "@inertiajs/inertia-vue3";
import Pagination from "../../../Components/Pagination.vue";
import ValidationError from "../../../Components/ValidationError.vue";

export default {
    props: [
        'types',
    ],
    components: {
        AdminLayout,
        Link,
        Pagination,
        ValidationError,
        Head
    },
    data() {
        return {
            expenses: {
                name: null,
                summa: null,
                type_id: null,
            },
        }
    },
    methods: {
        submit() {
            this.$inertia.post(
                route("admin.expenses.store"),
                this.expenses,
                {
                    onError: () => console.log("An error has occurred"),
                    onSuccess: () =>
                        console.log("The new contact has been saved"),
                }
            );
        },
    },
};
</script>
  