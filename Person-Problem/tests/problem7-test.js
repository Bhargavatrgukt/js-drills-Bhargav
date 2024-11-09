const {personsData,getNamesAndEmailsByAge}=require("../problem7");



//testCase1---->

console.log(getNamesAndEmailsByAge(personsData))


// Test Case 2: No individuals aged 25 in the dataset
const data2 = [
    { id: 1, name: 'Alice', age: 30, email: 'alice@example.com' },
    { id: 2, name: 'Bob', age: 22, email: 'bob@example.com' },
    { id: 3, name: 'Charlie', age: 28, email: 'charlie@example.com' },
  ];
  console.log(getNamesAndEmailsByAge(data2)); 
  // Expected output: []


  
  // Test Case 3: Multiple individuals of the same age as 25 but no email provided
  const data3 = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 25, email: 'bob@example.com' },
    { id: 3, name: 'Charlie', age: 25 },
  ];

  console.log(getNamesAndEmailsByAge(data3)); 
  // Expected output: [{ name: 'Bob', email: 'bob@example.com' }]




  
  // Test Case 4: Dataset with an individual but missing age field
  const data4 = [
    { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }, // Missing age
    { id: 3, name: 'Charlie', age: 25, email: 'charlie@example.com' },
  ];
  console.log(getNamesAndEmailsByAge(data4)); 
  // Expected output: [{ name: 'Alice', email: 'alice@example.com' }, { name: 'Charlie', email: 'charlie@example.com' }]
  




  // Test Case 5: Empty dataset
  const data5 = [];
  console.log(getNamesAndEmailsByAge(data5)); 
  // Expected output: []




  
  // Test Case 6: Input is not an array (error handling)
  try {
    console.log(getNamesAndEmailsByAge(null));
  } catch (error) {
    console.log(error.message); 
    // Expected output: "Input data must be an array"
  }