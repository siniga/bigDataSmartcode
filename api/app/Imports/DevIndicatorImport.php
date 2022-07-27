<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Facades\Validator;
use App\Models\DevIndicator;
use App\Models\Country;
use App\Models\Timeframe;
use App\Models\CountryTimeframe;

class DevIndicatorImport implements ToCollection, WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        //
        $timeframeId;
        foreach ($rows as $row) {

            if(!Country::where('name', '=',  $row["country_name"])->exists()){
                $country = new Country();
                $country->name = $row["country_name"];
                $country->code = $row["country_code"];
                $country->save();
         

            $keys = $row->keys();

            for ($i=0; $i < $keys->count() ; $i++) { 
                if($i > 2){  
                    if(Timeframe::where('year', '=', $keys[$i])->exists()){

                        $timeframeResults = Timeframe::where('year', '=', $keys[$i])->first();
                        $timeframeId = $timeframeResults->id;

                    }else{

                        $timeframe = new Timeframe;
                        $timeframe->year = $keys[$i];
                        $timeframe->save();

                        $timeframeId =  $timeframe->id;
                    }

                    $this->attachCountryToTimeframe($country->id, $timeframeId,  $row[$keys[$i]]);
                }
            }

        }
       }
    }

    public function headingRow():int {
        return 3;
    }


    public function attachCountryToTimeframe($cid, $tid, $indicator){

    //     $country = Country::findOrFail($cid);
      
    //    echo "".$cid."\n";
        // dump($country);
        // $country->timeframes()->syncWithoutDetaching($tid);

        $countryTimeframe = new CountryTimeframe;
        $countryTimeframe->indicator = $indicator;
        $countryTimeframe->country_id = $cid;
        $countryTimeframe->timeframe_id = $tid;
        $countryTimeframe->save();
      
    }
}
