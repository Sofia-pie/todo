import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from '../model/list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl = 'http://localhost:8080/lists';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  getLists(): Observable<List[]> {
    return this.http.get<List[]>(this.apiUrl, { headers: this.headers });
  }

  createList(list: List): Observable<List> {
    return this.http.post<List>(this.apiUrl, list, { headers: this.headers });
  }

  deleteList(id: number): Observable<List> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<List>(url, { headers: this.headers });
  }
}
