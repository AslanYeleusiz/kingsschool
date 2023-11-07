<template>

    <head>
        <title>Админ панель | Олимпиада қатысушы өзгерту</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Олимпиада қатысушы № {{ o_katysushy.id }}</h1>
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
                            <a :href="route('admin.olimpiadaTizim.index')">
                                <i class="fas fa-dashboard"></i>
                                Олимпиада қатысушы
                            </a>
                        </li>
                        <li class="breadcrumb-item active">
                            Олимпиада қатысушы № {{ o_katysushy.id }}
                        </li>
                    </ol>
                </div>
            </div>
        </template>
        <div class="container-fluid">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                        Олимпиадаға қатысу жайлы ақпарат
                    </h3>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-12 col-md-12 col-lg-12 order-2 order-md-1">
                            <div class="row">
                                <div class="col-12">
                                    <div v-if="o_katysushy" class="post">
                                        <div class="user-block">
                                            <span class="username" style="
                                                    margin-left: 0 !important;
                                                ">
                                                Олимпиада атауы: {{ o_katysushy.bagyty.o_bagyty }}
                                            </span>
                                            <span class="description" style="
                                                    margin-left: 0 !important;
                                                ">Аяқатаған уақыты -
                                                {{
                                                    o_katysushy.date
                                                        ? new Date(
                                                              o_katysushy.o_date
                                                          ).toLocaleDateString()
                                                        : "Аяқталмады"
                                                }}</span>
                                        </div>
                                        <p class="mb-0">
                                            <b>Категория:</b>
                                            {{ o_katysushy.bagyty.katysushilar }}
                                        </p>
                                        <p class="mb-0">
                                            <b>Бағыт:</b>
                                            {{ o_katysushy.bagyty.bagyt }}
                                        </p>
                                        <p class="mb-0">
                                            <b>Олимпиада түрі:</b>
                                            {{ types[o_katysushy.bagyty.type-1] }}
                                        </p>
                                        <p class="mb-0">
                                            <b>Төлем жасалды:</b>
                                            {{ o_katysushy.success ? 'Ия' : 'Жоқ' }}
                                        </p>
                                    </div>
                                    <h4>Қолданушы</h4>
                                    <div class="post">
                                        <div class="user-block">
                                            <img class="img-circle img-bordered-sm" :src="
                                                    o_katysushy.user.avatar
                                                        ? route('admin.index') +
                                                          o_katysushy.user.avatar
                                                        : route('admin.index') +
                                                          '/images/user.png'
                                                " alt="user image" />
                                            <span class="username">
                                                <Link :href="
                                                        route(
                                                            'admin.users.edit',
                                                            o_katysushy.user_id
                                                        )
                                                    ">
                                                {{
                                                        (o_katysushy.user.fio ?? o_katysushy.user.username) ??  o_katysushy.user.email
                                                    }}
                                                </Link>
                                            </span>
                                            <span class="description">Тіркелген уақыты -
                                                {{
                                                    o_katysushy.user.created_at
                                                        ? new Date(
                                                              o_katysushy.user.created_at
                                                          ).toLocaleDateString()
                                                        : "Анықталмады"
                                                }}</span>
                                        </div>
                                        <p class="mb-0">
                                            <b>Қолданушы ID:</b>
                                            {{ o_katysushy.user_id }}
                                        </p>
                                        <p class="mb-0">
                                            <b>Тіркелген аты-жөні:</b>
                                            {{ o_katysushy.o_katysushy_name }}
                                        </p>

                                        <p class="mb-0">
                                            <b>Жұмыс орны:</b>
                                            {{ o_katysushy.o_mekeme ?? 'Тіркелмеген' }}
                                        </p>

                                        <p class="mb-0">
                                            <b>Тіркелген код нөмірі:</b>
                                            {{ o_katysushy.code }}
                                        </p>
                                        <p class="mb-0">
                                            <b>Тест код нөмірі:</b>
                                            {{ o_katysushy.obwcode }}
                                        </p>
                                        <p class="mb-0">
                                            <b>Мәлімет өзгерту мүмкіндік саны:</b>
                                            {{ o_katysushy.update_count }}
                                        </p>
                                        <p class="mb-0">
                                            <b>Тапсырды:</b>
                                            {{ o_katysushy.o_tizim ? o_katysushy.o_tizim.tapsyrgan ? o_katysushy.o_tizim.result : 'Тапсырмады' : 'Тапсырмады' }}
                                        </p>
                                        <p v-if="o_katysushy.tapsyrgan" class="mb-0">
                                            <b>Ұпай саны:</b>
                                            {{ o_katysushy.result }}
                                        </p>
                                        <p class="mb-0">
                                            <b>Қатемен жұмыс жасалды:</b>
                                            {{ o_katysushy.kjumis ? 'Ия' : 'Жок' }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="activeCategory" class="card card-default">
                <div class="card-header">
                    <h3 class="card-title">Категория өзгерту</h3>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="">Категория</label>
                                <select v-model="o_katysushy.o_katysushy_idd" class="form-control" placeholder="Категория" @change.prevent="enterCategory()">
                                    <option hidden :value="null">
                                        Категория
                                    </option>
                                    <option :value="category.idd" :key="
                                            'category' +
                                            category.idd
                                        " v-for="category in katysushylar">
                                        {{ category.o_katysushy }}
                                    </option>
                                </select>
                                <validation-error :field="'o_katysushy_idd'" />
                            </div>
                        </div>

                        <div v-if="bagyts" class="col-md-4">
                            <div class="form-group">
                                <label for="">Қысқа аты</label>
                                <select v-model="o_katysushy.o_bagyty_idd" class="form-control" placeholder="Қысқа аты" @change.prevent="enterBagyt()">
                                    <option :value="bagyt.idd" :key="
                                            'bagyt' +
                                            bagyt.idd
                                        " v-for="bagyt in bagyts">
                                        {{ bagyt.bagyt }}
                                    </option>
                                </select>
                                <validation-error :field="'o_bagyty_idd'" />
                            </div>
                        </div>
                        <div v-if="classList" class="col-md-4">
                            <div class="form-group">
                                <label for="">Толық атауы/Сынып</label>
                                <select v-model="o_katysushy.o_tury_idd" class="form-control" placeholder="Сынып" @change.prevent="enterClass()">
                                    <option hidden :value="null">
                                        Сынып
                                    </option>
                                    <option :value="synyp.idd" :key="
                                            'synyp' +
                                            synyp.idd
                                        " v-for="synyp in classList">
                                        {{ synyp.synyp ? synyp.synyp + '-сынып' : synyp.o_tury }}
                                    </option>
                                </select>
                                <validation-error :field="'o_katysushy_idd'" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-success mr-2 " @click.prevent="activeCategory = 0">
                        Жалғастыру
                    </button>
                    <button @click.prevent="back()" class="btn btn-danger">
                        Артқа
                    </button>
                </div>
            </div>
            <div v-else class="card card-default">
                <div class="card-header">
                    <h3 class="card-title">Өзгерту</h3>
                </div>
                <div class="card-body">
                   <div class="form-group">
                        <label for="">Қолданушы ID</label>
                        <input type="text" class="form-control" v-model="o_katysushy.user_id" name="title" placeholder="Жетекші аты-жөні" />
                        <validation-error :field="'katysushy_user_id'" />
                    </div>
                    <div class="form-group">
                        <label for="">Тіркелген аты-жөні <span class="red">*</span></label>
                        <div class="row">
                            <div class="col-md-4">
                                <span>Аты <span class="red">*</span></span>
                                <input type="text" class="form-control" v-model="o_katysushy.o_katysushy_name" name="title" placeholder="Аты" />
                                <validation-error :field="'katysushy_name'" />
                            </div>
                            <div class="col-md-4">
                                <span>Тегі <span class="red">*</span></span>
                                <input type="text" class="form-control" v-model="o_katysushy.o_katysushy_fname" name="title" placeholder="Тегі" />
                                <validation-error :field="'katysushy_fname'" />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="">Жетекші аты-жөні</label>
                        <input type="text" class="form-control" v-model="o_katysushy.o_zhetekshi_name" name="title" placeholder="Жетекші аты-жөні" />
                        <validation-error :field="'o_zhetekshi_name'" />
                    </div>
                    <div class="form-group">
                        <label for="">Жұмыс орны</label>
                        <input type="text" class="form-control" v-model="o_katysushy.o_mekeme" name="title" placeholder="Жұмыс орны" />
                        <validation-error :field="'katysushy_o_mekeme'" />
                    </div>
                    <div class="form-group">
                        <label for="">Қатысу коды <span class="red">*</span></label>
                        <input type="text" class="form-control" v-model="o_katysushy.obwcode" name="title" placeholder="Қатысу коды" />
                        <validation-error :field="'katysushy_obwcode'" />
                    </div>
                    <div v-if="o_katysushy.o_tizim && o_katysushy.success==1" class="form-group">
                        <label for="">{{ o_katysushy.o_tizim.tapsyrgan ? 'Тапсырды / Балл' : 'Тапсырмады'}}</label>
                        <input :readonly="!o_katysushy.o_tizim.tapsyrgan" type="text" class="form-control" v-model="o_katysushy.o_tizim.result" name="title" placeholder="Балл" />
                        <!--                        SWITCH  для Тапсырды тапсырмады и Төленді төленбеді-->
                    </div>
                    <div class="form-group">
                        <label for="">Төленді/төленбеді: </label>
                        <div class="form-group">
                            <div class="custom-control custom-switch">
                                <input type="checkbox" v-model="o_katysushy.success" class="custom-control-input" id="customSwitch2" true-value=1 false-value=0 />
                                <label class="custom-control-label" for="customSwitch2">{{ o_katysushy.success == 1 ? 'Төленді': 'төленбеді'}}</label>
                            </div>
                            <validation-error :field="'katysushy_success'" />
                        </div>
                        <!--                        SWITCH  для Тапсырды тапсырмады и Төленді төленбеді-->
                    </div>
                    <div class="form-group col-md-3">
                        <label for="">Уақыты</label>
                        <input type="date" class="form-control" v-model="o_katysushy.o_date" name="title" placeholder="Тіркелген уақыты" />
                        <validation-error :field="'o_date'" />
                    </div>

                </div>
                <div class="card-footer">
                    <button class="btn btn-success mr-2 " @click.prevent="submit()">
                        Сақтау
                    </button>
                    <button @click.prevent="back()" class="btn btn-danger">
                        Артқа
                    </button>
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
    import ValidationError from "../../../Components/ValidationError.vue";

    export default {
        components: {
            AdminLayout,
            Link,
            Pagination,
            ValidationError,
            Head,
        },
        props: ["o_katysushy", "katysushylar", "bagyts", "classList"],
        data() {
            return {
                types: ['Облыстық', 'Республикалық', 'Халықаралық'],
                activeCategory: 1,
            }
        },
        methods: {
            getStatusText(status) {
                if (!status) {
                    return "Қате";
                }
                if (status == 1) {
                    return "Қаралмаған";
                }
                if (status == 2) {
                    return "Қате бар";
                }
                if (status == 3) {
                    return "Тексерілген";
                }
                return "Анықталмаған";
            },
            enterCategory() {
                let o_katysushy_idd = this.o_katysushy.o_katysushy_idd
                this.$inertia.get(
                    route("admin.olimpiadaTizim.saveCategory", this.o_katysushy.idd), {
                        o_katysushy_idd: this.o_katysushy.o_katysushy_idd
                    }, {
                        onError: () => console.log("An error has occurred"),
                        onSuccess: (res) => {
                            console.log("res", res);
                            console.log("The new contact has been saved");
                        },
                    }
                );
            },
            enterBagyt() {
                let o_katysushy_idd = this.o_katysushy.o_katysushy_idd
                this.$inertia.get(
                    route("admin.olimpiadaTizim.saveBagyt", this.o_katysushy.idd), {
                        o_bagyty_idd: this.o_katysushy.o_bagyty_idd
                    }, {
                        onError: () => console.log("An error has occurred"),
                        onSuccess: (res) => {
                            console.log("res", res);
                            console.log("The new contact has been saved");
                        },
                    }
                );
            },
            enterClass() {
                let o_katysushy_idd = this.o_katysushy.o_katysushy_idd
                this.$inertia.get(
                    route("admin.olimpiadaTizim.saveClass", this.o_katysushy.idd), {
                        o_tury_idd: this.o_katysushy.o_tury_idd
                    }, {
                        onError: () => console.log("An error has occurred"),
                        onSuccess: (res) => {
                            console.log("res", res);
                            console.log("The new contact has been saved");
                        },
                    }
                );
            },


            submit() {
                let data = {};
                data["_method"] = "put";
                data.katysushy_name = this.o_katysushy.o_katysushy_name;
                data.katysushy_fname = this.o_katysushy.o_katysushy_fname;
                data.katysushy_o_zhetekshi_name = this.o_katysushy.o_zhetekshi_name;
                data.katysushy_o_mekeme = this.o_katysushy.o_mekeme;
                data.katysushy_obwcode = this.o_katysushy.obwcode;
                data.katysushy_result = this.o_katysushy.o_tizim ? this.o_katysushy.o_tizim.result : null;
                data.katysushy_success = this.o_katysushy.success;
                data.katysushy_o_date = this.o_katysushy.o_date;               data.katysushy_user_id = this.o_katysushy.user_id;

                this.$inertia.post(
                    route("admin.olimpiadaTizim.update", this.o_katysushy.idd),
                    data, {
                        forceFormData: true,
                        onError: () => console.log("An error has occurred"),
                        onSuccess: (res) => {
                            console.log("res", res);
                            console.log("The new contact has been saved");
                        },
                    }
                );
            },
        },
    };

</script>
