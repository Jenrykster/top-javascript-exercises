const palindromes = function (text) {
    let words = text.toLowerCase().split(' ').join('');
    words = words.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
    let reversedWords = words.split('').reverse().join('');
    console.log(words);
    return words == reversedWords;
};

module.exports = palindromes;
