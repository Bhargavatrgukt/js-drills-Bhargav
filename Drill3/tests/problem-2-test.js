const { problemData,lastCar}=require('../problem-2');

//testCase1--->

console.log(lastCar(problemData));


try {
    // Normal test case: Last car exists in the data
    const mockData1 = [
        { id: 1, car_make: 'Toyota', car_model: 'Corolla', car_year: 2005 },
        { id: 2, car_make: 'Honda', car_model: 'Civic', car_year: 2010 },
        { id: 3, car_make: 'Ford', car_model: 'Mustang', car_year: 2015 },
    ];
    const result1 = lastCar(mockData1);
    console.log(result1 === 'Last car is a Ford Mustang' ? 'Test 1 Passed' : 'Test 1 Failed');
} catch (error) {
    console.error('Test 1 Failed:', error.message);
}

try {
    // Edge case: Only one car in the data
    const mockData2 = [
        { id: 1, car_make: 'BMW', car_model: 'X5', car_year: 2022 },
    ];
    const result2 = lastCar(mockData2);
    console.log(result2 === 'Last car is a BMW X5' ? 'Test 2 Passed' : 'Test 2 Failed');
} catch (error) {
    console.error('Test 2 Failed:', error.message);
}

try {
    // Edge case: Empty array (no cars in the inventory)
    const mockData3 = [];
    const result3 = lastCar(mockData3);
    console.log(result3 === 'No cars in inventory' ? 'Test 3 Passed' : 'Test 3 Failed');
} catch (error) {
    console.error('Test 3 Failed:', error.message);
}

try {
    // Edge case: Last car with missing make or model
    const mockData4 = [
        { id: 1, car_make: 'Tesla', car_model: 'Model S', car_year: 2020 },
        { id: 2, car_make: null, car_model: 'Unknown', car_year: 2021 },
    ];
    const result4 = lastCar(mockData4);
    console.log(result4 === 'Last car is a Unknown' ? 'Test 4 Passed' : 'Test 4 Failed');
} catch (error) {
    console.error('Test 4 Failed:', error.message);
}