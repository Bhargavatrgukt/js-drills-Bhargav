const {
    usersData,
    masterDegreeHolders
} =require('../problem3')


//testCase1 --->

console.log(masterDegreeHolders(usersData))


//testCase2 -->
let data2={
    "Ron": {
        age: 19,
        designation: "Intern - Golang",
        interests: ["Video Games"],
        qualification: "Bachelor",
        nationality: "UK"
    },
    "Wanda": {
        age: 24,
        designation: "Intern - Javascript",
        interests: ["Piano"],
        qualification: "Bachelor",
        nationality: "Germany"
    }
};
console.log(masterDegreeHolders(data2));

//testCase3 --->
let data3={
    "John": {
        age: 24,
        designation: "Senior Golang Developer",
        interests: ["Chess", "Reading Comics"],
        qualification: "Masters",
        nationality: "Greenland"
    },
    "Ron": {
        age: 19,
        designation: "Intern - Golang",
        interests: ["Video Games"],
        nationality: "UK" // No qualification field
    }
}
console.log(masterDegreeHolders(data3))

//testCase4 -->

console.log(masterDegreeHolders({}))