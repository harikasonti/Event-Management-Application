import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlybookingComponent } from './onlybooking.component';

describe('OnlybookingComponent', () => {
  let component: OnlybookingComponent;
  let fixture: ComponentFixture<OnlybookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlybookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlybookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
