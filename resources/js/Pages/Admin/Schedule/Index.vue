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
                <div ref="calendar"></div>
            </div>
            <!-- /.card-body -->
        </div>
        <div v-if="schedules" class="container-fluid">
            <div class="card">
                <div class="card-body">
                    <h3 class="mb-3">{{ startweekdate + '-' + endweekdate }}</h3>
                    <div class="row">
                        <div class="col-sm-12">
                            <table class="table table-hover">
                                <tbody>
                                    <template v-for="(day, index) in days">
                                        <tr data-widget="expandable-table" aria-expanded="true">
                                            <td>
                                                <div class="d-flex justify-content-between">
                                                    {{ day }}
                                                    <Link :href="route(
                                                        'admin.schedule.create',
                                                        {
                                                            date:
                                                                startweekdate,
                                                            day: index + 1
                                                        }
                                                    )
                                                        " class="btn btn-primary" title="Өзгерту"
                                                        v-if="user.role_id == 1 || user.role_id == 2 || user.role_id == 3">
                                                    Изменить
                                                    </Link>
                                                </div>

                                            </td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td>
                                                <div class="p-0" style="">
                                                    <table
                                                        class="table mt-2 mb-3 table-hover table-bordered table-striped dataTable dtr-inline">
                                                        <tbody>
                                                            <tr class="odd" v-for="schedule in schedules" :key="'schedule' +
                                                                schedule.id">
                                                                <template v-if="schedule.day == index + 1">
                                                                    <td>
                                                                        {{ schedule.start_time }} - {{ schedule.end_time }}
                                                                    </td>

                                                                    <td>
                                                                        {{
                                                                            schedule.teacher.fio
                                                                        }}
                                                                    </td>

                                                                    <td>
                                                                        {{
                                                                            schedule.group ? schedule.group.name : 'Вне группы'
                                                                        }}
                                                                    </td>
                                                                    <td v-if="!schedule.edit">
                                                                        <span
                                                                            class="badge badge-success"
                                                                            :class="{
                                                                                'badge-light':
                                                                                    schedule.status ==
                                                                                    0,
                                                                                'badge-success':
                                                                                    schedule.status ==
                                                                                    1,
                                                                                'badge-danger':
                                                                                    schedule.status ==
                                                                                    2,
                                                                                
                                                                                'badge-warning':
                                                                                    schedule.status ==
                                                                                    3,
                                                                            }"
                                                                        >
                                                                            {{
                                                                                getStatusText(
                                                                                    schedule.status
                                                                                )
                                                                            }}
                                                                        </span>
                                                                    </td>
                                                                    
                                                                    <td v-else>
                                                                        <select
                                                                            class="form-control"
                                                                            @change.prevent="changeStatus(schedule.id, schedule.status)"
                                                                            v-model="schedule.status"
                                                                            placeholder="Белсенді"
                                                                        >
                                                                            <option :value="0">
                                                                                Урок не начался
                                                                            </option>
                                                                            <option :value="1">
                                                                                Урок проведён
                                                                            </option>
                                                                            <option :value="2">
                                                                                Урок не проведён
                                                                            </option>
                                                                            <option :value="3">
                                                                                Ещё не пришел
                                                                            </option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <div class="btn-group btn-group-sm">
                                                                            <button @click.prevent="
                                                                            deleteData(
                                                                                schedule.id
                                                                            )
                                                                                " class="btn btn-danger" title="Жою">
                                                                                <i class="fas fa-trash"></i>
                                                                            </button>
                                                                            <button v-if="!schedule.edit" @click.prevent="schedule.edit = 1" class="btn btn-primary" title="Изменить">
                                                                                <i class="fas fa-edit"></i>
                                                                            </button>
                                                                            <button v-else @click.prevent="schedule.edit = 0" class="btn btn-success" title="Применить изменения">
                                                                                <i class="fas fa-check"></i>
                                                                            </button>
                                                                            
                                                                        </div>
                                                                    </td>
                                                                </template>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
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

export default {
    props: [
        'user',
    ],
    components: {
        AdminLayout,
        Link
    },
    data() {
        return {
            days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'],
            currentDate: route().params.date ?? '',
            schedules: null,
            startweekdate: null,
            endweekdate: null,
        }
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
            $calendar.on("change.datetimepicker", (e) => {
                this.toggleCollapse(e.date.format('YYYY-MM-DD'))
            });
        });
        var currentDate = new Date();
        var dayOfWeek = currentDate.getDay();

        // Adjust the representation to start from 1 (1 for Sunday, 2 for Monday, ..., 7 for Saturday)
        var adjustedDayOfWeek = (dayOfWeek === 0) ? 7 : dayOfWeek;
        console.log(adjustedDayOfWeek)

        //Бітіру кк
        this.toggleCollapse(currentDate.toISOString().slice(0, 10))
    },
    methods: {
        changeStatus(id, status) {
            axios.post(route('admin.schedule.setStatus', id), {
                status: status
            }).then(res=>{
                console.log(res)
            });
        },
        toggleCollapse(e) {
            console.log(e)
            this.currentDate = e
            let urlParams = new URLSearchParams(window.location.search);

            let teacher_id = urlParams.get('teacher_id');

            axios.get(route("admin.schedule.getSchedule"), {
                params: {
                    date: this.currentDate,
                    teacher_id: teacher_id ?? null,
                }
            }).then((res) => {
                this.schedules = res.data.schedules
                this.startweekdate = res.data.startweekdate
                this.endweekdate = res.data.endweekdate
            });
        },
        getStatusText(e){
            switch(e){
                case 0: return 'Урок не начался';
                case 1: return 'Урок проведён';
                case 2: return 'Урок не проведён';
                case 3: return 'Ещё не пришел';
            }
        },
        
        deleteData(id) {
            Swal.fire({
                title: "Жоюға сенімдісіз бе",
                text: "Қайтып қалпына келмеуі мүмкін!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Иә, жоямын!",
                cancelButtonText: "Болдырмау",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$inertia.delete(
                        route("admin.schedule.destroy", id)
                    );
                }
            });
        },
    }
}

</script>
