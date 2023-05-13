import { Component, OnInit } from '@angular/core';
import { Accommodation, AccommodationFilter } from '../model/accommodation';
import { AccommodationService } from '../service/accommodation.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-accommodation-page',
  templateUrl: './accommodation-page.component.html',
  styleUrls: ['./accommodation-page.component.css']
})
export class AccommodationPageComponent implements OnInit {

  public accommodations: Accommodation[] = [];
  public accommodationFilter: AccommodationFilter = <AccommodationFilter>{};
  public totalPassengers: number = 0;

  getAccommodations(): void {
    this.service.getAll().subscribe(data => {
      this.accommodations = data;
    })
  }

  getFilteredAccommodations(): void{
    this.service.filter(this.accommodationFilter).subscribe(data => {
      this.totalPassengers = this.accommodationFilter.guests
      this.accommodations = data;
    })
  }

  addEventStart(type: string, event: MatDatepickerInputEvent<Date>) {
    this.accommodationFilter.startDate = (`${event.value?.getFullYear()}/${(event.value?.getMonth() || 0) + 1}/${event.value?.getDate()}`);
  }

  addEventEnd(type: string, event: MatDatepickerInputEvent<Date>) {
    this.accommodationFilter.endDate = (`${event.value?.getFullYear()}/${(event.value?.getMonth() || 0) + 1}/${event.value?.getDate()}`);
  }

  constructor(
    private service: AccommodationService
  ) { }

  ngOnInit(): void {
    this.getAccommodations();
  }

}
