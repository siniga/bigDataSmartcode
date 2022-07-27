<?php

namespace App\Http\Controllers;

use App\Models\Country;
use App\Http\Requests\StoreCountryRequest;
use App\Http\Requests\UpdateCountryRequest;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $countries = Country::select("id","name", "code")->get();

        $countries->map(function($val){
              $val->label = $val->name ." - ".$val->code; 
              $val->value = $val->id; 
        });

        return $countries;
    }

    public function getFormattedDataByCountry($id){

        $country = Country::join("country_timeframes","countries.id","country_timeframes.country_id")
            ->join("timeframes","timeframes.id","country_timeframes.timeframe_Id")
            ->where("countries.id",$id)
            ->get();

            $arr = [];

            array_push($arr, ["Year", "Life expectancy at birth, total (years)"] );
            foreach ($country as $value) {
        
                array_push($arr, [$value->year, round($value->indicator)]);

            }

        return $arr;
       
    }

    public function getCountryByYear($id){
        $countries = Country::join("country_timeframes","countries.id","country_timeframes.country_id")
            ->join("timeframes","timeframes.id","country_timeframes.timeframe_Id")
            ->where("timeframes.id", $id)
            ->get();

        return $countries;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCountryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return 1;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Country  $country
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $country = Country::join("country_timeframes","countries.id","country_timeframes.country_id")
        ->join("timeframes","timeframes.id","country_timeframes.timeframe_Id")
        ->where("countries.id",$id)
        ->get();

        return $country;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Country  $country
     * @return \Illuminate\Http\Response
     */
    public function edit(Country $country)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCountryRequest  $request
     * @param  \App\Models\Country  $country
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCountryRequest $request, Country $country)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Country  $country
     * @return \Illuminate\Http\Response
     */
    public function destroy(Country $country)
    {
        //
    }
}
