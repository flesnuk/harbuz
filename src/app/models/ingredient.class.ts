export class Ingredient {
	id: number
	name: string
	price: number
	stock: number

	constructor(id: number, name: string, price?: number, stock?: number){
		this.id = id;
		this.name = name;
		this.price = price | 0;
		this.stock = stock | 0;
	}
}

export class IngredientQuantity {
	ingredient: Ingredient
	quantity: number

	constructor(ingredient: Ingredient, quantity?: number){
		this.ingredient = ingredient;
		this.quantity = quantity | 0;
	}
}