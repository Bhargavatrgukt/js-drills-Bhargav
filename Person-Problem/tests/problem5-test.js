const {personsData,getAges}=require('../problem5.js');

//testCase1 ---->
console.log(getAges(personsData))


// Test Case 2: Array with some objects missing the 'age' property
const data2 = [
    { name: "Alice", age: 25 },
    { name: "Bob" },
    { name: "Charlie", age: 35 }
  ];
  console.log(getAges(data2)); // Expected output: [25, 35]
  


  
  // Test Case 3: Array with null or undefined values
  
  const data3 = [
    { name: "Alice", age: 25 },
    null,
    undefined,
    { name: "Charlie", age: 35 }
  ];
  try{
  console.log(getAges(data3));
  }catch(err){
     console.log(err.message)
  } // Expected output: [ 25, undefined, 35 ] and Cannot read properties of null (reading 'age')



  
  // Test Case 4: Array with non-object elements
  const data4 = [
    { name: "Alice", age: 25 },
    42,
    "text",
    { name: "Charlie", age: 35 }
  ];
  console.log(getAges(data4)); // Expected output: [ 25, undefined, undefined, 35 ]



  
  // Test Case 5: Empty array
  const data5 = [];
  console.log(getAges(data5)); // Expected output: []


  
  // Test Case 6: Array with objects having 'age' set to null or undefined
  const data6 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: null },
    { name: "Charlie", age: undefined },
    { name: "Dave", age: 40 }
  ];
  console.log(getAges(data6)); // Expected output: [ 25, null, undefined, 40 ]

  
  
  // Test Case 7: Array with objects having negative and zero values for 'age'
  const data7 = [
    { name: "Alice", age: 0 },
    { name: "Bob", age: -5 },
    { name: "Charlie", age: 30 }
  ];
  console.log(getAges(data7)); // Expected output: [0, -5, 30]