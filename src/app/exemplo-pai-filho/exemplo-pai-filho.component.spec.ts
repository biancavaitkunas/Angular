import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploPaiFilhoComponent } from './exemplo-pai-filho.component';

describe('ExemploPaiFilhoComponent', () => {
  let component: ExemploPaiFilhoComponent;
  let fixture: ComponentFixture<ExemploPaiFilhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExemploPaiFilhoComponent]
    });
    fixture = TestBed.createComponent(ExemploPaiFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
