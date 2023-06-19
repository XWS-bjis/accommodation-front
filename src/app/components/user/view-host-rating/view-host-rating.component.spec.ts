import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHostRatingComponent } from './view-host-rating.component';

describe('ViewHostRatingComponent', () => {
  let component: ViewHostRatingComponent;
  let fixture: ComponentFixture<ViewHostRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHostRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewHostRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
