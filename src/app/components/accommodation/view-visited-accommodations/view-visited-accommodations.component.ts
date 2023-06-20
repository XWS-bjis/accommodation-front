import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/service/user.service';
import { Accommodation, Grade } from '../model/accommodation';
import { AccommodationService } from '../service/accommodation.service';
import { CompleteUser, User } from '../../user/model/register.model';

@Component({
  selector: 'app-view-visited-accommodations',
  templateUrl: './view-visited-accommodations.component.html',
  styleUrls: ['./view-visited-accommodations.component.css']
})
export class ViewVisitedAccommodationsComponent implements OnInit {

  public accommodations: Accommodation[] = [];
  public users: CompleteUser[] = [];
  public loggedInUserId: string = this.userService.getUserId() || "-1";
  public gradeValueEdit: number = 0;
  public gradeValueAdd: number = 0;

  constructor(private userService: UserService, private accommodationService: AccommodationService) { }

  ngOnInit(): void {
    this.getUsers()
    this.getVisitedAccommodations();
  }

  getUsers() {
    this.userService.getAll().subscribe((data) =>{
      this.users = data;
    });
  }

  getVisitedAccommodations() {
    this.accommodationService.getVisitedAccommodationsByUser(this.userService.getUserId() || "-1").subscribe((data) =>{
      this.accommodations = data;
      this.accommodations.forEach(a => {
        a.grades.forEach(g => {
          this.users.forEach(u => {
            if (g.reviewerId == u.id) g.reviewer = u;
          })
        })
      })
      console.log(this.accommodations)
    });
  }

  deleteGrade(accommodationId: string) {
    console.log(accommodationId);
    this.accommodationService.deleteGrade(this.loggedInUserId, accommodationId).subscribe(
      data => {
        console.log(data);
        window.location.reload();
    }, error => {
      console.log(error);
    })
  }

  editGrade(accommodationId: string) {
    const payload: any = {
      reviewerId: this.loggedInUserId,
      value: this.gradeValueEdit,
    };
    console.log(payload);
    this.accommodationService.editGrade(payload, accommodationId).subscribe(
      data => {
        console.log(data);
        window.location.reload();
    }, error => {
      console.log(error);
    })
  }

  addGrade(accommodationId: string) {
    const payload: any = {
      reviewerId: this.loggedInUserId,
      value: this.gradeValueAdd,
    };
    console.log(payload);
    this.accommodationService.createGrade(payload, accommodationId).subscribe(
      data => {
        console.log(data);
        window.location.reload();
    }, error => {
      console.log(error);
    })
  }

}
