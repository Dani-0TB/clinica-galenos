import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AtencionesComponent } from './atenciones.component';
import { ReservaExitosaComponent } from './reserva-exitosa/reserva-exitosa.component';

const routes: Routes = [
  {
    path: '',
    component: AtencionesComponent 
  },
  {
    path:'exito',
    component: ReservaExitosaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtencionesRoutingModule { }
