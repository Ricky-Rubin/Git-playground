const ceasar = require('./ceasarCipher');

    test('A function that shitfs each letter in a word by a specified number of positions in the alphabet', () => {
        expect(ceasar('xyz', 3)).toBe('abc');
    })