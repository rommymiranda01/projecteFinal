import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisComponent } from './components/regis/regis.component';
import {CreateComponent} from "./components/user/create/create.component";
import {IndexComponent} from "./components/user/index/index.component";
import {EditComponent} from "./components/user/edit/edit.component";

const routes: Routes = [
  //{path: '', component: HomeComponent},
  //{path: 'login', component: LoginComponent},
  //{path: 'regis', component: RegisComponent},
  //{path: '**', redirectTo: ''},
  { path: 'user', redirectTo: 'user/index', pathMatch: 'full'},
  { path: 'user/index', component: IndexComponent },
  { path: 'user/create', component: CreateComponent },
  { path: 'user/edit/:idPerson', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
