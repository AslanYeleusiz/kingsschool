<template>
    <AdminLayout>
        <!-- Calendar -->
        <div class="card bg-gradient-success">
            <div class="card-header border-0">
                <h3 class="card-title">
                    <i class="far fa-calendar-alt"></i>
                    Calendar
                </h3>
                <!-- /. tools -->
            </div>
            <!-- /.card-header -->
            <div class="card-body pt-0">
                <!-- The calendar -->
                <div ref="calendar"></div>
            </div>
            <!-- /.card-body -->
        </div>
    </AdminLayout>
</template>

<script>
    import AdminLayout from "../../../Layouts/AdminLayout.vue";

    export default {
        components: {
            AdminLayout
        },

        mounted() {
            // Initialize the calendar
            this.$nextTick(() => {
                console.log('Next tick executed');
                const $calendar = $(this.$refs.calendar);

                $calendar.datetimepicker({
                    format: 'L',
                    inline: true
                });
                $calendar.on("change.datetimepicker", function(e) {
                    console.log(e.date.format('YYYY-MM-DD'))
                });
            });
        },
        methods: {
            toggleCollapse() {
                // Your collapse logic here
            },
            removeCard() {
                // Your remove card logic here
            }
        }
    }

</script>
