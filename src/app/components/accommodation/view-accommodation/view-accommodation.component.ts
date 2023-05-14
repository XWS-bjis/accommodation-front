import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AvailablePeriodService } from '../service/available-period.service';

@Component({
  selector: 'app-view-accommodation',
  templateUrl: './view-accommodation.component.html',
  styleUrls: ['./view-accommodation.component.css']
})
export class ViewAccommodationComponent implements OnInit {
  public id = '';
  private routeSub: Subscription | undefined;
  public availablePeriods: any[] = [];

  constructor(private route: ActivatedRoute, 
    private availablePeriodService: AvailablePeriodService,
    private router:Router) { }

    errorMessage = "";


  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id =params["id"]
      this.availablePeriodService.getAllByAccommodation(params["id"]).subscribe((data: any) => this.availablePeriods = data);
    })
  }

  editAvailablePeriod(availablePeriod : any) {
    console.log(availablePeriod)
    this.availablePeriodService.updateAccommodation(availablePeriod).subscribe(
      response => {
        console.log("updated", this.availablePeriods);
      },
      error => {
        console.error("error", error);
      }
    );
  }

  addAvailablePeriod() {
    this.router.navigate(['/addAvailablePeriod/' + this.id]);
  }
}
