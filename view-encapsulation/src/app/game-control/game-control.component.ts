import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit{
  timerRef : any;
  @Output('eventLaunch') eventEmit = new EventEmitter;

  ngOnInit(): void {
    console.log(this.timerRef); 
 }

  gameStartButton(){
    this.timerRef = setInterval(()=>{
      this.eventEmit.emit();
    },1000)
  }

  gameStopButton(){
    clearInterval(this.timerRef);
    this.timerRef = undefined;
  }
}
