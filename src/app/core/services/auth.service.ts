import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';
  currentUserId: number;
  private token: string;
  private user: any;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    public router: Router,
    private jwtHelper: JwtHelperService
  ) {}

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/register`, {
      name,
      email,
      password,
    });
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(`${this.baseUrl}/auth/login`, { email, password })
      .pipe(
        tap((res: any) => {
          localStorage.setItem('access_token', res.jwt_token);
        })
      );
  }

  getUserProfile(id: any): Observable<any> {
    let api = `${this.baseUrl}/user/${id}`;
    return this.http.get(api, { headers: this.headers });
  }

  logout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['sign-up']);
    }
  }

  getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('access_token')!;
    }
    return this.token;
  }

  getUser(): Observable<any> {
    const jwtToken = this.getToken();
    const decodedToken = this.jwtHelper.decodeToken(jwtToken);
    const id = decodedToken.user_id;
    let api = `${this.baseUrl}/user/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      tap((res: any) => {
        console.log(res);
      })
    );
  }

  // getToken() {
  //   return localStorage.getItem('access_token');
  // }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
}
