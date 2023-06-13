import { Component, OnInit } from '@angular/core';
import { Address, User } from '../model/register.model';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User = {} as User
  address: Address = {} as Address

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.user.address = this.address
    this.userService.register(this.user).subscribe(()=>{
      
    })
    this.router.navigate(['login'])
  }

}
