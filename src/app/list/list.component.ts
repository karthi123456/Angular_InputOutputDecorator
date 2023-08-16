import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  carsList:string[] = [];

  carsDataUpdated(cars:string[])
  {
    this.carsList = cars;
  }
}