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
    return this.http.post(this.baseURL, emp);
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
}
