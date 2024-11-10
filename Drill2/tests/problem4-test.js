const {usersData,
    groupUsersByLanguage}=require("../problem4")

//Group users based on their Programming language mentioned in their designation.

//testCase-->1


console.log(groupUsersByLanguage(usersData))



// Test Case 2: Dataset with multiple languages in the designation
const data2 = {
    "Alice": { desgination: "Javascript and Python Developer" },
    "Bob": { desgination: "Senior Golang Developer" },
    "Charlie": { desgination: "Junior Javascript Developer" },
};
console.log("Test Case 2:", groupUsersByLanguage(data2));
// Expected Output:
// {
//     Javascript: ["Alice", "Charlie"],
//     Golang: ["Bob"],
//     Python: ["Alice"]
// }

// Test Case 3: Dataset with no matching programming languages in the designation
const data3 = {
    "Dave": { desgination: "Project Manager" },
    "Eve": { desgination: "Graphic Designer" },
};
console.log("Test Case 3:", groupUsersByLanguage(data3));
// Expected Output:
// {
//     Other: ["Dave", "Eve"]
// }

// Edge Case 1: Empty dataset
const data4 = {};
console.log("Edge Case 1:", groupUsersByLanguage(data4));
// Expected Output: {}

// Edge Case 2: Dataset with missing 'desgination' field
const data5 = {
    "Frank": { age: 30 },
    "Grace": { desgination: "Python Developer" },
};
console.log("Edge Case 2:", groupUsersByLanguage(data5));
// Expected Output:
// {
//     Python: ["Grace"],
//     Other: ["Frank"]
// }

// Edge Case 3: Dataset with different casing in the designation
const data6 = {
    "Hank": { desgination: "SENIOR JAVASCRIPT DEVELOPER" },
    "Ivy": { desgination: "intern - python" },
};
console.log("Edge Case 3:", groupUsersByLanguage(data6));
// Expected Output:
// {
//     Javascript: ["Hank"],
//     Python: ["Ivy"]
// }