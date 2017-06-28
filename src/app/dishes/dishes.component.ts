import { Component, OnInit, Input } from '@angular/core';
import { Dish, Time } from '../models/dish.class';
import { Ingredient } from '../models/ingredient.class';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
	dishes : Dish[]
	@Input() ingredients: Ingredient 

  constructor() {
  	this.dishes = [];
  }

  ngOnInit() {
  }

  addDish(dishName: HTMLInputElement, dishMinutes: number, dishSeconds: number){
  	this.dishes.push(new Dish(dishName.value, new Time(dishSeconds, dishMinutes)));
    dishName.value = ''; // clear dishName input
  }

}
