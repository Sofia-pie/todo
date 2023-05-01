import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { List } from '../model/list';
import { ListService } from './list.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';
  private currentUserId: string;

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    public router: Router,
    private jwtHelper: JwtHelperService,
    private listService: ListService
  ) {}

  register(name: string, email: string, password: string): Observable<any> {
    localStorage.removeItem('access_token');
    return this.http
      .post(`${this.baseUrl}/auth/register`, {
        name,
        email,
        password,
      })
      .pipe(
        tap((res: any) => {
          console.log(res.jwt_token);
          localStorage.setItem('access_token', res.jwt_token);
        }),
        switchMap((res: any) => {
          // Create a default list for the new user
          let list: List = {
            title: 'Нотатки',
            tasks: [],
          };
          return this.listService.createList(list).pipe(map(() => res));
        })
      );
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

  get token(): string | undefined {
    if (localStorage.getItem('access_token')) {
      return localStorage.getItem('access_token')!;
    }
    return;
  }

  getUser(): Observable<any> {
    const jwtToken = this.token!;
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
