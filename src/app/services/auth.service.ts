import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface LoginData{
  mail:string,
  password:string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient )

   url = "http://localhost:3000/login"
  login(body:LoginData):Observable<any>{
    return this.http.post<any>(`${this.url}`,body)
  }
}
