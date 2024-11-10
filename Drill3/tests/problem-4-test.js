const {carData,carYears}=require("../problem-4");


//testCase1--->

console.log(carYears(carData));

// Test case 2: Check with cars from different years
const sampleData2 = [
    { id: 1, car_make: "Honda", car_model: "Civic", car_year: 2008 },
    { id: 2, car_make: "Toyota", car_model: "Camry", car_year: 2010 },
    { id: 3, car_make: "Ford", car_model: "Focus", car_year: 2007 },
  ];
  const expectedOutput2 = [2008, 2010, 2007];
  console.log("Test Case 2:", JSON.stringify(carYears(sampleData2)) === JSON.stringify(expectedOutput2));
  
  // Test case 3: Check with cars from a single year repeated
  const sampleData3 = [
    { id: 1, car_make: "BMW", car_model: "x5", car_year: 2021 },
    { id: 2, car_make: "Audi", car_model: "Q7", car_year: 2021 },
    { id: 3, car_make: "Mercedes", car_model: "GLC", car_year: 2021 },
  ];
  const expectedOutput3 = [2021, 2021, 2021];
  console.log("Test Case 3:", JSON.stringify(carYears(sampleData3)) === JSON.stringify(expectedOutput3));
  
  // Test case 4: Edge case with an empty array
  const sampleData4 = [];
  const expectedOutput4 = [];
  console.log("Test Case 4:", JSON.stringify(carYears(sampleData4)) === JSON.stringify(expectedOutput4));
  
  // Test case 5: Test with mixed year formats (if applicable in real-world data)
  const sampleData5 = [
    { id: 1, car_make: "Mazda", car_model: "Mazda3", car_year: 2015 },
    { id: 2, car_make: "Toyota", car_model: "Corolla", car_year: "2016" }, // String format year
    { id: 3, car_make: "Ford", car_model: "Fiesta", car_year: 2017 },
  ];
  const expectedOutput5 = [2015, "2016", 2017];
  console.log("Test Case 5:", JSON.stringify(carYears(sampleData5)) === JSON.stringify(expectedOutput5));