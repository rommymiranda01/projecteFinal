<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $user = new User();
        $user->name='admin';
        $user->password=('123456');
        $user->email='admin@admin.com';
        $user->rol='admin';
        $user->saldo=0;
        $user->save();
    }
}
