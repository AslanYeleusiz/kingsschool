<template>
    <div class="wrapper" style="overflow: auto">
        <Transition name="fade">
            <LoadingSpinner v-if="isLoading" />
        </Transition>
        <NavBar />
        <SideBar />
        <imagePopup />
        <div class="content-wrapper">
            <ResultMessage></ResultMessage>
            <div class="content-header">
                <div class="container-fluid">
                    <slot name="breadcrumbs"></slot>
                </div>
            </div>
            <section class="content">
                <div class="container-fluid" v-if="headerSlot">
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <slot name="header"></slot>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <slot></slot>
            </section>
        </div>
        <Footer />
    </div>
</template>
<script>
    import Footer from "../Components/Footer.vue";
    import NavBar from "../Components/NavBar.vue";
    import SideBar from "../Components/SideBar.vue";
    import ResultMessage from '../Components/ResultMessage.vue';
    import LoadingSpinner from '../components/LoadingSpinner.vue';
    import imagePopup from "../Components/imagePopup.vue";
    import {
        ref
    } from 'vue';
    import {
        Inertia
    } from '@inertiajs/inertia';
    export default {
        components: {
            Footer,
            NavBar,
            SideBar,
            ResultMessage,
            LoadingSpinner,
            imagePopup,
        },
        mounted() {
            this.init()
        },
        computed: {
            headerSlot() {
                return Boolean(this.$slots.header)
            }
        },
        methods: {
            init() {
                let SELECTOR_LOADER = ".preloader";
                setTimeout(() => {
                    let $loader = $(SELECTOR_LOADER);
                    if ($loader) {
                        $loader.css("height", 4);
                        setTimeout(() => {
                            $loader.children().hide();
                        }, 200);
                    }
                }, 2000);
            },
        },
        setup() {
            const isLoading = ref(false);

            // Inertia events
            Inertia.on('start', () => {
                isLoading.value = true;
            });

            Inertia.on('finish', () => {
                isLoading.value = false;
            });

            return {
                isLoading
            };
        },
    };

</script>
<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.15s linear;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    .red {
        color: #dc3545;
    }

</style>
