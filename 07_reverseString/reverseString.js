const reverseString = function(str) {
    const charArray = str.split("");
    str = "";
    for (let index = charArray.length - 1; index >= 0; index--) {
        str += charArray[index];
    }
    return str;
};

// Do not edit below this line
module.exports = reverseString;
