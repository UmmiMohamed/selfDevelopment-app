import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './test/routing-example/employees-list/employees-list.component';
import { DepartmentListComponent } from './test/routing-example/department-list/department-list.component';
import { EmployeeComponent } from './test/employee/employee.component';
import { TestComponent } from './test/test/test.component';
import { PageNotFoundComponent } from './test/routing-example/page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './test/routing-example/department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './test/routing-example/department-overview/department-overview.component';
import { DepartmentContactComponent } from './test/routing-example/department-contact/department-contact.component';


const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full' },
  { path: 'departments', component: DepartmentListComponent },
  {
    path: 'departments/:id', component: DepartmentDetailComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent},
      { path: 'contact', component: DepartmentContactComponent}
    ]
  },
  { path: 'employees', component: EmployeesListComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'registration', component: TestComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =
[
  DepartmentListComponent,
  EmployeesListComponent,
  PageNotFoundComponent,
  DepartmentDetailComponent,
  DepartmentContactComponent,
  DepartmentOverviewComponent
];
