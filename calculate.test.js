const calculate = require('./calculate');
const answer = calculate(12, 4);

test('A function to do basic math operations', () => {
    expect(answer.Sum).toBe(16);
    expect(answer.Multiplication).toBe(48);
    expect(answer.Subtraction).toBe(8);
    expect(answer.Division).toBe(3)
});