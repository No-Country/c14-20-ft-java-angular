import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User, login } from '../interfaces/User.interface';

@Injectable({
  providedIn: 'root',
})
export class CredentialsService {
  isAdminLoggedIn= new BehaviorSubject<boolean>(false);
  isLoginError= new EventEmitter<boolean>(false)

  constructor(private http:HttpClient, private router:Router) { }
  userSignUp(data:User){
    this.http.post('http://localhost:3000/admin',
    data,
    {observe:'response'}).subscribe((result)=>{
      console.warn(result)
      if(result){
        localStorage.setItem('admin',JSON.stringify(result.body))
        this.router.navigate(['home/dashboard-admin'])
      }
    })
  } 
  reloadSeller(){
    if(localStorage.getItem('admin')){
      this.isAdminLoggedIn.next(true)
      this.router.navigate(['home/dashboard-admin'])
    }
  }
  userLogin(data:login){
   this.http.get(`http://localhost:3000/admin?email=${data.email}&password=${data.password}`,
   {observe:'response'}).subscribe((result:any)=>{
    console.warn(result)
    if(result && result.body && result.body.length===1){
      this.isLoginError.emit(false)
      localStorage.setItem('admin',JSON.stringify(result.body))
      this.router.navigate(['home/dashboard-admin'])
    }else{
      console.warn("login failed");
      this.isLoginError.emit(true)
    }
   })
  }
}
