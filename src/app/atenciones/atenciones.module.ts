import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtencionesRoutingModule } from './atenciones-routing.module';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import { ReservaComponent } from './reserva/reserva.component';
import { AtencionesComponent } from './atenciones.component';
import { ReservaExitosaComponent } from './reserva-exitosa/reserva-exitosa.component';
import { PacienteCallComponent } from './paciente-call/paciente-call.component';

@NgModule({
  declarations: [
    AtencionesComponent,
    ReservaComponent,
    ReservaExitosaComponent,
    PacienteCallComponent
  ],
  imports: [
    CommonModule,
    AtencionesRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class AtencionesModule { }
