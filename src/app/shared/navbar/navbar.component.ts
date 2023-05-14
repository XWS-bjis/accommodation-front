import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/components/user/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public userExists = '';
  public role = '';

  constructor(private userService: UserService,
              private router:Router) { }

  ngOnInit(): void {
      const role = this.userService.getRole();
      this.role = role ? role : '';
      console.log(role)
      this.userService.currentNav.subscribe(message =>{
       this.userExists = message;
      })
  }

  public logout(){
    this.userService.logout();
    this.role = '';
  }

}
