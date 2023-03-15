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
