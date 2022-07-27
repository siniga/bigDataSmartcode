<?php

namespace Database\Seeders;
use DB;
use Illuminate\Database\Seeder;

class TimeframeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('timeframes')->insert([
            'year'=> "1990",
            'created_at' => \Carbon\Carbon::now()
        ]);

        DB::table('timeframes')->insert([
            'year'=> "1991",
            'created_at' => \Carbon\Carbon::now()
        ]);

        DB::table('timeframes')->insert([
            'year'=> "1992",
            'created_at' => \Carbon\Carbon::now()
        ]);

        DB::table('timeframes')->insert([
            'year'=> "1993",
            'created_at' => \Carbon\Carbon::now()
        ]);

        DB::table('country_timeframes')->insert([
            'country_id'=> 1,
            'timeframe_id' =>1,
            'indicator' => "72000"
        ]);

        DB::table('country_timeframes')->insert([
            'country_id'=> 1,
            'timeframe_id' =>2,
            'indicator' => "100000"
        ]);

        DB::table('country_timeframes')->insert([
            'country_id'=> 2,
            'timeframe_id' =>1,
            'indicator' => "290000"
        ]);
    }
}
