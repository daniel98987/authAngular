import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface LoginData{
  mail:string,
  password:string
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient )

   url = "http://localhost:3000/user"
  userList():Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('_jwt')}`);
    return this.http.get<any>(`${this.url}`, { headers });
  }
}
