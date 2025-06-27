const analyzeArray = require('./analyzeArray');
const result = analyzeArray([6, 2, 4, 1, 8, 3]);

    test('A function to analyze values and operation from values in the array', () => {
        expect(result.Average).toBe(4);
        expect(result.Min).toBe(1);
        expect(result.Max).toBe(8);
        expect(result.length).toBe(6);
    });