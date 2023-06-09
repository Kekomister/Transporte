import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaChoferComponent } from './altaChofer.component';

describe('InicioComponent', () => {
  let component: AltaChoferComponent;
  let fixture: ComponentFixture<AltaChoferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaChoferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
