import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url: string = "/assets/employees.json";

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<IEmployee[]>(this.url);
    // return [
    //     {id: 1, name: 'Andrew', age: '30'},
    //     {id: 2, name: 'Brandon', age: '25'},
    //     {id: 3, name: 'Christina', age: '26'},
    //     {id: 4, name: 'Elena', age: '28'},
    //   ];
  }
}
