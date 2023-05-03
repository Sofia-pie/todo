import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../model/task';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = `${environment.apiUrl}tasks`;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  getTask(id: string): Observable<Task> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Task>(url, { headers: this.headers });
  }
  getUsersTasks(): Observable<Task[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<Task[]>(url, { headers: this.headers });
  }
  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, { headers: this.headers });
  }

  updateTask(id: string, task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.patch<Task>(url, task, { headers: this.headers });
  }

  deleteTask(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  getTasksForToday(): Observable<Task[]> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return this.http
      .get<Task[]>(this.apiUrl)
      .pipe(
        map((tasks) =>
          tasks.filter(
            (task) => new Date(task.due_date).getDate() === today.getDate()
          )
        )
      );
  }

  getTasksPlanned(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl).pipe(
      map((tasks) =>
        tasks.filter((task) => {
          const today = new Date();
          const taskDate = new Date(task.due_date);
          return taskDate > today;
        })
      )
    );
  }

  getImportantTasks(): Observable<Task[]> {
    return this.http
      .get<Task[]>(this.apiUrl)
      .pipe(map((tasks) => tasks.filter((task) => task.important)));
  }
}
