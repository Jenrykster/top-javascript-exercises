const reverseString = function(stringToReverse) {
    let finalString = '';
    for(let i = stringToReverse.length - 1; i >= 0; i--){
        finalString+=stringToReverse[i];
    }
    return finalString;
};

module.exports = reverseString;
