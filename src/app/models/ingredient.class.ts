export type unitType = typeof MassUnit | typeof VolumeUnit

export class Ingredient {
    name: string
    unitType: unitType

    constructor(name: string, unitType: unitType) {
        this.name = name;
        this.unitType = unitType;
    }
}

export class IngredientPrice {
    ingredient: Ingredient
    price: EuroUnit

    constructor(ingredient: Ingredient, price?: EuroUnit) {
        price = price == null ? new EuroMassUnit(null, MassUnit.mg) : price;
        this.price = price;
        this.ingredient = ingredient;
    }
}

export class IngredientQuantity {
    ingredient: Ingredient
    quantity: UnitsOfMeasurement

    constructor(ingredient: Ingredient, quantity: UnitsOfMeasurement) {
        this.quantity = quantity;
        this.ingredient = ingredient;
    }
}

export class IngredientQuantityBlock {
    nBlocks: number
    blockQuantity: IngredientQuantity
    price: Euro

    /**
     * @param nBlocks number of blocks
     * @param blockQuantity quantity in each block
     * @param price price of one block
     */
    constructor(nBlocks: number, blockQuantity: IngredientQuantity, price?: Euro) {
        this.nBlocks = nBlocks;
        this.blockQuantity = blockQuantity;
        this.price = price;
    }

    public total(): UnitsOfMeasurement {
        return this.blockQuantity.quantity.mul(this.nBlocks);
    }

    public unitPrice(): EuroUnit {
        const unitPrice = this.price.scale(1 / this.blockQuantity.quantity.value)
        return new EuroUnit(unitPrice, this.blockQuantity.ingredient.unitType, this.blockQuantity.quantity.unit);
    }
}

/**
*	Euro with a stablished unit (euro/unit)
*/
export class EuroUnit {
    price: Euro
    unit: MassUnit | VolumeUnit
    Unit: unitType

    constructor(price: Euro, Unit: unitType, unit: MassUnit |  VolumeUnit) {
        this.price = price == null ? new Euro() : price;
        this.Unit = Unit;
        this.unit = unit;
    }

    mul(physicalProp: UnitsOfMeasurement): Euro {
        return this.price.scale( physicalProp.value * (physicalProp.unit / this.unit) );
    }

    toString () {
        return this.price.toString() + '/' + this.Unit[this.unit];
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
            ) {
        this.Unit = Unit;
        this.value = value | 0;
    }

    mul(multiplier: number): this {
        const copy = new (this.constructor as any)();
        copy.value = this.value * multiplier;
        return copy;
    }

    toString() {
        return this.value + this.Unit[this.unit];
    }
}

export class Mass extends UnitsOfMeasurement {
    private DefaultUnit: MassUnit = MassUnit.mg;

    constructor(value?: number, unit?: MassUnit ) {
        super(MassUnit, value);
        this.unit = unit == null ? this.DefaultUnit : unit;
    }

}

export class Volume extends UnitsOfMeasurement {
    private DefaultUnit: VolumeUnit = VolumeUnit.mL;

    constructor(value?: number, unit?: VolumeUnit ) {
        super(VolumeUnit, value);
        this.unit = unit == null ? this.DefaultUnit : unit;
    }

}


const CENTS_IN_EURO = 100;

export class Euro {
    price: number
    cents: number
    precision = 2

    formatter = new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: this.precision,
    });

    constructor (price: string = '0', centsOpt?: number) {
        if (centsOpt != null) { // case for when is passed the exact amount in cents (used internally for avoiding parsing)
            this.cents = centsOpt;
            return;
        }

        price = price.replace(',', '.').replace(/[^\d.-]/g, ''); // price as	"4.1234" / ".25" / 		"1."
        const priceFloat = isNaN(parseFloat(price)) ? 0 : parseFloat(price); // 4.1234 /  0.25 / 		 1
        const priceString = priceFloat.toFixed(this.precision); // eg: 					"4.12" ,  "0.25",	 	"1.00"

        const [euro, cents] = priceString.split('.'); // eg:				["4", "12"], ["0","25"],   ["1", "00"]
        this.cents =  parseInt(euro, 10) * CENTS_IN_EURO;
        this.cents += parseInt(cents, 10);

    }

    setPrice(priceString: string = '0') {
        console.log('set');
        this.constructor(priceString);
    }

    getPrice(): string {
        console.log('get');
        return (this.cents / 100 ).toString();
    }

    sum(other: Euro): Euro {
        return new Euro('', this.cents + other.cents);
    }

    sub(other: Euro): Euro {
        return new Euro('', this.cents - other.cents);
    }

    scale(mult: number): Euro {
        return new Euro('', this.cents * mult);
    }

    toString() {

        return this.formatter.format(this.cents / 100);
    }

}
