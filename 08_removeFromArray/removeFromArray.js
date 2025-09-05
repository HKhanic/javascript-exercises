const removeFromArray = function(array, ...remove) {
    for (let index = 0; index < remove.length; index++) {
    array = array.filter( item => item !== remove[index])   
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
