import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  newServerName = '';
  newServerContent = '';

  @Output('newServer') serverAdded = new EventEmitter<{name : string, content : string}>;
  @Output('newBlueprint') blueprintAdded = new EventEmitter<{name : string, content : string}>; 

  onAddServer() {
    this.serverAdded.emit({name : this.newServerName, content : this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintAdded.emit({name : this.newServerName, content : this.newServerContent});
  }
}
