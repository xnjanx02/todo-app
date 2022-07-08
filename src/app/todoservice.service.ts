import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  constructor(private http:HttpClient) { }

  viewTodo=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
  }
}
