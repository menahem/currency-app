import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchCurrencyComponent } from './fetch-currency.component';

describe('FetchCurrencyComponent', () => {
  let component: FetchCurrencyComponent;
  let fixture: ComponentFixture<FetchCurrencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetchCurrencyComponent]
    });
    fixture = TestBed.createComponent(FetchCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
