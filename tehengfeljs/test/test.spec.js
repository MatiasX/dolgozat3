describe('calcSurface', () => {
    it('radius=10, height=5', () => {
        expect(calcSurface(5, 10)).toBeCloseTo(471.238898, 0.002);
    })
    it('radius=2.5, height=3', () => {
        expect(calcSurface(2.5, 3)).toBeCloseTo(86.3937979737193, 0.002);
    });
    it('radius=0, height=0', () => {
        expect(calcSurface(0, 0)).toBe(0);
    });
})
describe('isGoodInput', () => {
    it('input=10', () => {
        expect(isGoodInput(10)).toBe(true);
    });

    it('input (3.14)', () => {
        expect(isGoodInput(3.14)).toBe(true);
    });

    it('input ("5")', () => {
        expect(isGoodInput('5')).toBe(true);
    });

    it('input ("abc")', () => {
        expect(isGoodInput('abc')).toBe(false);
    });

    it('input ("10a")', () => {
        expect(isGoodInput('10a')).toBe(false);
    });

    it('input (true)', () => {
        expect(isGoodInput(true)).toBe(false);
    });
});
