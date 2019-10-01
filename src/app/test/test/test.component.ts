import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // public name: string;
  // public myId = 'testId';
  // public successClass = 'text-success';
 public greeting: string;
 public color = 'blue';
 public colors = ['red', 'blue', 'green', 'yellow'];
  // public hasError = true;

  constructor() { }

  ngOnInit() {
  }

  // function called by front end (html) when button clicked
// onClick() {
//   this.greeting = 'Welcome User';
//   console.log(this.greeting);
// }

// logMessage(value){
//   console.log(value);
// }

// Save() {
//   console.log(this.name);
// }

}
