import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  public errorMsg: any;

  // public employees = [
  //   {id: 1, name: 'Andrew', age: '30'},
  //   {id: 2, name: 'Brandon', age: '25'},
  //   {id: 3, name: 'Christina', age: '26'},
  //   {id: 4, name: 'Elena', age: '28'},
  // ];

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.employeeService.getEmployees()
    .subscribe(data => this.employees = data,
              error => this.errorMsg = error);
  }
}
