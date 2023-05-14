import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAvailablePeriodComponent } from './add-available-period.component';

describe('AddAvailablePeriodComponent', () => {
  let component: AddAvailablePeriodComponent;
  let fixture: ComponentFixture<AddAvailablePeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAvailablePeriodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAvailablePeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
