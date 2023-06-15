import { Component, OnInit } from '@angular/core';
import { Accommodation, AccommodationFilter, AccommodationSearch, Offer, Price } from '../model/accommodation';
import { AccommodationService } from '../service/accommodation.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-accommodation-page',
  templateUrl: './accommodation-page.component.html',
  styleUrls: ['./accommodation-page.component.css']
})
export class AccommodationPageComponent implements OnInit {

  public accommodations: Accommodation[] = [];
  public accommodationFilter: AccommodationSearch = <AccommodationSearch>{};
  public accommodationSideFilter: AccommodationFilter = <AccommodationFilter>{};
  public filter: AccommodationFilter = {} as AccommodationFilter;
  public totalPassengers: number = 0;
  public price: Price = {} as Price;
  public offer: Offer = {wifi: false, parking: false, kitchen: false, airConditioner: false, petsAllowed: false} as Offer; 

  getAccommodations(): void {
    this.service.getAllAccommodations().subscribe(data => {
      this.accommodations = data;
    })
  }

  getFilteredAccommodations(): void{
    this.service.filter(this.accommodationFilter).subscribe(data => {
      this.totalPassengers = this.accommodationFilter.guests
      this.accommodations = data;
    })
  }

  sideFilterChanged(): void{
    this.filter.offer = this.offer;
    this.service.sideFilter(this.filter).subscribe(data => {
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
    this.filter.minPrice = 0;
    this.filter.maxPrice = Number.MAX_VALUE;
    this.getAccommodations();
  }

}
