import { Directive, ElementRef, Renderer2, HostListener, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elementRef : ElementRef, private renderer : Renderer2) {
  }

  ngOnInit(){
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue' );
  }

}
