const {personsData,logCityAndCountry}=require("../problem8");

console.log(logCityAndCountry(personsData));

const dataWithMissingFields = [
    { name: 'Alice', city: 'New York', country: 'USA' },
    { name: 'Bob', country: 'UK' }, // Missing city
    { name: 'Charlie', city: 'Paris' } // Missing country
  ];
  console.log(logCityAndCountry(dataWithMissingFields));
  
  

  // Test Case 3: Empty dataset
  console.log(logCityAndCountry([]));
 
  


  // Test Case 4: Input is not an array (error handling)
  try {
    console.log(logCityAndCountry(null));
  } catch (error) {
    console.log(error.message); 
  }