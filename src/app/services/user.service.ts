import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(
    private http: HttpClient,
  ) { }

  registerUser(data: any){
    return this.http.post(`${environment.apiUrl}/api/user/signup`, data)
  }

  loginUser(data: any){
    return this.http.post(`${environment.apiUrl}/api/user/login`, data)
  }
}
