import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient
  ) {}
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    if (this.authService.isLoggedIn())
      this.router.navigateByUrl('/userprofile');
  }
  login() {
    //console.log(this.loginForm.value);
    this.http.get<any>('http://localhost:3000/users').subscribe((res) => {
      //console.log(res);
      const user = res.find((a: any) => {
        return (
          a.email === this.loginForm.value.email &&
          a.password === this.loginForm.value.password
        );
      });
      if (user) {
        this.router.navigate(['home']);
      } else {
        alert('Invalid Credentials');
      }
    });
  }
}
