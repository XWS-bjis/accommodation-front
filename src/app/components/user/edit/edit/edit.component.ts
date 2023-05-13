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

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.user.address = this.address;
    this.userService.update(this.id, this.user).subscribe(
      response => {
        console.log('User successfully updated:', this.user);
      },
      error => {
        console.error('Error occured:', error);
      }
    );
  }

  getUser(){
    this.userService.getById(this.id).subscribe((data) =>{
      this.user = data;
      this.address = data.address;
      console.log(this.user)
    });
  }

}
