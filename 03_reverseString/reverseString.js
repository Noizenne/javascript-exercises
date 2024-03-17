const reverseString = function(word) {
    const newWord = word.split("").reverse().join("");
    return newWord;
};
reverseString("hello there");
// Do not edit below this line
module.exports = reverseString;
