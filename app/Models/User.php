<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;
    protected $guarded = [];
    public $table = 'users';
    public $timestamps = false;
    const IMAGE_PATH = "avatars/";

    public function filial()
    {
        return $this->belongsTo(Filial::class, 'filial_id');
    }

    public function role()
    {
        return $this->belongsTo(Role::class, 'role_id');
    }

    public function scopeIsNotDeleted($request)
    {
        return $request->where('is_deleted', 0);
    }
    public function scopeIsDeleted($request)
    {
        return $request->where('is_deleted', 1);
    }


    // Rest omitted for brevity

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */

    protected $hidden = [
        'password',
    ];


    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}
