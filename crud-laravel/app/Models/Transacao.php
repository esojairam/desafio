<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transacao extends Model
{
    protected $fillable = ['nome','data','tipo','categoria','valor'];

    public function setValorAttribute($value)
    {
        // Ajusta o valor para negativo se o tipo for despesa
        if ($this->attributes['tipo'] === 'despesa') {
            $this->attributes['valor'] = -abs($value);
        } else {
            $this->attributes['valor'] = $value;
        }
    }
}
