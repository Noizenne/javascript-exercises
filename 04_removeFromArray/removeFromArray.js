const removeFromArray = function(arr, ...args) {
    newArr = [];

    arr.forEach(element => {
        if(!args.includes(element)) {
            newArr.push(element);
        }
    });

    return newArr;
};

removeFromArray([1,2,3,4], 2, 3);

// Do not edit below this line
module.exports = removeFromArray;
