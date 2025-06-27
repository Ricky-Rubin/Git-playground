function reverse(word) {
    let flipWord = [];
    for (let i = word.length - 1; i >= 0; i--) {
        flipWord.push(word[i]);
    }
    return flipWord.join('');
}

module.exports = reverse;