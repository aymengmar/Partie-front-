import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeIthemComponent } from './commande-ithem.component';

describe('CommandeIthemComponent', () => {
  let component: CommandeIthemComponent;
  let fixture: ComponentFixture<CommandeIthemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeIthemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeIthemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
