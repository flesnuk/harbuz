import { Component, OnInit, Input, Output } from '@angular/core';
import { Ingredient } from '../models/ingredient.interface';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
	@Input() ingredient : Ingredient

	constructor(){
	}

  ngOnInit() {
  }

  ngDoCheck(){
  	console.log(this.ingredient);
  }

}
