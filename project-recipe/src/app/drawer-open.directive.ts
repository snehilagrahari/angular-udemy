import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDrawerOpen]'
})
export class DrawerOpenDirective {

  @HostBinding('class.open') ClassStatus = false;
  @HostListener('mouseenter') setClass(){
    this.ClassStatus = true;
  }

  @HostListener('mouseleave') removeClass(){
    this.ClassStatus = false;
  }
}
