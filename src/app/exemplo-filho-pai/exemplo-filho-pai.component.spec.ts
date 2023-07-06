import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploFilhoPaiComponent } from './exemplo-filho-pai.component';

describe('ExemploFilhoPaiComponent', () => {
  let component: ExemploFilhoPaiComponent;
  let fixture: ComponentFixture<ExemploFilhoPaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExemploFilhoPaiComponent]
    });
    fixture = TestBed.createComponent(ExemploFilhoPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
