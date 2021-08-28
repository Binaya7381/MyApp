import { Component, OnInit } from '@angular/core';
import { IRegisterData } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {} as IRegisterData
  constructor() { }

  ngOnInit(): void {
  }

  loginUser() {
  console.log(this.loginUserData)
  }
  onEmailChange = (event: string) => {
    console.log(event);
}
onPasswordChange = (event: string) => {
  console.log(event);
  
}
}
