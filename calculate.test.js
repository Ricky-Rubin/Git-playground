const calculate = require('./calculate');

test('A function to do basic math operations', () => {
    expect(calculate(6, 2, '+')).toBe(8);
    expect(calculate(6, 2, '-')).toBe(4);
    expect(calculate(6, 2, '/')).toBe(3);
    expect(calculate(6, 2, '*')).toBe(12);
});