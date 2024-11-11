const reducemethod=require("../reduce");


const items = [1, 2, 3, 4, 5, 5];

function callBack(accumulator,element){
    return accumulator+element
}

//Case 1:
console.log(reducemethod(items,callBack,undefined))


// Case 2: With a starting value of 0
console.log(reducemethod(items, callBack, 0)); // Expected output: 20

// Case 3: With a different starting value, say 10
console.log(reducemethod(items, callBack, 10)); // Expected output: 30 (10 + sum of items)

// Case 4: Testing with an empty array and no starting value
console.log(reducemethod([], callBack, undefined)); // Expected output: undefined or 0 depending on your implementation

// Case 5: Testing with an empty array and a starting value of 0
console.log(reducemethod([], callBack, 0)); // Expected output: 0