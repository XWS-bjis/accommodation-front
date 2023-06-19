import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { CompleteUser, Host } from '../model/host.model';

@Component({
  selector: 'app-view-host-rating',
  templateUrl: './view-host-rating.component.html',
  styleUrls: ['./view-host-rating.component.css']
})
export class ViewHostRatingComponent implements OnInit {

  public hosts: Host[] = [];
  public users: CompleteUser[] = [];
  public gradeValueEdit: number = 0;
  public gradeValueAdd: number = 0;
  public loggedInUserId: string = this.userService.getUserId() || "-1";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers()
    this.getVisitedHosts();
  }

  getUsers() {
    this.userService.getAll().subscribe((data) =>{
      this.users = data;
    });
  }

  getVisitedHosts() {
    this.userService.visitedHosts(this.userService.getUserId() || "-1").subscribe((data) =>{
      this.hosts = data;
      this.hosts.forEach(a => {
        a.grades.forEach(g => {
          this.users.forEach(u => {
            if (g.reviewerId == u.id) g.reviewer = u;
          })
        })
      })
      console.log(this.hosts)
    });
  }

  deleteGrade(userId: string) {
    console.log(userId);
    this.userService.deleteGrade(this.loggedInUserId, userId).subscribe(
      data => {
        console.log(data);
    }, error => {
      console.log(error);
    })
  }

  editGrade(userId: string) {
    const payload: any = {
      reviewerId: this.loggedInUserId,
      value: this.gradeValueEdit,
    };
    console.log(payload);
    this.userService.editGrade(payload, userId).subscribe(
      data => {
        this.userService.editHighlitedHost(userId).subscribe(
          data=>{}
        )
        console.log(data);
    }, error => {
      console.log(error);
    })
  }

  addGrade(userId: string) {
    const payload: any = {
      reviewerId: this.loggedInUserId,
      value: this.gradeValueAdd,
    };
    console.log(payload);
    this.userService.createGrade(payload, userId).subscribe(
      data => {
        this.userService.editHighlitedHost(userId).subscribe(
          data=>{}
        )
        console.log(data);
    }, error => {
      console.log(error);
    })
  }

}
