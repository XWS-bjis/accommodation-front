import { Component, OnInit } from '@angular/core';
import { AvailablePeriodService } from '../../service/available-period.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-available-period',
  templateUrl: './add-available-period.component.html',
  styleUrls: ['./add-available-period.component.css']
})
export class AddAvailablePeriodComponent implements OnInit {

  public availablePeriod: any = {};

  constructor(private availablePeriodService : AvailablePeriodService,
    private router:Router,
    private route: ActivatedRoute) { }

  errorMessage = "";


  ngOnInit(): void {
      this.route.params.subscribe(params => {
      this.availablePeriod.accommodationId =params["id"]
    })
  }

  savePeriod() {
     this.errorMessage = "";
     console.log(this.availablePeriod);

    this.availablePeriodService.addAvailablePeriod(this.availablePeriod).subscribe(
      data => {
        console.log(data);
    }, error => {
      console.log(error);
      this.errorMessage = error.message;
    })
   }
  }

