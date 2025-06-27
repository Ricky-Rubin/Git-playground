const reverse = require('./reverse');

test('function to reverse any given string', () => {
    expect(reverse('manchester')).toBe('retsehcnam');
    expect(reverse('Thomas')).toBe('samohT');
})