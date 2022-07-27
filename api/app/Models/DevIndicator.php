<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DevIndicator extends Model
{
    use HasFactory;

    protected $fillable = ['name','code','indicator','1990','1991','1992','1993','1994'];
}
