const {carData,filteringCars}=require("../problem-6");

//test case 1:

console.log(JSON.stringify(filteringCars(carData)));


// Test case 2: No BMW or Audi cars in the inventory
const testData2 = [
    { id: 4, car_make: "Ford", car_model: "Focus", car_year: 2017 },
    { id: 5, car_make: "Chevrolet", car_model: "Malibu", car_year: 2019 }
  ];
  console.log(JSON.stringify(filteringCars(testData2))); 
  // Expected output: []
  
  // Test case 3: Only BMW cars in the inventory
  const testData3 = [
    { id: 6, car_make: "BMW", car_model: "3 Series", car_year: 2016 },
    { id: 7, car_make: "BMW", car_model: "5 Series", car_year: 2019 }
  ];
  console.log(JSON.stringify(filteringCars(testData3))); 
  // Expected output: Only BMW cars
  // [
  //   { id: 6, car_make: "BMW", car_model: "3 Series", car_year: 2016 },
  //   { id: 7, car_make: "BMW", car_model: "5 Series", car_year: 2019 }
  // ]
  
  // Test case 4: Edge case - Empty array input
  console.log(JSON.stringify(filteringCars([]))); 
  // Expected output: []
  
  // Test case 5: Mixed car brands with some BMW and Audi cars
  const testData5 = [
    { id: 8, car_make: "Audi", car_model: "Q7", car_year: 2021 },
    { id: 9, car_make: "Honda", car_model: "Civic", car_year: 2022 },
    { id: 10, car_make: "BMW", car_model: "X3", car_year: 2020 },
    { id: 11, car_make: "Hyundai", car_model: "Elantra", car_year: 2019 }
  ];
  console.log(JSON.stringify(filteringCars(testData5))); 
  // Expected output: Only BMW and Audi cars
  // [
  //   { id: 8, car_make: "Audi", car_model: "Q7", car_year: 2021 },
  //   { id: 10, car_make: "BMW", car_model: "X3", car_year: 2020 }
  // ]