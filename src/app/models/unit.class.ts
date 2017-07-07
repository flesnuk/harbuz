export type unitType = typeof MassUnit | typeof VolumeUnit

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

export class UnitsOfMeasurement {
  Unit: typeof MassUnit | typeof VolumeUnit;
  unit: MassUnit | VolumeUnit;
  value: number;

  constructor(Unit: typeof MassUnit | typeof VolumeUnit,
              value: number = 0
  ) {
    this.Unit = Unit;
    this.value = value;
  }

  mul(multiplier: number): this {
    const copy = new (this.constructor as any)();
    copy.value = this.value * multiplier;
    copy.unit = this.unit;
    copy.beautify();
    return copy;
  }

  sum(other: UnitsOfMeasurement): UnitsOfMeasurement {
    const copy = new (this.constructor as any)();
    copy.value = this.value * this.unit + other.value * other.unit;
    copy.beautify();
    return copy;
  }

  sub(other: UnitsOfMeasurement): UnitsOfMeasurement {
    const copy = new (this.constructor as any)();
    copy.value = this.value - other.value * (other.unit / this.unit);
    copy.unit = this.unit;
    copy.beautify();
    return copy;
  }

  subMutable(other: UnitsOfMeasurement) {
    this.value = this.value - other.value * (other.unit / this.unit);
    this.beautify();
  }

  gt(other: UnitsOfMeasurement): boolean {
    return this.value * this.unit > other.value * other.unit;
  }

  /**
   * Avoid reaching numbers higher than 1000
   */
  beautify() {
    let max = 1;
    Object.keys(this.Unit).forEach(
      function(k) {
        if ( (!isNaN(Number(k)) && parseInt(k, 10) > max) ) {
          max = parseInt(k, 10);
        }
    });

    while (this.value >= 1000 && this.unit < max ) {
      this.value /= 1000;
      this.unit *= 1000;
    }
    this.value = parseFloat(this.value.toFixed(2));
  }

  toString() {
    return this.value + ' ' + this.Unit[this.unit];
  }
}

export class Mass extends UnitsOfMeasurement {

  constructor(value?: number, unit: MassUnit = MassUnit.mg) {
    super(MassUnit, value);
    this.unit = unit;
  }

}

export class Volume extends UnitsOfMeasurement {

  constructor(value?: number, unit: VolumeUnit = VolumeUnit.mL ) {
    super(VolumeUnit, value);
    this.unit = unit;
  }

}
