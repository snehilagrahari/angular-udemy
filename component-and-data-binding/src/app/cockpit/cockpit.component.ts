import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  newServerName = '';
  newServerContent = '';

  @Output('newServer') serverAdded = new EventEmitter<{name : string, content : string, type : string}>;

  onAddServer() {
    this.serverAdded.emit({ type : 'server', name : this.newServerName, content : this.newServerContent});
    this.reset();
  }

  onAddBlueprint() {
    this.serverAdded.emit({type : 'blueprint', name : this.newServerName, content : this.newServerContent});
    this.reset();
  }


  reset(){
    this.newServerName="";
    this.newServerContent="";
  }
}
