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
