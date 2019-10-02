import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public myname: string;
  public mylastName: string;
  displayInstruction = true;
  gender: string;
  userAs = 'Developer';
  // public myId = 'testId';
  // public successClass = 'text-success';

  // ngFor directive
  //  public greeting: string;
  //  public color = 'blue';
  //  public colors: string[];


  // public hasError = true;

  // component interaction

  constructor() { }

  ngOnInit() {

    // ngFor directive
    // this.colors = ['yellow', 'red', 'blue', 'black'];
  }

  // function called by front end (html) when button clicked
  // onClick() {
  //   this.greeting = 'Welcome User';
  //   console.log(this.greeting);
  // }

  welcomeUser(name: string, lastName: string) {
    this.myname = name;
    this.mylastName = lastName;
  }

  // Save() {
  //   console.log(this.name);
  // }


}
