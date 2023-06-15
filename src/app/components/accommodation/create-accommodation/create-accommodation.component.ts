import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Accommodation, Address, Offer, Price } from '../model/accommodation';
import { AccommodationService } from '../service/accommodation.service';

@Component({
  selector: 'app-create-accommodation',
  templateUrl: './create-accommodation.component.html',
  styleUrls: ['./create-accommodation.component.css']
})
export class CreateAccommodationComponent implements OnInit {
  public accommodation: Accommodation = {} as Accommodation;
  public address : Address = {} as Address;
  public offer : Offer = {} as Offer;
  public price: Price = {} as Price;

  errorMessage = "";

  constructor(private accommodationService: AccommodationService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  createAccommodation() {

    this.errorMessage = "";

    this.accommodationService.createAccommodation(this.accommodation).subscribe(
      data => {
        console.log(data);
    }, error => {
      console.log(error);
      this.errorMessage = error.message;
    })
  }


  onSubmit(){
    this.accommodation.address = this.address;
    this.accommodation.offers = this.offer;
    this.accommodation.price = this.price;
    console.log(this.accommodation);
    this.createAccommodation();
  }
  }
