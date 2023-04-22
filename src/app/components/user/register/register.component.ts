import { Component, OnInit } from '@angular/core';
import { Address, User } from '../model/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User = {} as User
  address: Address = {} as Address

  constructor() { }

  ngOnInit(): void {
  }

  registerUser(){
    this.user.address = this.address
  }

}
