import { Injectable } from '@angular/core';
import { User } from '../interfaces/User.interface';

@Injectable({
  providedIn: 'root',
})
export class CredentialsService {
  private user!: User;
  constructor() {}

  registerUser(newUser: User) {
    this.user = newUser;
    console.log(this.user);
  }
  get userData(): User {
    return this.user;
  }
}
