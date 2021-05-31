import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from '@rinminase/ng-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficasComponent } from './components/graficas/graficas.component';
import { FechasComponent } from './components/fechas/fechas.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficasComponent,
    FechasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
