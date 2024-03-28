<template>
  <head>
        <title>Админ панель | Изменить тип обучения</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
              <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Изменить тип обучения</h1>
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
                            <a :href="route('admin.trainTypes.index')">
                                <i class="fas fa-dashboard"></i>
                                Список типов обучения
                            </a>
                        </li>
                        <li class="breadcrumb-item active">
                            Изменить тип обучения
                        </li>
                    </ol>
                </div>
            </div>
        </template>
        <div class="container-fluid">
            <div class="card card-primary">
                <form method="post" @submit.prevent="submit">
                    <div class="card-body">
                        <div class="form-group">
                            <label for="">Название</label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="trainType.name"
                                name="name"
                                placeholder="Название"
                            />
                            <validation-error :field="'name'" />
                        </div>
                        <div class="form-group">
                            <label for="">Процент прибавления к цене (%)</label>
                            <input
                                type="number"
                                class="form-control"
                                v-model="trainType.percent"
                                name="percent"
                                placeholder="15"
                            />
                            <validation-error :field="'percent'" />
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
    components: {
        AdminLayout,
        Link,
        Pagination,
        ValidationError,
        Head
    },
    props: ["trainType"],
    methods: {
        submit() {
            this.$inertia.put(
                route("admin.trainTypes.update", this.trainType.id),
                this.trainType,
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