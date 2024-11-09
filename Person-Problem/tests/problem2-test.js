const {personsData,retriveHobbies}=require('../problem2');


//testCase1 ---> Original Dataset

console.log(retriveHobbies(personsData))


//testCase2 ---> 

const test2 = [];
try {
  console.log(retriveHobbies(test2)); // []
} catch (error) {
  console.log("Error in Test Case 2:", error.message);
}



//test3 --->

const testObj={}
try {
  console.log(retriveHobbies(testObj)); // []
} catch (error) {
  console.log("Error in Test Case 3", error.message);
}


//test4 --->

const dummyData=[
    { id: 1, name: 'Alice', age: 30, hobbies: [] },
    { id: 2, name: 'Bob', age: 30 }
  ];

  try{
    console.log(retriveHobbies(dummyData))
  }catch(error){
    console.log("Error in Test Case 4:", error.message);
  }