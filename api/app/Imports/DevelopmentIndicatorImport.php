<?php

namespace App\Imports;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Facades\Validator;
use App\Models\DevIndicator;
use Maatwebsite\Excel\Imports\HeadingRowFormatter;

HeadingRowFormatter::default('none');

class DevelopmentIndicatorImport implements ToModel, WithHeadingRow
{

    public function model(array $row)
    {
       $keys = array_keys($row);

       dump(array_unique($keys));
      
       //extract headers
    //    for ($i=3; $i < $keys; $i++) { 
    //         if($keys[$i] > "2020"){
    //             return;
    //         }
    //        dump($keys[$i]);
    //    }

        // foreach ($keys as $key => $value) {
        //     dump($value[0]);
        // }
        //
    //    dump($row);
    //     return new DevIndicator([
    //         'name' =>  $row["Country Name"],

    //         'code' => $row["Country Code"],

    //         '1990' => $row["1990"],

    //         '1991' => $row["1991"],

    //         '1992' => $row["1992"],

    //         '1993' => $row["1993"],

    //         '1994' => $row["1994"],
    //     ]);


    }

    public function headingRow():int {
        return 3;
    }
}