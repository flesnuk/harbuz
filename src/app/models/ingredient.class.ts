export type unitType = typeof MassUnit | typeof VolumeUnit

export class Ingredient {
	name: string
	unitType: unitType

	constructor(name: string, unitType: unitType) {
		this.name = name;
		this.unitType = unitType;
	}
}

export class IngredientPrice extends Ingredient {
	price: EuroUnit

	constructor( name: string, price?: EuroUnit){
		price = price == null ? new EuroMassUnit(null, MassUnit.mg) : price;
		super(name, price.Unit);
		this.price = price;
	}
}

export class IngredientQuantity extends Ingredient {
	quantity: UnitsOfMeasurement

	constructor(name: string, quantity: UnitsOfMeasurement){
		super(name, quantity.Unit);
		this.quantity = quantity;
	}
}

/** 
*	Euro with a stablished unit (euro/unit)
*/
abstract class EuroUnit {
	price: Euro
	unit: MassUnit | VolumeUnit
	Unit: typeof MassUnit | typeof VolumeUnit

	constructor(price: Euro, Unit: typeof MassUnit | typeof VolumeUnit ,unit: MassUnit |  VolumeUnit) {
		this.price = price == null ? new Euro() : price;
		this.Unit = Unit;
		this.unit = unit;
	}

	mul(physicalProp: UnitsOfMeasurement) : Euro{
		return this.price.mul( physicalProp.value * (physicalProp.unit / this.unit) );
	}

	toString () {
		return this.price.toString() + "/" + this.Unit[this.unit];
	}
}

/** 
*	Euro with a mass unit (euro/mass)
*/
export class EuroMassUnit extends  EuroUnit {

	constructor (price: Euro, unit: MassUnit = MassUnit.mg) {
		super(price, MassUnit, unit)
	}

}

/** 
*	Euro with a volume unit (euro/volume)
*/
export class EuroVolumeUnit extends  EuroUnit {

	constructor (price: Euro, unit: VolumeUnit = VolumeUnit.mL) {
		super(price, VolumeUnit, unit)
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

abstract class UnitsOfMeasurement {
	Unit: typeof MassUnit | typeof VolumeUnit
	unit: MassUnit | VolumeUnit
	value: number

	constructor(Unit: typeof MassUnit | typeof VolumeUnit, 
				value?: number
			){
		this.Unit = Unit;
		this.value = value | 0;
	}

	toString() {
		return this.value + this.Unit[this.unit];
	}
}

export class Mass extends UnitsOfMeasurement {

	constructor(value? : number, unit? : MassUnit ) {
		super(MassUnit, value);
		this.unit = unit == null ? MassUnit.mg : unit;
	}

}

export class Volume extends UnitsOfMeasurement {

	constructor(value? : number, unit? : VolumeUnit ) {
		super(VolumeUnit, value);
		this.unit = unit == null ? VolumeUnit.mL : unit;
	}

}


const CENTS_IN_EURO = 100;

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
		this.cents =  parseInt(euro) * CENTS_IN_EURO;
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