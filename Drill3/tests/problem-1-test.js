const { problemData,cardData}=require('../problem-1');


//testCase1--->

console.log(cardData(problemData))


//testCase2-->

try {
    // Edge case: No car with id 33 in the data
    const mockData2 = [
        { id: 34, car_make: 'Ford', car_model: 'Mustang', car_year: 2015 },
        { id: 35, car_make: 'Toyota', car_model: 'Camry', car_year: 2020 },
    ];
    const result2 = cardData(mockData2);
    console.log(result2 === 'Car with ID 33 not found' ? 'Test 2 Passed' : 'Test 2 Failed');
} catch (error) {
    console.error('Test 2 Failed:', error.message);
}

try {
    // Edge case: Empty array
    const mockData3 = [];
    const result3 = cardData(mockData3);
    console.log(result3 === 'Car with ID 33 not found' ? 'Test 3 Passed' : 'Test 3 Failed');
} catch (error) {
    console.error('Test 3 Failed:', error.message);
}

try {
    // Edge case: Multiple cars with id 33, should pick the first one
    const mockData4 = [
        { id: 33, car_make: 'Jeep', car_model: 'Wrangler', car_year: 2011 },
        { id: 33, car_make: 'Chevrolet', car_model: 'Camaro', car_year: 2012 },
    ];
    const result4 = cardData(mockData4);
    console.log(result4 === 'Car 33 is a 2011 Jeep Wrangler' ? 'Test 4 Passed' : 'Test 4 Failed');
} catch (error) {
    console.error('Test 4 Failed:', error.message);
}