import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, DoCheck{
  title = 'lifecycle';

  constructor(){
    console.log("constructor() called");
  }

  ngOnInit(): void {
    console.log("OnInit() called")
  }

  ngDoCheck(): void {
    console.log("DoCheck() called")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges() called', changes);
  }

  ngAfterContentInit(): void {
    console.log("AfterContentInit() called");
  }
  
  ngAfterContentChecked(): void {
    console.log("afterContentChecked() called")
  }
  ngAfterViewInit(): void {
    console.log("afterViewInit() called")
  }
  ngAfterViewChecked(): void {
    console.log("afterviewchecked called")
  }
  ngOnDestroy(): void {
    console.log("onDestroy Called")
  }

  changevalue(){
    console.log("BETA")
  }

}
