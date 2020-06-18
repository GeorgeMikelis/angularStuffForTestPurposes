import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  ref;
  sec: number = 1;
  secondsArray: number[] = [];

  

  constructor() {
    console.log(this.sec);
   }

  ngOnInit(): void {
  }

  secondsPassed() {
    this.sec++;
    this.secondsArray.push(this.sec);
    console.log(this.sec);
    console.log(this.secondsArray);
  }

  onGameStarted() {
    this.ref = setInterval(this.secondsPassed, 1000);
    console.log(this.ref);
  }

  onGameStoped() {

  }

}




