import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlypaymentComponent } from './onlypayment.component';

describe('OnlypaymentComponent', () => {
  let component: OnlypaymentComponent;
  let fixture: ComponentFixture<OnlypaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlypaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlypaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
