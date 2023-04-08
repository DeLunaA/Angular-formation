import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs';
import { User } from '../model/User';


import { AuthService } from '../services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit {
  
  checkedusername: string;
  checkeduserpass: string;


  username: string;
  password: string;
  errorMessage = 'Incorrect username or password.';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  isChecked: boolean = false;

  user:User = new User();

  constructor(private authService :AuthService ,private cookieService: CookieService , private router: Router){

  }

  ngOnInit(): void {

       if(this.authService.veriflog()){
         this.router.navigate(['/home']);
       }
       
  }

  handleLogin(){

    const token = this.cookieService.get('token')

      if (this.isChecked == false) {
        this.authService.login(this.user).subscribe(data =>{

          this.invalidLogin = false;
          this.loginSuccess = true;
          this.successMessage = "login successful";
          this.router.navigate(['/home']);

          
        }, ()=>{this.invalidLogin = true ; this.loginSuccess = false ;})

      }

      else{
        this.authService.loginR(this.user).subscribe(data =>{
          this.checkedusername = "this.username" ;
          this.checkedusername = this.username ;

          this.invalidLogin = false;
          this.loginSuccess = true;
          this.successMessage = "login successful";
          this.router.navigate(['/home']);


          
        }, ()=>{this.invalidLogin = true ; this.loginSuccess = false ; })

      }

  


  }
  

}
