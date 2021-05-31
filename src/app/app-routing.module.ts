import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficasComponent } from './components/graficas/graficas.component';

const routes: Routes = [
  { path: 'graficas', component: GraficasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
