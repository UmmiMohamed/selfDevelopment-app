import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // const id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/department-list', previousId]);
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/department-list', nextId]);
  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // assign departmentId to selectedId and check id the departmentId is null
    // this.router.navigate(['/department-list', {id: selectedId}]);
    // when click back button, it goes back to previous page and id: selectedId means the url will still remain to the selected id.
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route} );
  }

}
