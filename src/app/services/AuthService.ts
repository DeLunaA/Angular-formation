import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map, Observable, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { getCookieOptions, getCookieOptionsR } from './cookie-options';

import { User } from '../model/User';
import { Router } from '@angular/router';



@Injectable({
    providedIn: 'root'
  })

  export class AuthService{

    constructor(private http: HttpClient , private cookieService: CookieService , private router: Router ) {
      
    
    }
    
      login(user:User): Observable<object>{
        return this.http.post<any>(environment.hostUrl + `/api/v1/auth/authenticate`,user).pipe(map(Usd => { 
         let token = Usd.token
         sessionStorage.setItem("username", user.username);
         sessionStorage.setItem("pass", user.password);
         this.cookieService.set('token',token ,getCookieOptions() );
        return  Usd 
        }))

      }

      loginR(user:User): Observable<object>{
          return this.http.post<any>(environment.hostUrl + `/api/v1/auth/authenticateR`,user).pipe(map(Usd => { 
          let token = Usd.token
          sessionStorage.setItem("username", user.username);
          this.cookieService.set('tokenR',token ,getCookieOptionsR() );
         return  Usd    
        }))
      }

     
      
       logout() : void {

        const T = this.cookieService.get('token');
        if ( T != "tokenR" ){
          this.cookieService.delete('token');
        }
        this.router.navigate(['/login']);
      }


      public veriflog(): boolean {

        const tok = this.cookieService.get('token');

        return !!tok
      }
    
      
      


      

    }


