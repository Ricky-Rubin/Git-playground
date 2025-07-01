const ceasarCipher = require('./cipher');

    test('A function that shitfs each letter in a word by a specified number of positions in the alphabet', () => {
        expect(ceasarCipher('xyz', 3)).toBe('abc');
        expect(ceasarCipher('HeLLo', 3)).toBe('KhOOr');
        expect(ceasarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });