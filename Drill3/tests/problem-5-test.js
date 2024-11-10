const {carData,carFiltering}=require("../problem-5");


//test Case 1:
console.log(carFiltering(carData));




// Test case 2: Check if function returns an empty array if no cars are older than 2000
const testData2 = [
    { id: 5, car_make: "Mazda", car_model: "3", car_year: 2005 },
    { id: 6, car_make: "Hyundai", car_model: "Elantra", car_year: 2010 }
  ];
  console.log(carFiltering(testData2)); 
  // Expected output: []
  
  // Test case 3: Check if function returns all cars if all are older than 2000
  const testData3 = [
    { id: 7, car_make: "Ford", car_model: "Mustang", car_year: 1969 },
    { id: 8, car_make: "Dodge", car_model: "Charger", car_year: 1970 }
  ];
  console.log(carFiltering(testData3)); 
  // Expected output:
  // [
  //   { id: 7, car_make: "Ford", car_model: "Mustang", car_year: 1969 },
  //   { id: 8, car_make: "Dodge", car_model: "Charger", car_year: 1970 }
  // ]
  
  // Test case 4: Edge case - Empty array input
  console.log(carFiltering([])); 
  // Expected output: []
  
  // Test case 5: Edge case - Cars exactly from the year 2000
  const testData5 = [
    { id: 9, car_make: "Nissan", car_model: "Altima", car_year: 2000 },
    { id: 10, car_make: "BMW", car_model: "X5", car_year: 2001 },
    { id: 11, car_make: "Toyota", car_model: "Corolla", car_year: 1999 }
  ];
  console.log(carFiltering(testData5)); 
  // Expected output:
  // [
  //   { id: 11, car_make: "Toyota", car_model: "Corolla", car_year: 1999 }
  // ]