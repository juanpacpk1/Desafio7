import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { SeriesComponent } from './components/series/series.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AgregarItemComponent } from './components/agregar-item/agregar-item.component';
import { AppCheckModule } from '@angular/fire/app-check';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    IngresarComponent,
    InicioComponent,
    PeliculasComponent,
    SeriesComponent,
    DashboardComponent,
    AgregarItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    InicioComponent,
    
  ]
})
export class RoutesModule { }
