import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRestoComponent } from './gestion-resto.component';

describe('GestionRestoComponent', () => {
  let component: GestionRestoComponent;
  let fixture: ComponentFixture<GestionRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionRestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
