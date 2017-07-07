import { Dish, Time } from './dish.class';
describe('Dish', () => {
    it('should create a new dish', () => {
        const dish = new Dish('paella', new Time(50));
        expect(dish.name).toBe('paella');
    });

    it('should have time formatted correctly', () => {
        const time = new Time(120);
        expect(time.toString()).toEqual('2:00');
    });
});
