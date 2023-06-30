import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements = [
    {
      type : "server",
      name : "testserver",
      content : "Learning little by everyday"
    },
    {
      type : "blueprint",
      name : "testserver",
      content : "Learning little by everyday"
    }
  ];
  
  addedNewServer(serverDetails : {type : string, name : string, content : string}){
    this.serverElements.push({
      type : serverDetails.type,
      name : serverDetails.name,
      content : serverDetails.content
    })
  }

}
