import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  clickArr : number[] = [];

  visible : boolean = false;
  
  buttonClick(){
    this.clickArr.push(Number(this.clickArr.length)+1);
    this.visible = !this.visible;
  }
}
