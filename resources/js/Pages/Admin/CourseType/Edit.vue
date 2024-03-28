<template>
  <head>
        <title>Админ панель | Изменить тип курса</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
              <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Изменить тип курса</h1>
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
                            <a :href="route('admin.courseTypes.index')">
                                <i class="fas fa-dashboard"></i>
                                Типы курса
                            </a>
                        </li>
                        <li class="breadcrumb-item active">
                            Изменить тип курса
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
                                v-model="courseType.name"
                                name="name"
                                placeholder="Название"
                            />
                            <validation-error :field="'name'" />
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
    props: ["courseType"],
    methods: {
        submit() {
            this.$inertia.put(
                route("admin.courseTypes.update", this.courseType.id),
                this.courseType,
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