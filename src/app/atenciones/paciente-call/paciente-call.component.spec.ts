import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteCallComponent } from './paciente-call.component';

describe('PacienteCallComponent', () => {
  let component: PacienteCallComponent;
  let fixture: ComponentFixture<PacienteCallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacienteCallComponent]
    });
    fixture = TestBed.createComponent(PacienteCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
