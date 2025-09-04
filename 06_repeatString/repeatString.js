const repeatString = function(str, amount) {

    if(amount < 0) {
        return "ERROR";
    }

    const start = str;
    str = "";
    for (let index = 0; index < amount; index++) {
        str+=start;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
