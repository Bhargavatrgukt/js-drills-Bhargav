const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

// Flattens a nested array (the nesting can be to any depth).
// Hint: You can solve this using recursion.
// Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

function flatten(elements) {
    let result=[]
    for (let element of elements){
        if(Array.isArray(element)){
            result=result.concat(flatten(element))
        }else{
            result.push(element)
        }
    }
    return result
  
}

module.exports=flatten;