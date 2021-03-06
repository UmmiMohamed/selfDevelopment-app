import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  @ViewChild('bindingInput', {static: false}) bindingInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  getHTMLAttributeValue(): any {
    console.log('DOM property value: ' + this.bindingInput.nativeElement.getAttribute('value'));
  }

  getDOMPropertyValue(): any {
    console.log('DOM property value: ' + this.bindingInput.nativeElement.value);
  }

  test() {
    console.log('Test button works!');
  }

  toggleDisable() {
    const testbutton = document.getElementById('testbutton') as HTMLInputElement;
    testbutton.disabled = !testbutton.disabled;
    console.log('button disabled');
  }

}
