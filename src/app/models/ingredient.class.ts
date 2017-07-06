import {Euro} from './euro.class';
import {MassUnit, UnitsOfMeasurement, unitType} from './unit.class';
import {EuroMassUnit, EuroUnit} from './eurounit.class';


export class Ingredient {
    name: string;
    unitType: unitType;

    constructor(name: string, unitType: unitType) {
        this.name = name;
        this.unitType = unitType;
    }
}

export class IngredientPrice {
    ingredient: Ingredient;
    price: EuroUnit;

    constructor(ingredient: Ingredient, price?: EuroUnit) {
        price = price == null ? new EuroMassUnit(null, MassUnit.mg) : price;
        this.price = price;
        this.ingredient = ingredient;
    }
}

export class IngredientQuantity {
    ingredient: Ingredient;
    quantity: UnitsOfMeasurement;

    constructor(ingredient: Ingredient, quantity: UnitsOfMeasurement) {
        this.quantity = quantity;
        this.ingredient = ingredient;
    }

    sum(other: IngredientQuantity): IngredientQuantity {
        return new IngredientQuantity(this.ingredient, this.quantity.sum(other.quantity));
    }
}

export class IngredientQuantityBlock {
    nBlocks: number;
    blockQuantity: IngredientQuantity;
    price: Euro;

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
        const unitPrice = this.price.scale(1 / this.blockQuantity.quantity.value);
        return new EuroUnit(unitPrice, this.blockQuantity.ingredient.unitType, this.blockQuantity.quantity.unit);
    }
}




