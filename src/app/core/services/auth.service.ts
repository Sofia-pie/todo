import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth';
  currentUserId: number;
  constructor(private http: HttpClient, public router: Router) {}

  login(email: string, password: string) {
    return this.http
      .post<any>(`${this.baseUrl}/login`, { email, password })
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.jwt_token);
        this.currentUserId = res._id;
        this.router.navigate(['/main']);
      });
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
}
