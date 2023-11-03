import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialsService } from 'src/app/services/credentials/credentials.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLogin: boolean = true;
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private credentials: CredentialsService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onChangeRegister() {
    this.isLogin = !this.isLogin;
    console.log(this.isLogin);
  }
  onSubmit() {
    console.log(this.registerForm);

    this.credentials.registerUser(this.registerForm.value);
  }
}
