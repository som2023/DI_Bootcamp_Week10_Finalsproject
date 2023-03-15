import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
{
   path: 'landing', component : AppComponent
},
// {
//    path:'dashboard', component : DashboardComponent
// },
{
  path:'login', component : LoginComponent
},
{
  path:'home', component : HomeComponent
},
{
  path: 'inscription', component : InscriptionComponent
},
{
  path : '',
  redirectTo : 'accueil',
  pathMatch : 'full'
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
