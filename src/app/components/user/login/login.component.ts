import { Component, OnInit } from '@angular/core';
import { LoginDTO } from '../model/login.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userCredential: LoginDTO = {} as LoginDTO

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.userService.handleLogin(this.userCredential);
  }

}
