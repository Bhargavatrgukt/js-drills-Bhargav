const{personsData,getFirstHobbies}=require('../problem6');

//testCase1 ---->

console.log(getFirstHobbies(personsData));

// Test Case 2: Dataset with some people missing hobbies
const data2 = [
    { id: 1, name: 'Alice', hobbies: ['reading', 'painting'] },
    { id: 2, name: 'Bob' }, // Missing 'hobbies'
    { id: 3, name: 'Charlie', hobbies: ['cooking', 'gardening'] },
  ];
  console.log(getFirstHobbies(data2)); // Expected output: ['reading', null, 'cooking']
  
  // Test Case 3: Empty hobbies arrays
  const data3 = [
    { id: 1, name: 'Alice', hobbies: [] },
    { id: 2, name: 'Bob', hobbies: [] },
    { id: 3, name: 'Charlie', hobbies: [] },
  ];
  console.log(getFirstHobbies(data3)); // Expected output: [null, null, null]
  
  // Test Case 4: Empty dataset
  const data4 = [];
  console.log(getFirstHobbies(data4)); // Expected output: []
  
  // Test Case 5: Dataset with `null` values for hobbies
  const data5 = [
    { id: 1, name: 'Alice', hobbies: null },
    { id: 2, name: 'Bob', hobbies: ['playing guitar', 'hiking'] },
    { id: 3, name: 'Charlie', hobbies: null },
  ];
  console.log(getFirstHobbies(data5)); // Expected output: [null, 'playing guitar', null]
  
  // Test Case 6: Non-string values in hobbies
  const data6 = [
    { id: 1, name: 'Alice', hobbies: [42, 'painting'] },
    { id: 2, name: 'Bob', hobbies: ['playing guitar', true] },
    { id: 3, name: 'Charlie', hobbies: [null, 'gardening'] },
  ];
  console.log(getFirstHobbies(data6)); // Expected output: [42, 'playing guitar', null]
  
  // Test Case 7: Dataset with only one person
  const data7 = [
    { id: 1, name: 'Alice', hobbies: ['yoga'] },
  ];
  console.log(getFirstHobbies(data7)); // Expected output: ['yoga']