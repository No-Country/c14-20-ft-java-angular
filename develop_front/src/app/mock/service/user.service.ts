import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewUser } from '../interfaces/User.interface';
import { LoginUser } from '../interfaces/Login.interface';
import { Jwt } from '../interfaces/Jwt.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authURL = environment.URL + 'api/users'
  constructor(private httpClient: HttpClient) { }

  public new(newUser: NewUser): Observable<any>{
    return this.httpClient.post<any>(this.authURL , newUser);
  }


  public login(loginUser: LoginUser):Observable<Jwt>{
    return this.httpClient.post<Jwt>(environment.URL + 'login', loginUser)
  }
}
