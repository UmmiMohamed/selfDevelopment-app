import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public selectedId;

  departments = [
    { id: 1, name: 'Andrew', age: 30 },
    { id: 2, name: 'Brandon', age: 55 },
    { id: 3, name: 'Christina', age: 26 },
    { id: 4, name: 'Elena', age: 28 }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department) {
    // this.router.navigate(['/department-list', department.id]);
    this.router.navigate([department.id], {relativeTo: this.route});
    // hey i dont care what the url now, but to the current route, append the department id
  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}
