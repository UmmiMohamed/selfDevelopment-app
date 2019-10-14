import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {id: 1, name: 'Andrew', age: 30},
    {id: 2, name: 'Brandon', age: 55},
    {id: 3, name: 'Christina', age: 26},
    {id: 4, name: 'Elena', age: 28}
];

  constructor() { }

  ngOnInit() {
  }

}
