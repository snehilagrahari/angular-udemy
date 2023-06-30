import { Directive, ElementRef, Renderer2, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective implements OnInit {
  @HostBinding('style.background') backgroundColor : string = 'red' 

  @HostListener('mouseover') color(){
    this.backgroundColor = "blue"
  }

  @HostListener("mouseleave") default(){
    this.backgroundColor = "red"
  }

  constructor(private elementRef : ElementRef, private renderer : Renderer2) { }

  ngOnInit(){
    this.backgroundColor = "white";
  }

}
