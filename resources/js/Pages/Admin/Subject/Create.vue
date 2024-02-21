<template>

    <head>
        <title>Админ панель | Пән қосу</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Пән қосу</h1>
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
                            <a :href="route('admin.subjects.index')">
                                <i class="fas fa-dashboard"></i>
                                Пән тізімі
                            </a>
                        </li>
                        <li class="breadcrumb-item active">
                            Пән қосу
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
                                    <label for="">Название</label>
                                    <input type="text" class="form-control" v-model="subject.name" name="name" placeholder="Название" />
                                    <validation-error :field="'name'" />
                                </div>
                            </div>
                        </div>
                        <h2 class="mt-3">Цена</h2>
                        <hr>
                        <div v-for="(order, oindex) in orders" :key="'order'+order.id" class="ml-4">
                            <h4>{{order.name}}</h4>
                            <hr>
                            <div v-for="(shift, shindex) in order.shifts" :key="'shift'+shift.id" class="ml-4">
                                <h5>{{shift.name}}</h5>
                                <hr>
                                <div class="row ml-4">
                                    <div v-for="(trainType, trindex) in shift.trainTypes" :key="'trainType'+trainType.id" class="col-md-4">
                                        <div class="form-group">
                                            <label for="">{{trainType.name}} {{ trainType.price }}</label>
                                            <input type="number" class="form-control" v-model="trainType.price" placeholder="8000" @change="logme(oindex, shindex, trindex)" />
                                        </div>
                                    </div>
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
        props: ['courseTypes'],
        data() {
            return {
                subject: {
                    name: null,
                },
                orders: this.courseTypes,
            }
        },
        methods: {
            submit() {
                this.subject.orders = this.orders
                this.$inertia.post(
                    route("admin.subjects.store"),
                    this.subject, {
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
