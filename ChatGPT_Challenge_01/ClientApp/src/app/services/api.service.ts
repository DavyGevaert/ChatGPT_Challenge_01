import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Task } from '../model/task'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  // GET ALL
  public getListTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>('https://localhost:7025/api/Tasks').pipe(delay(3000))
  }

  // GET BY ID
  // id is string in JavaScript json
  public getTaskById(id: string): Observable<Task> {
    return this.httpClient.get<Task>('https://localhost:7025/api/Tasks/' + id)
  }

  // POST
  public createTask(task: Task): Observable<Task> {
    // https://www.youtube.com/watch?v=DvnzeCfYg0s how to update list

    return this.httpClient
      .post<Task>('https://localhost:7025/api/Tasks/', task)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      )
  }

  // PUT
  public editTask(guid: string, task: Task): Observable<Task> {
    return this.httpClient.put<Task>('https://localhost:7025/api/Tasks/' + guid, task)
  }

  // DELETE BY ID
  public deleteTask(guid: string): Observable<Task> {
    return this.httpClient.delete<Task>('https://localhost:7025/api/Tasks/' + guid)
  }
}
