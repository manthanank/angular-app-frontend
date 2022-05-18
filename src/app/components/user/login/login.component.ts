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
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {}

  onLoginSubmit() {
    this.authService
      .authenticateUser(this.loginForm.value)
      .subscribe((data) => {
        if (data.success) {
          this.authService.storeUserData(data.token, data.user);
          //this.flashMessage.show('You are now logged in', {cssClass: 'alert-success', timeout: 5000});
          this.router.navigate(['home']);
        } else {
          //this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          this.router.navigate(['login']);
        }
      });
  }
}
