<template>
    <AdminLayout>
        <div class="row">
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-info">
                    <div class="inner">
                        <h3><span title="Общие количества студентов филиала">{{students}}</span> / <span title="Общее количество зарегистрированных студентов на предметы филиала">{{orders}}</span> / <span title="Общее количество преподавателей филиала">{{teachers}}</span></h3>
                        <p>Студенты</p>
                    </div>
                    <div class="icon">
                        <i class="ion ion-bag"></i>
                    </div>
                    <Link :href="route('admin.students.index')" class="small-box-footer">Подробнее <i class="fas fa-arrow-circle-right"></i></Link>
                </div>
            </div>
            <!-- ./col -->
            <!-- ./col -->
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-warning">
                    <div class="inner">
                        <h3 title="Прибыль с учетом данного филиала и удаленных пользователей за всё время">{{profit}}</h3>

                        <p>Общая прибыль</p>
                    </div>
                    <div class="icon">
                        <i class="ion ion-person-add"></i>
                    </div>
                    <Link :href="route('admin.teachers.index')" class="small-box-footer">Подробнее <i class="fas fa-arrow-circle-right"></i></Link>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-danger">
                    <div class="inner">
                        <h3><span title="Зарплата преподавателей">{{salaries}}<sup style="font-size: 20px">+<span title="Зарплата для персонала">11000</span>+<span title="Мелкие расходы">5200</span></sup></span></h3>
                        <p title="Зарплата для преподавателей, средний расход и мелкий расход за всё время данного филиала включая удалённых пользователей">Общий расход</p>
                    </div>
                    <div class="icon">
                        <i class="ion ion-pie-graph"></i>
                    </div>
                    <a href="#" class="small-box-footer">Подробнее <i class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-success">
                    <div class="inner">
                        <h3>{{Number(profit) - Number(salaries) - 11000 - 5200 }}</h3>

                        <p>Чистая прибыль</p>
                    </div>
                    <div class="icon">
                        <i class="ion ion-stats-bars"></i>
                    </div>
                    <a href="#" class="small-box-footer">Подробнее <i class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <!-- ./col -->
        </div>
        <!-- solid sales graph -->
        <div class="card bg-gradient-info">
            <div class="card-header border-0">
                <h3 class="card-title">
                    <i class="fas fa-th mr-1"></i>
                    График
                </h3>

                <div class="card-tools">
                    <button type="button" class="btn bg-info btn-sm" data-card-widget="collapse">
                        <i class="fas fa-minus"></i>
                    </button>
                    <button type="button" class="btn bg-info btn-sm" data-card-widget="remove">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div class="card-body">
                <canvas class="chart" id="line-chart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
            </div>
            <!-- /.card-footer -->
        </div>
        <!-- /.card -->
    </AdminLayout>
</template>

<script>
    import AdminLayout from "../../Layouts/AdminLayout.vue";
    import {
        Link
    } from "@inertiajs/inertia-vue3";
    export default {
        components: {
            AdminLayout,
            Link
        },
        props: ["students", "orders", "teachers", "profit", "expenses", "salaries", "net_profit"],
        mounted() {
            // Initialize the calendar
            this.$nextTick(() => {
                // Sales graph chart
                var salesGraphChartCanvas = $('#line-chart').get(0).getContext('2d')
                // $('#revenue-chart').get(0).getContext('2d');

                var salesGraphChartData = {
                    labels: ['2023 Q1', '2023 Q2', '2023 Q3', '2023 Q4', '2014 Q1', '2014 Q2', '2014 Q3', '2014 Q4'],
                    datasets: [{
                        label: 'Digital Goods',
                        fill: false,
                        borderWidth: 2,
                        lineTension: 0,
                        spanGaps: true,
                        borderColor: '#efefef',
                        pointRadius: 3,
                        pointHoverRadius: 7,
                        pointColor: '#efefef',
                        pointBackgroundColor: '#efefef',
                        data: [2666, 2778, 4912, 3767, 6810, 5670, 4820, 15073]
                    }]
                }

                var salesGraphChartOptions = {
                    maintainAspectRatio: false,
                    responsive: true,
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontColor: '#efefef'
                            },
                            gridLines: {
                                display: false,
                                color: '#efefef',
                                drawBorder: false
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                stepSize: 5000,
                                fontColor: '#efefef'
                            },
                            gridLines: {
                                display: true,
                                color: '#efefef',
                                drawBorder: false
                            }
                        }]
                    }
                }

                // This will get the first returned node in the jQuery collection.
                // eslint-disable-next-line no-unused-vars
                var salesGraphChart = new Chart(salesGraphChartCanvas, { // lgtm[js/unused-local-variable]
                    type: 'line',
                    data: salesGraphChartData,
                    options: salesGraphChartOptions
                })
            });
        },
    }

</script>
