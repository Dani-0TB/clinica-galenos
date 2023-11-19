import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [UsuariosComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule
  ]
})
export class AdminModule { }
