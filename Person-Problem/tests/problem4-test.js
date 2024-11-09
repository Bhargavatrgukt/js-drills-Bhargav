const {personsData,accessIndexPosition}=require('../problem4')

//testCase1 --->

try{
  console.log(accessIndexPosition(personsData))
}catch(err){
    console.log(err.mesaage)
}


//testCase2 --->
const data2 = [
    { name: "Alice", city: "New York" },
    { name: "Bob", city: "Los Angeles" },
    { name: "Charlie", city: "Chicago" },
  ];
  console.log(accessIndexPosition(data2)); // Expected output: Error message "Cannot read properties of undefined (reading 'name')"

  
  
  // Test Case 3: Argument is not an array
  const data3 = "Not an array";
  try {
    console.log(accessIndexPosition(data3));
  } catch (error) {
    console.log(error.message); // Expected output: "Argument must be an array"
  }
  
  // Test Case 4: Array with an undefined or null value at index 3
  const data4 = [
    { name: "Alice", city: "New York" },
    { name: "Bob", city: "Los Angeles" },
    { name: "Charlie", city: "Chicago" },
    null,
  ];
  console.log(accessIndexPosition(data4)); // Expected output: Error message "Cannot read properties of null (reading 'name')"
  
