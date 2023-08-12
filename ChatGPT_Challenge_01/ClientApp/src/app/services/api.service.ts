import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../model/task'
import { Guid } from "guid-typescript";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getListTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>('https://localhost:7025/api/Tasks')
  }

  // id is string in JavaScript json
  public getTaskById(id: string): Observable<Task> {
    return this.httpClient.get<Task>('https://localhost:7025/api/Tasks/' + id)
  }
}
