<?php

namespace App\Imports;


namespace App\Imports;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Facades\Validator;
use App\Models\Timeframe;
use Maatwebsite\Excel\Imports\HeadingRowFormatter;

HeadingRowFormatter::default('none');

class TimeframeImport implements ToModel, WithHeadingRow
{

    public function model(array $row)
    {
        //

        return new Timeframe([
            'year' =>  $row[1],
        ]);
    }

    public function headingRow():int {
        return 3;
    }
}
