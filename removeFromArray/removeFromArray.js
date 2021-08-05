const removeFromArray = function(array, ...itemsToRemove) {
    arrayToReturn = array;
    for(let i = 0; i <= itemsToRemove.length - 1; i++ ){
        let index = array.indexOf(itemsToRemove[i]);
        if(index > -1){
            arrayToReturn.splice(index, 1);
        }
    }
    return arrayToReturn;
}
module.exports = removeFromArray;
