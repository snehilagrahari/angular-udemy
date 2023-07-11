import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  filterStr : string = "";
  words: string []= ['Astronaut', "Barrel", "Chamber", "Dehydrated", "Encyclopedia"];
}
