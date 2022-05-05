import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { QuiensoyComponent } from './page/quiensoy/quiensoy.component';
import { NotFoundComponent } from './page/not-found/not-found.component';

const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'home', component:HomeComponent},
  { path: 'login', component:LoginComponent},
  { path: 'quiensoy', component:QuiensoyComponent},
  { path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
