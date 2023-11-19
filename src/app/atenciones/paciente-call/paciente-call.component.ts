import { Component } from '@angular/core';

@Component({
  selector: 'app-paciente-call',
  templateUrl: './paciente-call.component.html',
  styleUrls: ['./paciente-call.component.scss'],
})
export class PacienteCallComponent {
  pacientes: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.pacientes = [
      { id: 1, nombre: 'Juan', apellido: 'Pérez', estado: 'pendiente' },
      { id: 2, nombre: 'María', apellido: 'Rodríguez', estado: 'en llamada' },
      { id: 3, nombre: 'Pedro', apellido: 'García', estado: 'pendiente' },
    ];
  }
}
