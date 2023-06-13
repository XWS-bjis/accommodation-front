import { Component, OnInit } from '@angular/core';
import { Address, User } from '../../model/register.model';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public user: User = {} as User;
  public address: Address = {} as Address;
  public id:string = "";

  constructor(private router: Router,
     private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
    console.log(this.user)
  }

  saveUser() {
    this.user.address = this.address;
    console.log(this.userService.getUserId())
    this.userService.update(this.userService.getUserId() || "-1", this.user).subscribe(
      (data) => {
        console.log('User successfully updated:', this.user);
      },
      error => {
        console.error('Error occured:', error);
      }
    );
  }

  getUser(){
    this.userService.getById(this.userService.getUserId() || "-1").subscribe((data) =>{
      this.user = data;
      this.address = data.address;
      console.log(this.user)
    });
  }

 
  deleteUser(){
    this.userService.deleteById(this.userService.getUserId() || "-1").subscribe(
      (data) => {
        this.router.navigate(['/login']);
      }
    );
    this.userService.logout()
  }
}
