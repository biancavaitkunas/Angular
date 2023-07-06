import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploServicesComponent } from './exemplo-services.component';

describe('ExemploServicesComponent', () => {
  let component: ExemploServicesComponent;
  let fixture: ComponentFixture<ExemploServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExemploServicesComponent]
    });
    fixture = TestBed.createComponent(ExemploServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
