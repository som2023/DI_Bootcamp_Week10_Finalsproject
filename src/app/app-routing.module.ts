import { HistoriquedossierComponent } from './components/dossier/historiquedossier/historiquedossier.component';
import { TraitementComponent } from './components/traitement/traitement/traitement.component';
import { ModifiercompagnieComponent } from './components/compagnie/modifiercompagnie/modifiercompagnie.component';
import { ModifierarmoireComponent } from './components/armoire/modifierarmoire/modifierarmoire.component';
import { DossierrechercherComponent } from './components/dossier/dossierrechercher/dossierrechercher.component';
import { ModifierComponent } from './components/pays/modifier/modifier.component';
import { AjouterclasseurComponent } from './components/classeur/ajouterclasseur/ajouterclasseur.component';
import { AjoutercompagnieComponent } from './components/compagnie/ajoutercompagnie/ajoutercompagnie.component';
import { AjouterComponent } from './components/pays/ajouter/ajouter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DossierComponent } from './components/dossier/dossier.component';
import { HomeComponent } from './components/home/home.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { LoginComponent } from './components/login/login.component';
import { AjouterarmoireComponent } from './components/armoire/ajouterarmoire/ajouterarmoire.component';
import { ModifierdossierComponent } from './components/dossier/modifierdossier/modifierdossier.component';
import { ModifierclasseurComponent } from './components/classeur/modifierclasseur/modifierclasseur.component';

const routes: Routes = [
{
  path: 'landing', component :AppComponent
},
{
  path:'login', component :LoginComponent
},
{
  path:'home', component :HomeComponent
},
{
  path: 'inscription', component :InscriptionComponent
},
{
  path: 'dossier', component :DossierComponent
},
{
  path:'dashboard', component :DashboardComponent
},
{
  path:'ajouter', component : AjouterComponent
},
{
  path:'ajoutercompagnie', component :AjoutercompagnieComponent
},
{
  path:'ajouterarmoire', component :AjouterarmoireComponent
},
{
  path:'ajouterclasseur' , component :AjouterclasseurComponent
},
{
  path:'modifier/:id',component :ModifierComponent
},
 
{
  path:'modifierdossier/:id',component :ModifierdossierComponent
},
{
  path:'dossierrechercher',component :DossierrechercherComponent
},
{
 path:'modifierarmoire/:id',component :ModifierarmoireComponent
},
{
  path:'modifierclasseur/:id',component :ModifierclasseurComponent
},
{
  path:'modifiercompagnie/:id',component :ModifiercompagnieComponent
},
{
  path:'traitement',component: TraitementComponent
}
,
{
  path:'historiquedossier',component:HistoriquedossierComponent
}
,
{
  path : '',
  redirectTo : 'login',
  pathMatch : 'full'
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
