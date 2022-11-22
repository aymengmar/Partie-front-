import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactImfoComponent } from './contact-imfo.component';

describe('ContactImfoComponent', () => {
  let component: ContactImfoComponent;
  let fixture: ComponentFixture<ContactImfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactImfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactImfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
