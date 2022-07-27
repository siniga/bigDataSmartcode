<?php

namespace App\Http\Controllers;

use App\Models\Timeframe;
use App\Http\Requests\StoreTimeframeRequest;
use App\Http\Requests\UpdateTimeframeRequest;

class TimeframeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function getTimeframes(){
        $timeframes = Timeframe::select('id','year')->get();

        $timeframes->map(function($val){
            $val->label = $val->year; 
            $val->value = $val->id; 
      });

      return $timeframes;
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
     * @param  \App\Http\Requests\StoreTimeframeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTimeframeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Timeframe  $timeframe
     * @return \Illuminate\Http\Response
     */
    public function show(Timeframe $timeframe)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Timeframe  $timeframe
     * @return \Illuminate\Http\Response
     */
    public function edit(Timeframe $timeframe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTimeframeRequest  $request
     * @param  \App\Models\Timeframe  $timeframe
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTimeframeRequest $request, Timeframe $timeframe)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Timeframe  $timeframe
     * @return \Illuminate\Http\Response
     */
    public function destroy(Timeframe $timeframe)
    {
        //
    }
}
