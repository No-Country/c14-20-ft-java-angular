import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User.interface';
import { CredentialsService } from 'src/app/services/credentials.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  showLogin=false;
  authError:String='';
  constructor(private cred: CredentialsService) {}

  ngOnInit(): void {
    this.cred.reloadSeller()
  }
  signUp(data: User): void {
    console.warn(data);
    this.cred.userSignUp(data);
  }
  login(data: User): void {
    this.cred.userLogin(data);
    this.cred.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or password is not correct";
      }
    })
  }
  openLogin(){
    this.showLogin=true
  }
  openSignUp(){
    this.showLogin=false
  }

}
