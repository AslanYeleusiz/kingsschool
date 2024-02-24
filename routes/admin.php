<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\FilialController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\SubjectController;
use App\Http\Controllers\Admin\TrainTypeController;
use App\Http\Controllers\Admin\CourseTypeController;
use App\Http\Controllers\Admin\EduOrderController;
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

Route::resource('roles', RoleController::class)->except(['show'])->names('roles');
Route::resource('filials', FilialController::class)->except(['show'])->names('filials');
Route::resource('users', UserController::class)->except(['show'])->names('users');
Route::resource('users/{id}/edu_orders', EduOrderController::class)->except(['show'])->names('eduOrders');
Route::resource('subjects', SubjectController::class)->except(['show'])->names('subjects');
Route::get('subjects/{id}/dublicate', [SubjectController::class, 'dublicate'])->name('subjects.dublicate');
Route::resource('train-types', TrainTypeController::class)->except(['show'])->names('trainTypes');
Route::resource('course-types', CourseTypeController::class)->except(['show'])->names('courseTypes');

Route::get('/check-iin', [UserController::class, 'checkIin']);



Route::get('/users/is_deleted', [UserController::class, 'is_deleted'])->name('users.deleted');
Route::delete('/users/{user_id}/activate', [UserController::class, 'activate'])->name('users.activate');
Route::delete('/users/{user_id}/remove', [UserController::class, 'remove'])->name('users.remove');
//Route::middleware('adminAuth')->group(function () {
//});
