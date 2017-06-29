export class Ingredient {
	id: number
	name: string
	price: EuroMassUnit
	stock: Mass

	constructor(id: number, name: string, price?: EuroMassUnit, stock?: Mass){
		this.id = id;
		this.name = name;
		this.price = price == null ? new EuroMassUnit(MassUnit.mg) : price;
		this.stock = stock == null ? new Mass() : stock;
	}
}

export class IngredientQuantity {
	ingredient: Ingredient
	quantity: Mass

	constructor(ingredient: Ingredient, quantity?: Mass){
		this.ingredient = ingredient;
		this.quantity = quantity == null ? new Mass() : quantity;
	}
}

export class EuroMassUnit {
	price: Euro
	unit: MassUnit

	constructor (unit: MassUnit, price?: Euro) {
		this.price = price == null ? new Euro() : price;
		this.unit = unit;
	}

	mul(mass: Mass) : Euro{
		return this.price.mul( mass.value * (mass.unit / this.unit) );
	}

	toString () {
		return this.price.toString() + "/" + MassUnit[this.unit];
	}

}

export enum MassUnit {
	mg = 1,
	g  = 1000 * mg,
	kg = 1000 * g,
	lb = 454 * g
}

export class Mass {
	unit: MassUnit
	value: number

	constructor(unit? : MassUnit, value? : number) {
		this.unit = unit == null ? MassUnit.mg : unit;
		this.value = value | 0;
	}

	toString() {
		console.log(this.value)
		return this.value + MassUnit[this.unit];
	}
}

enum EuroUnit {
	CENTS = 1,
	EURO = 100 * CENTS
}

export class Euro {
	price: number
	cents: number

	formatter = new Intl.NumberFormat('es-ES', {
  		style: 'currency',
  		currency: 'EUR',
  		minimumFractionDigits: 2,
	});

	constructor (price: string = "0", centsOpt?: number) {
		if (centsOpt != null) {
			this.cents = centsOpt;
			return;
		}

		price = price.replace(',', '.').replace(/[^\d.-]/g,''); // price as	"4.1234" / ".25" / 		"1." 
		let priceFloat = isNaN(parseFloat(price)) ? 0 : parseFloat(price); //4.1234 /  0.25 / 		 1 
		let priceString = priceFloat.toFixed(2); // eg: 					"4.12" ,  "0.25",	 	"1.00"
		
		let [euro, cents] = priceString.split("."); // eg:				["4", "12"], ["0","25"],   ["1", "00"]
		this.cents =  parseInt(euro) * EuroUnit.EURO;
		this.cents += parseInt(cents);
		
	}

	setPrice(priceString: string = "0"){
		this.constructor(priceString);
	}

	getPrice() : string{
		return (this.cents / 100).toString();
	}

	sum(other: Euro) : Euro {
		return new Euro("", this.cents + other.cents);
	}

	sub(other: Euro) : Euro {
		return new Euro("", this.cents - other.cents);	
	}

	mul(mult: number) : Euro{
		return new Euro("", this.cents * mult);
	}

	toString() {

		return this.formatter.format(this.cents / 100);
	}

}