import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSelect(department) {
    this.router.navigate(['/departments', department.id]);
  }

}
