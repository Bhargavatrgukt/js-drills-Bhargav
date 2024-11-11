const flatten=require("../flatten");

const nestedArray = [1, [2], [[3]], [[[4]]]];

console.log(flatten(nestedArray)) //basic testCase


const testCases = [
    {
        input: [1, [2], [[3]], [[[4]]]],
        expected: [1, 2, 3, 4],
        description: 'flattens a deeply nested array'
    },
    {
        input: [1, 2, 3],
        expected: [1, 2, 3],
        description: 'returns the same array if it is already flat'
    },
    {
        input: [1, [2, [3, [4, [5]]]]],
        expected: [1, 2, 3, 4, 5],
        description: 'flattens an array nested to multiple depths'
    },
    {
        input: [[1], [2], [3, [4]]],
        expected: [1, 2, 3, 4],
        description: 'flattens an array with different levels of nesting'
    },
    {
        input: [],
        expected: [],
        description: 'returns an empty array if input is empty'
    },
    {
        input: [[[]], [[[[[]]]]]],
        expected: [],
        description: 'handles empty nested arrays correctly'
    },
    {
        input: [1, [2, [3, [4]], 5], 6],
        expected: [1, 2, 3, 4, 5, 6],
        description: 'flattens an array with some elements at different levels'
    },
    {
        input: [[1, 2, 3], [4, [5, [6, 7]]], 8],
        expected: [1, 2, 3, 4, 5, 6, 7, 8],
        description: 'flattens an array with mixed levels and multiple elements'
    }
];

// Run tests
testCases.forEach(({ input, expected, description }, index) => {
    const result = flatten(input);
    console.log(`Test Case ${index + 1}: ${description}`);
    console.log(`Input: ${JSON.stringify(input)}`);
    console.log(`Expected Output: ${JSON.stringify(expected)}`);
    console.log(`Actual Output: ${JSON.stringify(result)}`);
    console.log(result.toString() === expected.toString() ? '✅ Test Passed' : '❌ Test Failed');
    console.log('------------------------------------------------------\n');
});