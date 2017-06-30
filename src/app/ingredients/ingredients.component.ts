import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../models/ingredient.class';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
	@Input() ingredients: Ingredient[]


  constructor() { 
  }

  ngOnInit() {
  }


  addIngredient(name: HTMLInputElement){
    let  ingredient = new Ingredient(name.value);
  	this.ingredients.push(ingredient);
    name.value=''; // clear field 
  }
}
