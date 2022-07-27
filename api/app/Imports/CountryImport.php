<?php

namespace App\Imports;

namespace App\Imports;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Facades\Validator;
use App\Models\Country;
use Maatwebsite\Excel\Imports\HeadingRowFormatter;

HeadingRowFormatter::default('none');

class CountryImport implements ToModel, WithHeadingRow
{

    public function model(array $row)
    {
        //

       
        
        // return new Country([
        //     'name' =>  $row["Country Name"],

        //     'code' => $row["Country Code"],
        // ]);
    }

    public function headingRow():int {
        return 3;
    }
}