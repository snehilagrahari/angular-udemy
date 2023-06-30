import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit{
  timerRef : any;
  lastNumber : number = 0;
  @Output('eventLaunch') eventEmit = new EventEmitter<number>();

  ngOnInit(): void {
    console.log(this.timerRef); 
 }

  gameStartButton(){
    this.timerRef = setInterval(()=>{
      this.eventEmit.emit(this.lastNumber+1);
      this.lastNumber++;
    },1000)
  }

  gameStopButton(){
    clearInterval(this.timerRef);
    this.timerRef = undefined;
  }
}
