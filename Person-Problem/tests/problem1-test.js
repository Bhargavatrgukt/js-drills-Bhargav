const emailAddressOfPerson = require('../problem1-email');
const dataset = require("../problem-dataset");

// Test Case 1 ---> Data Set Checking
try {
  console.log(emailAddressOfPerson(dataset)); // Valid dataset
} catch (error) {
  console.log("Error in Test Case 1:", error.message);
}

// Test Case 2: Empty Array
const test2 = [];
try {
  console.log(emailAddressOfPerson(test2)); // []
} catch (error) {
  console.log("Error in Test Case 2:", error.message);
}

// Test Case 3: Missing email field
const test3 = [
  { id: 1, name: 'Alice', age: 30, email: 'alice@example.com' },
  { id: 2, name: 'Bob', age: 25 }, // Missing 'email'
];
try {
  console.log(emailAddressOfPerson(test3)); // Expected output: ['alice@example.com']
} catch (error) {
  console.log("Error in Test Case 3:", error.message);
}

// Test Case 4: Null email
const test4 = [
  { id: 1, name: 'Alice', age: 30, email: 'alice@example.com' },
  { id: 2, name: 'Bob', age: 25, email: null }, // Null email value
];
try {
  console.log(emailAddressOfPerson(test4)); // Expected output: ['alice@example.com', null]
} catch (error) {
  console.log("Error in Test Case 4:", error.message);
}

// Test Case 5: No argument passed
try {
  console.log(emailAddressOfPerson()); // Expected to throw error
} catch (error) {
  console.log("Error in Test Case 5:", error.message); // Expected: TypeError
}

// Test Case 6: Non-array input
try {
  console.log(emailAddressOfPerson("not an array")); // Expected to throw error
} catch (error) {
  console.log("Error in Test Case 6:", error.message); // Expected: TypeError
}

try {
  console.log(emailAddressOfPerson({})); // Expected to throw error
} catch (error) {
  console.log("Error in Test Case 6:", error.message); // Expected: TypeError
}

// Test Case 7: Undefined objects in array
const test7 = [
  { id: 1, name: 'Alice', age: 30, email: 'alice@example.com' },
  undefined, // Invalid entry
  { id: 2, name: 'Bob', age: 25, email: 'bob@example.com' },
];
try {
  console.log(emailAddressOfPerson(test7)); // Expected to throw error
} catch (error) {
  console.log("Error in Test Case 7:", error.message); // Expected: TypeError
}
