import { Component, OnInit } from '@angular/core';
import { AccommodationService } from '../../accommodation/service/accommodation.service';
import { Accommodation } from '../../accommodation/model/accommodation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-host-accommodation',
  templateUrl: './host-accommodation.component.html',
  styleUrls: ['./host-accommodation.component.css']
})
export class HostAccommodationComponent implements OnInit {

  public accommodations: Accommodation[] = [];

  constructor(private accommodationService: AccommodationService, private router: Router) { }

  ngOnInit(): void {
    this.getAccommodations();
  }

  getAccommodations() {
    // TODO swap for getAllByUser
    this.accommodationService.getAllAccommodations().subscribe(data => this.accommodations = data);
  }

  navigateToAccommodationPage(id: string) {
    this.router.navigate(["/accommodation/" + id]);
  }

}
