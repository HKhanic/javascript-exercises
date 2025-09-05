const sumAll = function(start, end) {
    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }

    let counter = 0;
    for (let index = (end - start > 0 ? start : end); index <= (end - start > 0 ? end : start); index++) {
        counter += index;
    }

    return counter;
};

// Do not edit below this line
module.exports = sumAll;
