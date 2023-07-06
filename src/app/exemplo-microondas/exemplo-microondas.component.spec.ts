import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploMicroondasComponent } from './exemplo-microondas.component';

describe('ExemploMicroondasComponent', () => {
  let component: ExemploMicroondasComponent;
  let fixture: ComponentFixture<ExemploMicroondasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExemploMicroondasComponent]
    });
    fixture = TestBed.createComponent(ExemploMicroondasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
