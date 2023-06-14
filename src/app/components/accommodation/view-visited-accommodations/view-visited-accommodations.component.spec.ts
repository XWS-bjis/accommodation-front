import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVisitedAccommodationsComponent } from './view-visited-accommodations.component';

describe('ViewVisitedAccommodationsComponent', () => {
  let component: ViewVisitedAccommodationsComponent;
  let fixture: ComponentFixture<ViewVisitedAccommodationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVisitedAccommodationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVisitedAccommodationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
