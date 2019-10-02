import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

  public myname: string;
  public mylastName: string;
  displayInstruction = true;
  gender: string;
  userAs = 'Developer';

  public date = new Date();
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

  welcomeUser(firstName: string, lastName: string) {
    this.myname = firstName;
    this.mylastName = lastName;
  }

  fireEvent(){
    this.childEvent.emit('Hey ' + this.myname);
  }

  // Save() {
  //   console.log(this.name);
  // }
}
