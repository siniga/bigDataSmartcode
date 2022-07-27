<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Timeframe extends Model
{
    use HasFactory;
    protected $fillable = ['year'];
    
    public function countries(){

        return $this->hasMany('App\Models\Country','country_timeframes');
    }
}
