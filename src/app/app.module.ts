import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test/test.component';
import { EmployeeComponent } from './test/employee/employee.component';
import { EmployeeListComponent } from './test/employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './test/employee/employee-detail/employee-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { RoutingExampleComponent } from './test/routing-example/routing-example.component';
import { DepartmentListComponent } from './test/routing-example/department-list/department-list.component';
import { EmployeesListComponent } from './test/routing-example/employees-list/employees-list.component';
import { PageNotFoundComponent } from './test/routing-example/page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './test/routing-example/department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './test/routing-example/department-overview/department-overview.component';
import { DepartmentContactComponent } from './test/routing-example/department-contact/department-contact.component';
import { PropertyBindingComponent } from './test/property-binding/property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    RoutingExampleComponent,
    DepartmentListComponent,
    EmployeesListComponent,
    routingComponents,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent,
    PropertyBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
