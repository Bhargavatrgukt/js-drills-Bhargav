const {personsData,studentNames}=require('../problem3');



//testCase1 ---->
try{
console.log(studentNames(personsData))
}catch(err){
    console.log(err.message)
}

//testCase2 ---->

let dummyData = [
    { name: "Alice", isStudent: true },
    { isStudent: true }, // Missing 'name' field
    { name: "Charlie", isStudent: true }
];

console.log(studentNames(dummyData));
// Expected Output: ["Alice", "Name is not in the data while they are a student", "Charlie"]


//testCase3 ---->

dummyData = [];
console.log(studentNames(dummyData));

