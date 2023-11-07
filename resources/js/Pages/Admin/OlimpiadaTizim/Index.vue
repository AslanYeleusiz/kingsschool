<template>

    <head>
        <title>Админ панель | Олимпиада қатысушылар тізімі</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Қатысушылар тізімі</h1>
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
                            Қатысушылар тізімі
                        </li>
                    </ol>
                </div>
            </div>
        </template>
        <template #header>
            <div class="buttons d-flex align-items-center">
                <Link class="btn btn-primary mr-2" :href="route('admin.olimpiadaTizim.create')">
                <i class="fa fa-plus"></i> Қосу
                </Link>
                <Link class="btn btn-danger" :href="route('admin.olimpiadaTizim.index')">
                <i class="fa fa-trash"></i> Фильтрді тазалау
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
                                        <th>Қолданушы ID</th>
                                        <th>Қатысушы аты</th>
                                        <th>Категориясы</th>
                                        <th>Қысқа аты</th>
                                        <th>Қатысу коды</th>
                                        <th>Тапсырды / Балл</th>
                                        <th>Төленді / төленбеді</th>
                                        <th>Уақыты (тіркелу)</th>
                                        <th>Әрекет</th>
                                    </tr>
                                    <tr class="filters">
                                        <td></td>
                                        <td>
                                            <input v-model="filter.user_id" class="form-control" placeholder="Қолданушы ID" @keyup.enter="search" />
                                        </td>
                                        <td>
                                            <input v-model="filter.katysushy_name" class="form-control" placeholder="Тіркелген есімі" @keyup.enter="search" />
                                        </td>
                                        <td>
                                            <select v-model="filter.o_katysushy_idd" class="form-control" placeholder="Категория" @change.prevent="search">
                                                <option :value="null">
                                                    Барлығы
                                                </option>
                                                <option :value="category.idd" :key="
                                                        'category' +
                                                        category.idd
                                                    " v-for="category in katysushylar">
                                                    {{ category.o_katysushy }}
                                                </option>
                                            </select>
                                        </td>
                                        <td>
                                            <input v-model="filter.bagyt_name" class="form-control" placeholder="Қысқа аты" @keyup.enter="search" />
                                        </td>
                                        <td>
                                            <input v-model="filter.obwcode" class="form-control" placeholder="Қатысу коды" @keyup.enter="search" />
                                        </td>
                                        <td></td>
                                        <td>
                                            <select class="form-control" @change.prevent="search" v-model="filter.success" placeholder="Белсенді">
                                                <option :value="null">
                                                    Барлығы
                                                </option>
                                                <option value="0">
                                                    Төленбегендер
                                                </option>
                                                <option value="1">
                                                    Төлегендер
                                                </option>
                                            </select>

                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="odd" v-for="(
                                            o_katysushy, index
                                        ) in o_katysushylar.data" :key="'o_katysushy' + o_katysushy.idd">
                                        <td>
                                            {{
                                                o_katysushylar.from
                                                    ? o_katysushylar.from + index
                                                    : index + 1
                                            }}
                                        </td>
                                        <td>{{ o_katysushy.user_id }}</td>
                                        <td>{{ o_katysushy.o_katysushy_fio }}</td>
                                        <td>{{ o_katysushy.o_katysushy.o_katysushy }}</td>
                                        <td>{{ o_katysushy.bagyty.bagyt }}</td>
                                        <td>{{ o_katysushy.obwcode }}</td>
                                        <td>
                                            {{ o_katysushy.o_tizim ? o_katysushy.o_tizim.tapsyrgan ? o_katysushy.o_tizim.result : 'Тапсырмады' : 'Тапсырмады' }}
                                        </td>
                                        <td>
                                            <span class="badge" :class="{
                                                'badge-success':
                                                    o_katysushy.success ==
                                                    1,
                                                'badge-danger':
                                                    o_katysushy.success !=
                                                    1,
                                            }">
                                                {{
                                                getStatusText(
                                                    o_katysushy.success
                                                )
                                            }}
                                            </span>

                                        </td>
                                        <td>{{o_katysushy.o_date}}</td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <template v-if="o_katysushy.success == 1">
                                                    <a :href="
                                                        route(
                                                            'admin.olimpiadaTizim.getCertificate',
                                                            o_katysushy.idd
                                                        )
                                                    " class="btn btn-info" title="Диплом немесе сертификат">
                                                        <i class="fas fa-clipboard-check"></i>
                                                    </a>
                                                    <a :href="
                                                        route(
                                                            'admin.olimpiadaTizim.getAlgys',
                                                            o_katysushy.idd
                                                        )
                                                    " class="btn btn-info" title="Ата-анасына алғыс хат">
                                                        <i class="fas fa-envelope"></i>
                                                    </a>
                                                    <a v-if="o_katysushy.o_zhetekshi_id" :href="
                                                        route(
                                                            'admin.olimpiadaTizim.zh_algys',
                                                            o_katysushy.idd
                                                        )
                                                    " class="btn btn-info" title="Жетекшіге алғыс хат">
                                                        <i class="fas fa-envelope-open-text"></i>
                                                    </a>
                                                </template>
                                                <Link :href="
                                                        route(
                                                            'admin.olimpiadaTizim.edit',
                                                            o_katysushy.idd
                                                        )
                                                    " class="btn btn-primary" title="Изменить">
                                                <i class="fas fa-edit"></i>
                                                </Link>


                                                <button @click.prevent="
                                                        deleteData(o_katysushy.idd)
                                                    " class="btn btn-danger" title="Жою">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Pagination :links="o_katysushylar.links" />
                </div>
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
    export default {
        components: {
            AdminLayout,
            Link,
            Pagination,
            Head,
        },
        props: [
            "o_katysushylar",
            "katysushylar",
        ],
        data() {
            return {
                filter: {
                    user_id: route().params.user_id ? route().params.user_id : null,
                    katysushy_name: route().params.katysushy_name ?
                        route().params.katysushy_name : null,
                    o_katysushy_idd: route().params.o_katysushy_idd ? route().params.o_katysushy_idd : null,
                    obwcode: route().params.obwcode ? route().params.obwcode : null,
                    bagyt_name: route().params.bagyt_name ? route().params.bagyt_name : null,
                    success: route().params.success ? route().params.success : null,
                },
                types: ['Облыстық', 'Республикалық', 'Халықаралық'],
                loading: 0,
            };
        },
        methods: {
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
                        this.$inertia.delete(route("admin.olimpiadaTizim.destroy", id));
                    }
                });

            },
            getStatusText(e) {
                if (e) return "Төленді"
                return "Төленбеді"
            },
            getCategory(e) {
                switch (e) {
                    case 1:
                        return "Тәрбиешілерге"
                    case 2:
                        return "Ұстаздарға"
                    case 3:
                        return "Оқушыларға"
                    case 4:
                        return "Студенттерге"
                }
            },
            search() {
                this.loading = 1
                const params = this.clearParams(this.filter);
                this.$inertia.get(route("admin.olimpiadaTizim.index"), params);
            },
        },
    };

</script>
