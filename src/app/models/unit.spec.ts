import { Mass, MassUnit } from './unit.class';
describe('Unit', () => {
    const mass = new Mass(50, MassUnit.g);
    const mass2 = new Mass(10, MassUnit.kg);
    const multiplier = 3;


    it('should multiply', () => {
        const newMass = mass.mul(multiplier);
        const expected = new Mass(150, MassUnit.g).toString();
        expect(newMass.toString()).toBe(expected);
    });

    it('should sum', () => {
        const newMass = mass.sum(mass2);
        const expected = new Mass(10.05, MassUnit.kg).toString();
        expect(newMass.toString()).toBe(expected);
    });

    it('should substact', () => {
        const newMass = mass2.sub(mass);
        const expected = new Mass(9.95, MassUnit.kg).toString();
        expect(newMass.toString()).toBe(expected);
    });

    it('should substact and mutate', () => {
        mass2.subMutable(mass);
        const expected = new Mass(9.95, MassUnit.kg).toString();
        expect(mass2.toString()).toBe(expected);
    });

    it('should be greater', () => {
        expect(mass2.gt(mass)).toBe(true);
    });


});
