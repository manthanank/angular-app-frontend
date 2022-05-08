import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employeeForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployeeList().subscribe((data) => {
      console.log(data);
    });
  }
  submitForm() {
    console.log(this.employeeForm.value);
    this.employeeService
      .postEmployee(this.employeeForm.value)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
