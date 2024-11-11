 // Do NOT use .reduce to complete this function.
// How reduce works: A reduce function combines all elements into a single value going from left to right.
// Elements will be passed one by one into `cb` along with the `startingValue`.
// `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
// `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.



function reduce(elements, cb, startingValue) {
   let accumulator= startingValue !== undefined ? startingValue : elements[0];
   let startIndex = startingValue !== undefined ? 0 : 1; // Start from index 1 if no startingValue is given

     for(let i=startIndex;i<elements.length;i++){
        accumulator=cb(accumulator,elements[i])
     };
     return accumulator;
  }

  module.exports=reduce;