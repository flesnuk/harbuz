export class Ingredient {
	id: number
	name: string
	price: Euro
	stock: number

	constructor(id: number, name: string, price?: Euro, stock?: number){
		this.id = id;
		this.name = name;
		this.price = price == null ? new Euro() : price;
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

export class Euro {
	price: number

	formatter = new Intl.NumberFormat('es-ES', {
  		style: 'currency',
  		currency: 'EUR',
  	minimumFractionDigits: 2,
	});

	constructor (price: number = 0) {
		this.price = price;
	}

	setPrice(priceString: string){
		priceString = priceString.replace(',', '.').replace(/[^\d.-]/g,'');
		this.price = isNaN(parseFloat(priceString)) ? 0 : parseFloat(priceString); 
	}

	getPrice() : string{
		return this.price.toString();
	}

	sum(other: Euro){
		return this.price + other.price;
	}

	valueOf(){
		return this.price;
	}

	toString() {

		return this.formatter.format(this.price);
	}

}