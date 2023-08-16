import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
    cars:string[] = [];
    carName = "";
   
    @Output() carsUpdated:EventEmitter<string[]> = new EventEmitter;

    carsAdded()
    {
      this.cars.push(this.carName);
      this.carName = "";
      console.log(this.cars);

     this.carsUpdated.emit(this.cars);
    }
}
