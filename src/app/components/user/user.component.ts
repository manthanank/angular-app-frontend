import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {}
}
