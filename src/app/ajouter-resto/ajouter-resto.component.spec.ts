import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRestoComponent } from './ajouter-resto.component';

describe('AjouterRestoComponent', () => {
  let component: AjouterRestoComponent;
  let fixture: ComponentFixture<AjouterRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterRestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
