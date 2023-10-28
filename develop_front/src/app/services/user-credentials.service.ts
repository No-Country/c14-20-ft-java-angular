import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, login } from '../interfaces/User.interface';

@Injectable({
  providedIn: 'root'
})
export class UserCredentialsService {
  invalidUserAuth= new EventEmitter<boolean>(false)
constructor(private http: HttpClient, private router:Router) { }
userSignUp(user:User){
 this.http.post('http://localhost:3000/users',user,{observe:'response'})
 .subscribe((result)=>{
  if(result){
    localStorage.setItem('user',JSON.stringify(result.body));
    this.router.navigate(['/']);
  }
  
 })
  
}
userLogin(data:login){
  this.http.get<User[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,
  {observe:'response'}
  ).subscribe((result)=>{
    if(result && result.body?.length){
      localStorage.setItem('user',JSON.stringify(result.body[0]));
      this.router.navigate(['/']);
      this.invalidUserAuth.emit(false)
    }else{
      this.invalidUserAuth.emit(true)
    }
  })
}

userAuthReload(){
  if(localStorage.getItem('user')){
    this.router.navigate(['/']);
  }
}
}
