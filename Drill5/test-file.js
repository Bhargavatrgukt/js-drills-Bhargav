const {
    keys,
    values,
    mapObject,
    pairs,
    invert,
    defaults
} = require("./solutions");

// Test Data
const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };
const defaultProps = { car: "Maruthi", age: 45 };

// Test 1: keys function
console.log("Test 1: keys function");
const keysResult = keys(testObject);
console.log(keysResult); // Expected Output: ['name', 'age', 'location']

// Test 2: values function
console.log("\nTest 2: values function");
const valuesResult = values(testObject);
console.log(valuesResult); // Expected Output: ['Bruce Wayne', 36, 'Gotham']

// Test 3: mapObject function with callback
console.log("\nTest 3: mapObject function");
const mapObjectResult = mapObject(testObject, (value, key) => {
    if (typeof value === 'string') {
        value = value.toUpperCase();
    }
    return value;
});
console.log(mapObjectResult); // Expected Output: { name: 'BRUCE WAYNE', age: 36, location: 'GOTHAM' }

// Test 4: pairs function
console.log("\nTest 4: pairs function");
const pairsResult = pairs(testObject);
console.log(pairsResult); // Expected Output: [['name', 'Bruce Wayne'], ['age', 36], ['location', 'Gotham']]

// Test 5: invert function
console.log("\nTest 5: invert function");
const invertResult = invert(testObject);
console.log(invertResult); // Expected Output: { 'Bruce Wayne': 'name', 36: 'age', 'Gotham': 'location' }

// Test 6: defaults function
console.log("\nTest 6: defaults function");
const defaultsResult = defaults(testObject, defaultProps);
console.log(defaultsResult); // Expected Output: { name: 'Bruce Wayne', age: 36, location: 'Gotham', car: 'Maruthi' }

// Test 7: defaults function with missing values
console.log("\nTest 7: defaults function with missing values");
const newObject = { name: "Alfred", location: "Gotham" };
const defaultsResult2 = defaults(newObject, defaultProps);
console.log(defaultsResult2); // Expected Output: { name: 'Alfred', location: 'Gotham', car: 'Maruthi', age: 45 }
