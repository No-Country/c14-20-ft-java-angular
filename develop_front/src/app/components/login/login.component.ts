import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLogin: boolean = true;

  onChangeRegister() {
    this.isLogin = !this.isLogin;
    console.log(this.isLogin);
  }
}
