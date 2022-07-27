<?php

namespace App\Http\Controllers;

use App\Models\DevIndicator;
use App\Models\Country;
use App\Models\TimeFrame;
use App\Models\CountryTimeFrame;
use App\Http\Requests\StoreDevIndicatorRequest;
use App\Http\Requests\UpdateDevIndicatorRequest;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\CountryImport;
use App\Imports\TimeframeImport;
use App\Imports\DevIndicatorImport;
use App\Imports\DevelopmentIndicatorImport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Input;  

class DevIndicatorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $countries = DB::table("countries")
            ->join("country_timeframes","countries.id","country_timeframes.country_id")
            ->join("timeframes","timeframes.id","country_timeframes.timeframe_Id")
            ->where("countries.name","Aruba")
            ->get();

            return $countries;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreDevIndicatorRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $doc = request()->file('file');
        $uplodedDoc = $doc->store('photos');


      // Excel::import(new CountryImport,$request->file);
      //  Excel::import(new TimeframeImport,$request->file);
      Excel::import(new DevIndicatorImport,$uplodedDoc);
        // Excel::import(new DevelopmentIndicatorImport,$request->file);
             
    
          return response(['success', 'User Imported Successfully.'],200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DevIndicator  $devIndicator
     * @return \Illuminate\Http\Response
     */
    public function show(DevIndicator $devIndicator)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DevIndicator  $devIndicator
     * @return \Illuminate\Http\Response
     */
    public function edit(DevIndicator $devIndicator)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDevIndicatorRequest  $request
     * @param  \App\Models\DevIndicator  $devIndicator
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDevIndicatorRequest $request, DevIndicator $devIndicator)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DevIndicator  $devIndicator
     * @return \Illuminate\Http\Response
     */
    public function destroyAll()
    {
        //
        CountryTimeFrame::query()->delete();
        Country::query()->delete();
        Timeframe::query()->delete();
       
    }
}
