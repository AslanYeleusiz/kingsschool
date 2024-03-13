<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\FilialController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\SubjectController;
use App\Http\Controllers\Admin\TrainTypeController;
use App\Http\Controllers\Admin\CourseTypeController;
use App\Http\Controllers\Admin\EduOrderController;
use App\Http\Controllers\Admin\ExpensesController;
use App\Http\Controllers\Admin\PaidController;
use App\Http\Controllers\Admin\StudentsController;
use App\Http\Controllers\Admin\ScheduleContorller;
use App\Http\Controllers\Admin\StudentSubjectController;
use App\Http\Controllers\Admin\TeacherController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Admin/home');
})->name('index');
Route::middleware('checkUserRole:1')->group(function () {
    Route::resource('roles', RoleController::class)->except(['show'])->names('roles');
    Route::resource('filials', FilialController::class)->except(['show'])->names('filials');
    Route::resource('train-types', TrainTypeController::class)->except(['show'])->names('trainTypes');
    Route::resource('course-types', CourseTypeController::class)->except(['show'])->names('courseTypes');
});
Route::middleware('checkUserRole:1,2')->group(function () {
    Route::resource('users', UserController::class)->except(['show'])->names('users');
    Route::group(['prefix' => '/users', 'as' => 'users.'], function () {
        Route::get('/is_deleted', [UserController::class, 'is_deleted'])->name('deleted');
        Route::delete('/{user_id}/activate', [UserController::class, 'activate'])->name('activate');
        Route::delete('/{user_id}/remove', [UserController::class, 'remove'])->name('remove');
    });
    Route::get('/filials/{id}/getTeachers', [FilialController::class, 'getTeachers'])->name('filials.getTeachers');
    Route::resource('subjects', SubjectController::class)->except(['show'])->names('subjects');
    Route::get('subjects/{id}/dublicate', [SubjectController::class, 'dublicate'])->name('subjects.dublicate');
    Route::resource('paidHistories', PaidController::class)->only(['index', 'destroy'])->names('paidHistories');
    Route::group(['prefix' => '/paidHistories', 'as' => 'paidHistories.'], function () {
        Route::post('/{id}/paid', [PaidController::class, 'paid'])->name('paid');
        Route::delete('/{id}/delete', [PaidController::class, 'destroy'])->name('delete');
    });
    Route::resource('teachers', TeacherController::class)->only(['index'])->names('teachers');
    Route::group(['prefix' => '/teachers/{id}', 'as' => 'teachers.'], function () {
        Route::get('/students', [TeacherController::class, 'students'])->name('students');
        Route::get('/reports', [TeacherController::class, 'reports'])->name('reports');
        Route::get('/fullReports', [TeacherController::class, 'fullReports'])->name('fullReports');
        Route::get('/fullReports/{report_id}/getItem', [TeacherController::class, 'fullReportItem'])->name('fullReportItem');
        Route::post('/reports/store', [TeacherController::class, 'reportStore'])->name('reportStore');
    });
    Route::resource('student/{student_id}/subjects', StudentSubjectController::class)->except(['show'])->names('studentsSubjects');
    Route::resource('expenses', ExpensesController::class)->except(['show'])->names('expenses');
});

Route::resource('students', StudentsController::class)->only(['index', 'update', 'destroy'])->names('students');
Route::group(['prefix' => '/students/{id}', 'as' => 'students.'], function () {
    Route::post('/paid', [StudentsController::class, 'paid'])->name('paid');
    Route::post('/deletePaid', [StudentsController::class, 'deletePaid'])->name('deletePaid');
    Route::post('/setGroups', [StudentsController::class, 'setGroups'])->name('setGroups');
});

// Route::resource('users/{id}/edu_orders', EduOrderController::class)->except(['show'])->names('eduOrders');
Route::group(['prefix' => '/groups/{id}', 'as' => 'groups.'], function () {
    Route::delete('/destroy', [StudentsController::class, 'destroyGroup'])->name('destroy');
    Route::delete('/{groupId}/destroyOrder', [StudentsController::class, 'destroyOrder'])->name('destroyOrder');
});

Route::resource('schedule', ScheduleContorller::class)->except(['show', 'edit', 'update'])->names('schedule');
Route::group(['prefix' => '/schedule', 'as' => 'schedule.'], function () {
    Route::get('/getSchedule', [ScheduleContorller::class, 'getSchedule'])->name('getSchedule');
    Route::get('/{id}/getGroups', [ScheduleContorller::class, 'getGroups'])->name('getGroups');
    Route::post('/{id}/setStatus', [ScheduleContorller::class, 'setStatus'])->name('setStatus');
});

Route::get('/check-iin', [UserController::class, 'checkIin']);