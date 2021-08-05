const sumAll = function(firstNumber, lastNumber) {
    let actualNumber = firstNumber;
    let sum = 0;
    console.log(typeof firstNumber);
    if(typeof firstNumber != "number"|| typeof lastNumber != "number" || firstNumber < 0 || lastNumber < 0){
        return 'ERROR';
    }
    while(actualNumber != lastNumber){
        sum += actualNumber;
        actualNumber < lastNumber ? actualNumber++ : actualNumber--; 
    }
    sum += lastNumber;
    
    return sum;
};

module.exports = sumAll;
