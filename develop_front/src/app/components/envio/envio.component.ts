import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialsService } from 'src/app/services/credentials/credentials.service';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent {
  isLogin: boolean = true;
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private credentials: CredentialsService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      completeName: ['', Validators.required],
      direction: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  onChangeRegister() {
    this.isLogin = !this.isLogin;
    console.log(this.isLogin);
  }
  onSubmit() {
    console.log(this.registerForm);

    this.credentials.newOrder(this.registerForm.value);
    this.router.navigate(['/confirmacion']);
  }

}
