import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from '../model/list';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl = `${environment.apiUrl}/lists`;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  getLists(): Observable<List[]> {
    return this.http.get<List[]>(this.apiUrl, { headers: this.headers });
  }

  createList(list: List): Observable<List> {
    return this.http.post<List>(this.apiUrl, list, { headers: this.headers });
  }

  deleteList(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url, { headers: this.headers });
  }

  getListById(id: string): Observable<List> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<List>(url, { headers: this.headers });
  }
}
