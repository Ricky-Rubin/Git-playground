const capital = require('./capital.js');

test('capitalizes the first letter of the word', () => {
    expect(capital('berate')).toBe('Berate');
});