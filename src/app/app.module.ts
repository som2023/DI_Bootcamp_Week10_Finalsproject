import { AjouterComponent } from './components/pays/ajouter/ajouter.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ActualiteComponent } from './components/actualite/actualite.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { CarousselComponent } from './components/caroussel/caroussel.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DossierComponent } from './components/dossier/dossier.component';
import { AjoutercompagnieComponent } from './components/compagnie/ajoutercompagnie/ajoutercompagnie.component';
import { AjouterarmoireComponent } from './components/armoire/ajouterarmoire/ajouterarmoire.component';
import { AjouterclasseurComponent } from './components/classeur/ajouterclasseur/ajouterclasseur.component';
import { TraitementComponent } from './components/traitement/traitement/traitement.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { ModifierComponent } from './components/pays/modifier/modifier.component';
import { ModifierdossierComponent } from './components/dossier/modifierdossier/modifierdossier.component';
import { TodolistdossierComponent } from './components/dossier/todolistdossier/todolistdossier.component';
import { DossierrechercherComponent } from './components/dossier/dossierrechercher/dossierrechercher.component';
import { ModifierarmoireComponent } from './components/armoire/modifierarmoire/modifierarmoire.component';
import { TodolistarmoireComponent } from './components/armoire/todolistarmoire/todolistarmoire.component';
import { ModifierclasseurComponent } from './components/classeur/modifierclasseur/modifierclasseur.component';
import { TodolistclasseurComponent } from './components/classeur/todolistclasseur/todolistclasseur.component';
import { TodolistcompagnieComponent } from './components/compagnie/todolistcompagnie/todolistcompagnie.component';
import { ModifiercompagnieComponent } from './components/compagnie/modifiercompagnie/modifiercompagnie.component';
import { NavbardashboardComponent } from './components/navbardashboard/navbardashboard.component';
import { HistoriquedossierComponent } from './components/dossier/historiquedossier/historiquedossier.component';
 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActualiteComponent,
    PresentationComponent,
    CarousselComponent,
    FooterComponent,
    LoginComponent,
    InscriptionComponent,
    HomeComponent,
    DashboardComponent,
    DossierComponent,
    AjouterComponent,
    AjoutercompagnieComponent,
    AjouterarmoireComponent,
    AjouterclasseurComponent,
    TraitementComponent,
    TodolistComponent,
    ModifierComponent,
    ModifierdossierComponent,
    TodolistdossierComponent,
    DossierrechercherComponent,
    ModifierarmoireComponent,
    TodolistarmoireComponent,
    ModifierclasseurComponent,
    TodolistclasseurComponent,
    TodolistcompagnieComponent,
    ModifiercompagnieComponent,
    NavbardashboardComponent,
    HistoriquedossierComponent,
     
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
