import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCurrencyResultComponent } from './display-currency-result.component';

describe('DisplayCurrencyResultComponent', () => {
  let component: DisplayCurrencyResultComponent;
  let fixture: ComponentFixture<DisplayCurrencyResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayCurrencyResultComponent]
    });
    fixture = TestBed.createComponent(DisplayCurrencyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
