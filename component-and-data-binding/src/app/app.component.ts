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
  
  addedNewServer(serverDetails : {name : string, content : string}){
    this.serverElements.push({
      type : "server",
      name : serverDetails.name,
      content : serverDetails.content
    })
  }

  addedNewBlueprint(serverDetails : {name : string, content : string}) : void{
    this.serverElements.push({
      type : "blueprint",
      name : serverDetails.name,
      content : serverDetails.content
    })
  }
  
}
