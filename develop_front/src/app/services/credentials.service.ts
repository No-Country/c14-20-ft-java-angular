import { Injectable } from '@angular/core';
import { User } from '../interfaces/User.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CredentialsService {
  private user!: User;
  private userObs: BehaviorSubject<User> = new BehaviorSubject<User>(this.user);
  constructor() {}

  registerUser(newUser: User) {
    this.user = newUser;
    console.log(this.user);
    this.userObs.next(this.user);
  }
  get userData() {
    return this.userObs.asObservable();
  }
  LogOut() {}
}
