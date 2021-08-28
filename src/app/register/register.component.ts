import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {} as IRegisterData;
   
  constructor(private _auth: AuthService) {
    
  }

  ngOnInit(): void {
    
  }
  registerUser(){
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => console.log(res),
      res => console.log (err)
      )
  }
  onEmailChange = (event: string) => {
    console.log(event);
}
onPasswordChange = (event: string) => {
  console.log(event);
}
}
export interface IRegisterData {
  email: string;
  password: string;
}

function err(err: any): void {
  throw new Error('Function not implemented.');
}

