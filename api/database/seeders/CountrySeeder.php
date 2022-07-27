<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('countries')->insert([
            'name'=> "Aruba",
            'code'=> "ABW",
            'created_at' => \Carbon\Carbon::now()
        ]);

        DB::table('countries')->insert([
            'name'=> "Africa Eastern and Southern",
            'code'=> "AFE",
            'created_at' => \Carbon\Carbon::now()
        ]);

        DB::table('countries')->insert([
            'name'=> "Angola",
            'code'=> "AFG",
            'created_at' => \Carbon\Carbon::now()
        ]);

        DB::table('countries')->insert([
            'name'=> "Albania",
            'code'=> "AFW",
            'created_at' => \Carbon\Carbon::now()
        ]);
    }
}
