import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  onLogoutClick() {
    this.authService.logout();
    // this.flashMessage.show('You are logged out', {
    //   cssClass: 'alert-success', timeout: 3000
    // });
    this.router.navigate(['/login']);
    return false;
  }
}
