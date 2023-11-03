import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from 'src/app/interfaces/Order.interface';
import { User } from 'src/app/interfaces/User.interface';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  private user!: User;
  private userObs: BehaviorSubject<User> = new BehaviorSubject<User>(this.user);

  private order!: Order;
  private orderObs: BehaviorSubject<Order> = new BehaviorSubject<Order>(this.order);
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

  newOrder(newOrder: Order) {
    this.order = newOrder;
    console.log(this.order);
    this.orderObs.next(this.order);
  }
  get orderData() {
    return this.orderObs.asObservable();
  }
}
