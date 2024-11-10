const {users,usersPlayedGames}=require('../problem1');


//testCase1 --->Dataset
console.log(usersPlayedGames(users))


//testCase2  ---> 
let data1={
    "Wanda": {
        age: 24,
        desgination: "Intern - Javascript",
        interests: ["Piano"],
        qualification: "Bachaelor",
        nationality: "Germany"
    },
    "Rob": {
        age: 34,
        desgination: "Senior Javascript Developer",
        interests: ["Walking his dog", "Cooking"],
        qualification: "Masters",
        nationality: "USA"
    }
};
console.log(usersPlayedGames(data1))


//testCase3 --->

let data2={
    "Pike": {
        age: 23,
        desgination: "Python Developer",
        interests: [],
        qualification: "Bachaelor's Degree",
        nationality: "Germany"
    }
};

console.log(usersPlayedGames(data2))


//testCases4 --->

let data3={
    "Tom": {
        age: 29,
        desgination: "Frontend Developer",
        interests: ["Reading Books", "Playing Video Games", "Cycling"],
        qualification: "Bachelor's",
        nationality: "USA"
    }
};

console.log(usersPlayedGames(data3));

