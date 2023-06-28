import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'view-encapsulation';
  eventNumbers : number[] = [];

  event(){
    this.eventNumbers.push(this.eventNumbers.length+1);
  }

  
}
