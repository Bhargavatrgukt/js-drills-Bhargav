const { carData,arrangeCars}=require("../problem-3");

//testCase1---->

console.log(arrangeCars(carData));

// Test case 2: Verify with an unordered set of car models
const sampleData2 = [
    { id: 1, car_make: "Honda", car_model: "Civic", car_year: 2008 },
    { id: 2, car_make: "Toyota", car_model: "Camry", car_year: 2010 },
    { id: 3, car_make: "Ford", car_model: "Focus", car_year: 2007 },
  ];
  const expectedOutput2 = [
    { id: 2, car_make: "Toyota", car_model: "Camry", car_year: 2010 },
    { id: 1, car_make: "Honda", car_model: "Civic", car_year: 2008 },
    { id: 3, car_make: "Ford", car_model: "Focus", car_year: 2007 },
  ];
  console.log("Test Case 2:", JSON.stringify(arrangeCars(sampleData2)) === JSON.stringify(expectedOutput2));
  
  // Test case 3: Verify that alphabetical sorting is case-insensitive
  const sampleData3 = [
    { id: 1, car_make: "BMW", car_model: "x5", car_year: 2021 },
    { id: 2, car_make: "Audi", car_model: "Q7", car_year: 2022 },
    { id: 3, car_make: "Mercedes", car_model: "a-Class", car_year: 2023 },
  ];
  const expectedOutput3 = [
    { id: 3, car_make: "Mercedes", car_model: "a-Class", car_year: 2023 },
    { id: 2, car_make: "Audi", car_model: "Q7", car_year: 2022 },
    { id: 1, car_make: "BMW", car_model: "x5", car_year: 2021 },
  ];
  console.log("Test Case 3:", JSON.stringify(arrangeCars(sampleData3)) === JSON.stringify(expectedOutput3));
  
  // Test case 4: Sort cars with numbers in the car model names
  const sampleData4 = [
    { id: 1, car_make: "Mazda", car_model: "3", car_year: 2005 },
    { id: 2, car_make: "Audi", car_model: "A4", car_year: 2003 },
    { id: 3, car_make: "BMW", car_model: "320i", car_year: 2007 },
  ];
  const expectedOutput4 = [
    { id: 1, car_make: "Mazda", car_model: "3", car_year: 2005 },
    { id: 3, car_make: "BMW", car_model: "320i", car_year: 2007 },
    { id: 2, car_make: "Audi", car_model: "A4", car_year: 2003 },
  ];

  //console.log(arrangeCars(sampleData4))
  console.log("Test Case 4:", JSON.stringify(arrangeCars(sampleData4)) === JSON.stringify(expectedOutput4));
  
  // Test case 5: Sort cars with special characters in the car model names
  const sampleData5 = [
    { id: 1, car_make: "Toyota", car_model: "Corolla", car_year: 2001 },
    { id: 2, car_make: "Chevrolet", car_model: "#Spark", car_year: 2018 },
    { id: 3, car_make: "Volkswagen", car_model: "!Golf", car_year: 2010 },
  ];
  const expectedOutput5 = [
    { id: 3, car_make: "Volkswagen", car_model: "!Golf", car_year: 2010 },
    { id: 2, car_make: "Chevrolet", car_model: "#Spark", car_year: 2018 },
    { id: 1, car_make: "Toyota", car_model: "Corolla", car_year: 2001 },
  ];
  console.log("Test Case 5:", JSON.stringify(arrangeCars(sampleData5)) === JSON.stringify(expectedOutput5));