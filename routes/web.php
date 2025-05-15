<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;

// fallback route 404
Route::fallback(function () {
    return inertia('NotFound');
});

Route::controller(PageController::class)->group(function () {
    Route::get('/', 'home')->name('home');
});
