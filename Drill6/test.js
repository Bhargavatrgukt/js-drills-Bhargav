const { counterFactory, limitFunctionCallCount, cacheFunction } = require('./problem');

// Test cases for `counterFactory`
console.log("Testing counterFactory...");
const counter = counterFactory();
console.log(counter.increment()); // Expected output: 1
console.log(counter.increment()); // Expected output: 2
console.log(counter.decrement()); // Expected output: 1
console.log(counter.decrement()); // Expected output: 0

console.log("\nTesting limitFunctionCallCount...");

// Callback function for testing limitFunctionCallCount
function magicFunction(counter) {
    return `Favorite and classic film, ${counter}`;
}

const limitedFunction = limitFunctionCallCount(magicFunction, 2);
console.log(limitedFunction()); // Expected output: "Favorite and classic film, 1"
console.log(limitedFunction()); // Expected output: "Favorite and classic film, 2"
console.log(limitedFunction()); // Expected output: "Exceeded the number of calls"

console.log("\nTesting cacheFunction...");

// Callback function for testing cacheFunction
function multiplyByTwo(n) {
    return n * 2;
}

const cachedMultiply = cacheFunction(multiplyByTwo);
console.log(cachedMultiply(2)); // Expected output: 4 (computed)
console.log(cachedMultiply(2)); // Expected output: 4 (cached)
console.log(cachedMultiply(3)); // Expected output: 6 (computed)
console.log(cachedMultiply(3)); // Expected output: 6 (cached)



