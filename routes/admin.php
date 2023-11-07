<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\Olimpiada\OlimpiadaBagytController;
use App\Http\Controllers\Admin\Olimpiada\OlimpiadaTizimController;
use App\Http\Controllers\Admin\Olimpiada\Suraktar\OlimpiadaSurakController;
use App\Http\Controllers\Admin\Olimpiada\Option\OlimpiadaOptionController;
use App\Http\Controllers\Admin\Olimpiada\OlimpiadaAppealsController;
use App\Http\Controllers\Admin\Olimpiada\OblysController;
use App\Http\Controllers\Admin\Olimpiada\AudanController;
use App\Http\Controllers\Admin\Olimpiada\MektepController;
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
Route::resource('olimpiada-bagyty', OlimpiadaBagytController::class)->except(['show'])->names('olimpiadaBagyty');
Route::resource('olimpiada-bagyty/{bagyt}/options', OlimpiadaOptionController::class)->except(['show'])->names('olimpiadaOption');
Route::resource('olimpiada-bagyty/{bagyt}/option/{option}/suraktar', OlimpiadaSurakController::class)->except(['show'])->names('olimpiadaSuraktar');
Route::resource('olimpiada-tizim', OlimpiadaTizimController::class)->except(['show'])->names('olimpiadaTizim');

Route::resource('oblys', OblysController::class)->except(['show'])->names('oblys');
Route::resource('oblys/{oblysId}/audan', AudanController::class)->except(['show'])->names('audan');
Route::resource('oblys/{oblysId}/audan/{audanId}/mektep', MektepController::class)->except(['show'])->names('mektep');

Route::get('olimpiada-tizim/{id}/getCertificate', [OlimpiadaTizimController::class, 'getCertificate'])->name('olimpiadaTizim.getCertificate');
Route::get('olimpiada-tizim/{id}/getAlgys', [OlimpiadaTizimController::class, 'getAlgys'])->name('olimpiadaTizim.getAlgys');
Route::get('olimpiada-tizim/{id}/zh_algys', [OlimpiadaTizimController::class, 'zh_algys'])->name('olimpiadaTizim.zh_algys');
Route::get('olimpiada-tizim/{id}/saveCategory', [OlimpiadaTizimController::class, 'saveCategory'])->name('olimpiadaTizim.saveCategory');
Route::get('olimpiada-tizim/{id}/saveBagyt', [OlimpiadaTizimController::class, 'saveBagyt'])->name('olimpiadaTizim.saveBagyt');
Route::get('olimpiada-tizim/{id}/saveClass', [OlimpiadaTizimController::class, 'saveClass'])->name('olimpiadaTizim.saveClass');
Route::resource('olimpiada-appeals', OlimpiadaAppealsController::class)->except(['show','create','store'])->names('olimpiadaAppeals');

//Route::middleware('adminAuth')->group(function () {
//});
