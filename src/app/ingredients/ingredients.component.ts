import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../models/ingredient.interface';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
	@Input() ingredients: Ingredient[]
  id : number


  constructor() { 
    this.id = 2;
  }

  ngOnInit() {
  }


  addIngredient(name: HTMLInputElement){
  	let ingredient : Ingredient = { id: this.id++, name : name.value, price : 0, stock: 0}
  	this.ingredients.push(ingredient);
    name.value=''; // clear field 
  }
}
