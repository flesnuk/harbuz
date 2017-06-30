export class Ingredient {
	name: string
	price: EuroMassUnit
	stock: Mass

	constructor( name: string, price?: EuroMassUnit, stock?: Mass){
		this.name = name;
		this.price = price == null ? new EuroMassUnit(MassUnit, MassUnit.mg) : price;
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
	unit: MassUnit | VolumeUnit
	Unit: typeof MassUnit | typeof VolumeUnit

	constructor (tipo: typeof MassUnit | typeof VolumeUnit ,unit: MassUnit |  VolumeUnit, price?: Euro) {
		this.price = price == null ? new Euro() : price;
		this.unit = unit;
		this.Unit = tipo
	}

	mul(mass: Mass) : Euro{
		return this.price.mul( mass.value * (mass.unit / this.unit) );
	}

	toString () {
		return this.price.toString() + "/" + this.Unit[this.unit];
	}

}

export enum MassUnit {
	mg = 1,
	g  = 1000 * mg,
	kg = 1000 * g,
	lb = 454 * g
}

export enum VolumeUnit {
	mL = 1,
	L  = 1000 * mL,
	kL = 1000 * L,
}

export class Mass {
	unit: MassUnit
	value: number

	constructor(unit? : MassUnit, value? : number) {
		this.unit = unit == null ? MassUnit.mg : unit;
		this.value = value | 0;
	}

	toString() {
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
	precision: number = 2

	formatter = new Intl.NumberFormat('es-ES', {
  		style: 'currency',
  		currency: 'EUR',
  		minimumFractionDigits: this.precision,
	});

	constructor (price: string = "0", centsOpt?: number) {
		if (centsOpt != null) {
			this.cents = centsOpt;
			return;
		}

		price = price.replace(',', '.').replace(/[^\d.-]/g,''); // price as	"4.1234" / ".25" / 		"1." 
		let priceFloat = isNaN(parseFloat(price)) ? 0 : parseFloat(price); //4.1234 /  0.25 / 		 1 
		let priceString = priceFloat.toFixed(this.precision); // eg: 					"4.12" ,  "0.25",	 	"1.00"
		
		let [euro, cents] = priceString.split("."); // eg:				["4", "12"], ["0","25"],   ["1", "00"]
		this.cents =  parseInt(euro) * EuroUnit.EURO;
		this.cents += parseInt(cents);
		
	}

	setPrice(priceString: string = "0"){
		this.constructor(priceString);
	}

	getPrice() : string{
		return (this.cents / 100 ).toString();
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