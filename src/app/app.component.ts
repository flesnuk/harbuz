import { Component } from '@angular/core';
import { Ingredient } from './models/ingredient.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingredients: Ingredient[];

  constructor () {
  	this.ingredients = [{ id:0, name : "arroz", price : 4, stock: 5}, { id:1, name : "agua", price : 1, stock: 10}];
  }
}
