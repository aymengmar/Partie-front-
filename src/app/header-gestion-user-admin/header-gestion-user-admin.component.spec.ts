import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGestionUserAdminComponent } from './header-gestion-user-admin.component';

describe('HeaderGestionUserAdminComponent', () => {
  let component: HeaderGestionUserAdminComponent;
  let fixture: ComponentFixture<HeaderGestionUserAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderGestionUserAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderGestionUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
