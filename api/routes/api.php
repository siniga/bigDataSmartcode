<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//resert cache routes
// clear route cache
Route::get('/clear-route-cache', function () {
    Artisan::call('route:cache');
    return 'Routes cache has clear successfully !';
});

//clear config cache
Route::get('/clear-config-cache', function () {
    Artisan::call('config:cache');
    return 'Config cache has clear successfully !';
});

// clear application cache
Route::get('/clear-app-cache', function () {
    Artisan::call('cache:clear');
    return 'Application cache has clear successfully!';
});

// clear view cache
Route::get('/clear-view-cache', function () {
    Artisan::call('view:clear');
    return 'View cache has clear successfully!';
});

// header('Access-Control-Allow-Origin', '*');
// header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers', 'Content-Type, Authorization');



Route::post('upload-file', 'DevIndicatorController@store');
Route::get('dev-indicators-items', 'DevIndicatorController@index');

Route::get('countries', 'CountryController@index');
Route::get('country/{id}', 'CountryController@show');
Route::get('country/formatted/{id}', 'CountryController@getFormattedDataByCountry');
Route::get('countries/year/{id}', 'CountryController@getCountryByYear');

Route::get('timeframes', 'TimeframeController@getTimeframes');

Route::delete('delete-all','DevIndicatorController@destroyAll');

Route::post('login', 'AuthController@store');


