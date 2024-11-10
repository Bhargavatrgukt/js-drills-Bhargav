const { usersData,germanNationality}=require('../problem2');

//testCase1 ---->


console.log(germanNationality(usersData))


//testCase2 --->
console.log(germanNationality({}))

//testCase3--->
let data3=
{
    "Wanda": {
        age: 24,
        designation: "Intern - Javascript",
        interests: ["Piano"],
        qualification: "Bachelor",
        nationality: "gErmAnY"
    },
    "Rob": {
        age: 34,
        designation: "Senior Javascript Developer",
        interests: ["Walking his dog", "Cooking"],
        qualification: "Masters",
        nationality: "USA"
    }
};

console.log(germanNationality(data3))

//testCase4 --->

let data4=
{
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
        qualification: "Bachelor",
        nationality: "UK"
    }
};

console.log(germanNationality(data4)); 