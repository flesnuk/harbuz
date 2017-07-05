import {MassUnit, UnitsOfMeasurement, unitType, VolumeUnit} from './unit.class';
import {Euro} from './euro.class';

/**
 *	Euro with a stablished unit (euro/unit)
 */
export class EuroUnit {
  price: Euro;
  unit: MassUnit | VolumeUnit;
  Unit: unitType;

  /**
   * @param price Price of 1 unit
   * @param Unit Physical property measured
   * @param unit Unit used
   */
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
