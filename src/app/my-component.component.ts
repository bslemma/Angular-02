import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
  <input #txtVal type="text"> 
  <input type="button" value="Insert" (click)="insertData(txtVal.value)">
  <ul>
  <li *ngFor="let val of myArray">
    {{val}}
  </li>
  </ul>
  <p *appMyVisibility="true">Paragraph is Visible</p>
  <div *appMyVisibility="true">
  Div is Visible
</div>
  <div *appMyVisibility="false">
    Div is Not Visible
  </div>
  <br>
  <div appMynewcolor (colorEmitter)="processElementColor($event)">Click to Here</div>
  <p>An element changed its color to:<strong>{{elementColor}}</strong></p> 
  `,
  styles: []
})
export class MyComponentComponent implements OnInit {
  myArray;
  elementColor:string;
  @Output() colorEmitter2:EventEmitter<string>
  constructor() {
    this.myArray=['Beh','She','Lem'];
   }
   insertData(data){
     this.myArray.push(data);
   }
 
  processElementColor(color)
  {
    this.elementColor=color;
    this.colorEmitter2.emit(color);
  }
  ngOnInit() {
  }
}
