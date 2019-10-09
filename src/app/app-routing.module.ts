import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './test/routing-example/employees-list/employees-list.component';
import { DepartmentListComponent } from './test/routing-example/department-list/department-list.component';
import { EmployeeComponent } from './test/employee/employee.component';
import { TestComponent } from './test/test/test.component';


const routes: Routes = [
  { path: 'departments', component: DepartmentListComponent},
  { path: 'employees', component: EmployeesListComponent},
  { path: 'employee', component: EmployeeComponent},
  { path: 'registration', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, EmployeesListComponent]