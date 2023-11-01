import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/mock/interfaces/Login.interface';
import { NewUser } from 'src/app/mock/interfaces/User.interface';
import { TokenService } from 'src/app/mock/service/token.service';
import { UserService } from 'src/app/mock/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLogged=false;
  isLogginFail=false;
  loginUser!: LoginUser;
  userName!: string;
  password! :string;
  roles:string[]=[];
  errMsj!:string;

  name!: string;
  email!: string;



  constructor(
    private tokenService: TokenService, 
    private userService: UserService,
    private router: Router){}
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.loginUser = new LoginUser(this.email, this.password); 
    this.userService.login(this.loginUser).subscribe(data =>{
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setEmail(data.email);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
        
      })
  }

  onSingUp(): void{
    const newUser = new NewUser(this.name, this.email, this.password);
    this.userService.new(newUser).subscribe(
      data =>{
        alert("Usuario creado correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }
}
