import { Directive, Output, EventEmitter, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appMynewcolor]'
})
export class MynewcolorDirective {
   private colors:string[];
   @Output() public colorEmitter:EventEmitter<string>;
  constructor(private element: ElementRef,
              private renderer2: Renderer2) {
                this.colors=['red','green','blue','yellow','cyan','purple'];
                this.colorEmitter=new EventEmitter();
               }
               
@HostListener('click') changeColor(){
  let x=Math.floor(Math.random()*this.colors.length);
  this.renderer2.setStyle(this.element.nativeElement,'color',this.colors[x]);
  this.colorEmitter.emit(this.colors[x]);
}
}
