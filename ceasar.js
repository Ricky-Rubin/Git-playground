function ceasarCipher(string, shift) {
    let index;
    let array = []
    const alphabets = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z'
    ];

    let splitString = string.split('');
    
    for (let i = 0; i < splitString.length; i++) {
        index = alphabets.indexOf(splitString[i].toLowerCase());

        if (alphabets.includes(splitString[i].toLowerCase())) {
            index = index + shift;
        } else {
            array.push(splitString[i]);
        }

        if (index >= alphabets.length) {
            index = index - alphabets.length;
        } else {
            index = index;
        }

        if (splitString[i] === splitString[i].toUpperCase() && alphabets.includes(splitString[i].toLowerCase())) {
            array.push(alphabets[index].toUpperCase());
        } else {
            array.push(alphabets[index]);
        }
    }

    return array.join('');
}

module.exports = ceasarCipher;