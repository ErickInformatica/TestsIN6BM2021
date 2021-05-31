import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FechasComponent } from './components/fechas/fechas.component';
import { GraficasComponent } from './components/graficas/graficas.component';

const routes: Routes = [
  { path: 'graficas', component: GraficasComponent},
  { path: 'fechas', component: FechasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
