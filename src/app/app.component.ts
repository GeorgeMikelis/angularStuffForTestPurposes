import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onEvenNumber(evenNumber: number) {
    this.evenNumbers.push(evenNumber);
    console.log("from the app.component, this number is even:" +  evenNumber)
  }

  onOddNumber(oddNumber: number) {
    this.evenNumbers.push(oddNumber);
    console.log("from the app.component, this number is odd:" +  oddNumber)
  }
}
