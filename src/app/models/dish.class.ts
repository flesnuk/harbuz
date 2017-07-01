import {IngredientQuantity} from './ingredient.class'
import { DecimalPipe } from '@angular/common';

export class Dish {
    name: string
    active: boolean
    time: Time
    thermalEnergy: ThermalEnergy
    ingredientsUsed: IngredientQuantity[]

    constructor(name: string, time: Time, thermalEnergy?: number, active: boolean = true){
        this.name = name;
        this.time = time;
        this.thermalEnergy = new ThermalEnergy(thermalEnergy | 0);
        this.active = active;
        this.ingredientsUsed = [];
    }
}

class ThermalEnergy {
    watts: number

    constructor(watts: number) {
        this.watts = watts
    }
}

export class Time {
    seconds: number

    constructor(seconds?: number, minutes?: number) {
        this.seconds = seconds | 0;
        this.seconds += minutes == null ? 0 : minutes * 60;
    }

    public toString = (): string => {
        if (this.seconds <= 59) {
            return '0:' + DecimalPipe.prototype.transform(this.seconds, '2.0');
        } else {
            const minutes = Math.floor(this.seconds / 60);
            const seconds = this.seconds % 60;
            return minutes + ':' + DecimalPipe.prototype.transform(seconds, '2.0');
        }
    }
}