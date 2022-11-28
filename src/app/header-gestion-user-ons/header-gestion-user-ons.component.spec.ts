import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGestionUserOnsComponent } from './header-gestion-user-ons.component';

describe('HeaderGestionUserOnsComponent', () => {
  let component: HeaderGestionUserOnsComponent;
  let fixture: ComponentFixture<HeaderGestionUserOnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderGestionUserOnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderGestionUserOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
