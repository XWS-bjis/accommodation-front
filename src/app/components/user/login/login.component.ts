import { Component, OnInit } from '@angular/core';
import { LoginDTO } from '../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userCredential: LoginDTO = {} as LoginDTO

  constructor() { }

  ngOnInit(): void {
  }

  loginUser(){
    
  }

}
