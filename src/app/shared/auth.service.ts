import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly baseURL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  postUser(emp: Auth) {
    return this.http.post(this.baseURL + `/${emp._id}`, emp);
  }

  getUserList() {
    return this.http.get(this.baseURL);
  }

  putUser(emp: Auth) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteUser(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  login() {}
  register() {}
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    } else return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload) return userPayload.exp > Date.now() / 1000;
    else return false;
  }
}
