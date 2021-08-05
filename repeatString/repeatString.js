const repeatString = function(whatToRepeat, nOfTimes) {
    let finalString = '';
    if(nOfTimes < 0){
        return "ERROR";
    }
    for(let i = 0; i < nOfTimes; i++){
        finalString+= whatToRepeat;
    }
    return finalString;
};

module.exports = repeatString;
