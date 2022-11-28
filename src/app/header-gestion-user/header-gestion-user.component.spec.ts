import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGestionUserComponent } from './header-gestion-user.component';

describe('HeaderGestionUserComponent', () => {
  let component: HeaderGestionUserComponent;
  let fixture: ComponentFixture<HeaderGestionUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderGestionUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderGestionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
