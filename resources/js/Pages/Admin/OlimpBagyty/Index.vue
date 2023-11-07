<template>
       <head>
        <title>Админ панель | Олимпиада бағыты</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Олимпиада бағыты тізімі</h1>
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
                            Олимпиада бағыты тізімі
                        </li>
                    </ol>
                </div>
            </div>
        </template>
        <template #header>
            <div class="buttons d-flex align-items-center">
                <Link class="btn btn-primary mr-2" :href="route('admin.olimpiadaBagyty.create')">
                    <i class="fa fa-plus"></i> Қосу
                </Link>
                <Link
                    class="btn btn-danger"
                    :href="route('admin.olimpiadaBagyty.index')"
                >
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
                            <table
                                class="table table-hover table-bordered table-striped dataTable dtr-inline"
                            >
                                <thead>
                                    <tr role="row">
                                        <th>№</th>
                                        <th>Қысқа атауы</th>
                                        <th>Категориясы</th>
                                        <th>Толық аты</th>
                                        <th>Белсенді</th>
                                        <th>Сұрақтар саны</th>
                                        <th>Тегін / Ақылы</th>
                                        <th>Әрекет</th>
                                    </tr>
                                    <tr class="filters">
                                        <td></td>
                                        <td>
                                            <input
                                                v-model="filter.bagyt"
                                                class="form-control"
                                                placeholder="Бұрынғы бағасы"
                                                @keyup.enter="search"
                                            />
                                        </td>
                                        <td>
                                            <select
                                                v-model="filter.o_katysushy_idd"
                                                class="form-control"
                                                placeholder="Категория"
                                                @change.prevent="search"
                                            >
                                                <option :value="null">
                                                    Барлығы
                                                </option>
                                                <option
                                                    :value="category.idd"
                                                    :key="
                                                        'category' +
                                                        category.idd
                                                    "
                                                    v-for="category in katysushylar"
                                                >
                                                    {{ category.o_katysushy }}
                                                </option>
                                            </select>
                                        </td>
                                        <td>
                                            <input
                                                v-model="filter.o_bagyty"
                                                class="form-control"
                                                placeholder="Тақырыбы"
                                                @keyup.enter="search"
                                            />
                                        </td>
                                        
                                        <td>
                                            <select
                                                class="form-control"
                                                @change.prevent="search"
                                                v-model="filter.enable"
                                                placeholder="Белсенді"
                                            >
                                                <option :value="null">
                                                    Барлығы
                                                </option>
                                                <option value="0">
                                                    Белсенді емес
                                                </option>
                                                <option value="1">
                                                    Белсенді
                                                </option>
                                            </select>
                                        </td>
                                        <td></td>
                                        <td>
                                            <select
                                                class="form-control"
                                                @change.prevent="search"
                                                v-model="filter.is_free"
                                                placeholder="Ақылы/Тегін"
                                            >
                                                <option :value="null">
                                                    Барлығы
                                                </option>
                                                <option value="0">
                                                    Ақылы
                                                </option>
                                                <option value="1">
                                                    Тегін
                                                </option>
                                            </select>
                                        </td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        class="odd"
                                        v-for="(
                                            bagyt, index
                                        ) in bagyts.data"
                                        :key="'bagyt' + bagyt.id"
                                    >
                                        <td>
                                            {{
                                                bagyts.from
                                                    ? bagyts.from + index
                                                    : index + 1
                                            }}
                                        </td>
                                        <td>{{ bagyt.bagyt }}</td>
                                        <td>{{ bagyt.katysushilar }}</td>
                                        <td>{{ bagyt.o_bagyty }}</td>
                                        <td>
                                            <span
                                                class="badge badge-success"
                                                :class="{
                                                    'badge-success':
                                                        bagyt.enable ==
                                                        1,
                                                    'badge-danger':
                                                        bagyt.enable ==
                                                        0,
                                                }"
                                            >
                                                {{
                                                    getStatusText(
                                                        bagyt.enable
                                                    )
                                                }}
                                            </span>
                                        </td>
                                        <td>{{ bagyt.suraktar_count }}</td>
                                        <td>
                                            <span>
                                                {{
                                                    getStatusFreeText(
                                                        bagyt
                                                    )
                                                }}
                                            </span>
                                            
                                        </td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <Link
                                                    :href="
                                                        route(
                                                            'admin.olimpiadaOption.index',
                                                            { bagyt: bagyt.idd }
                                                        )
                                                    "
                                                    class="btn btn-success"
                                                    title="Нұсқалар"
                                                >
                                                    <i
                                                        class="fas fa-book-open"
                                                    ></i>
                                                </Link>
<!--
                                                <Link
                                                    :href="
                                                        route(
                                                            'admin.olimpiadaSuraktar.index',
                                                            { bagyt: bagyt.idd }
                                                        )
                                                    "
                                                    class="btn btn-success"
                                                    title="Сұрақтар"
                                                >
                                                    <i
                                                        class="fas fa-book-reader"
                                                    ></i>
                                                </Link>
-->

                                                <Link
                                                    :href="
                                                        route(
                                                            'admin.olimpiadaBagyty.edit',
                                                            bagyt.idd
                                                        )
                                                    "
                                                    class="btn btn-primary"
                                                    title="Изменить"
                                                >
                                                    <i class="fas fa-edit"></i>
                                                </Link>

                                                <button
                                                    @click.prevent="
                                                        deleteData(bagyt.idd)
                                                    "
                                                    class="btn btn-danger"
                                                    title="Жою"
                                                >
                                                    <i
                                                        class="fas fa-times"
                                                    ></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Pagination :links="bagyts.links" />
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
        Head,
    },
    props: [
        "bagyts",
        "katysushylar",
        "BAGYT_TYPE_PRICE"
    ],
    data() {
        return {
            filter: {
                o_bagyty: route().params.o_bagyty ? route().params.o_bagyty : null,
                o_katysushy_idd: route().params.o_katysushy_idd
                    ? route().params.o_katysushy_idd
                    : null,
                type: route().params.type
                    ? route().params.type
                    : null,
                bagyt: route().params.bagyt
                    ? route().params.bagyt
                    : null,
                enable: route().params.enable
                    ? route().params.enable
                    : null,
                is_free: route().params.is_free
                    ? route().params.is_free
                    : null,
            },
            loading: 0,
            types: ['Облыстық','Республикалық','Халықаралық'],
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
                this.$inertia.delete(route("admin.olimpiadaBagyty.destroy", id));
                }
            });

        },
        getCategory(e){
            switch(e){
                case 1: return "Тәрбиешілерге"
                case 2: return "Ұстаздарға"
                case 3: return "Оқушыларға"
                case 4: return "Студенттерге"
            }
        },
        getStatusFreeText(e){
            if(e.is_free == 1) return "Тегін"
            return this.BAGYT_TYPE_PRICE[e.o_katysushy_idd] + 'тг.'
        },
        getStatusText(e){
            if(e) return "Белсенді"
            return "Белсенді емес"
        },
        search() {
            this.loading = 1
            const params = this.clearParams(this.filter);
            this.$inertia.get(route("admin.olimpiadaBagyty.index"), params);
        },
    },
};
</script>
