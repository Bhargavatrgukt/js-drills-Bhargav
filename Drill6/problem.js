function counterFactory() {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
    let counter=0
    let obj= {increment:function(){
     return counter+=1;
    },decrement:function(){
       return  counter-=1;
    }}

    return obj
  

}

// const c=counterFactory()



// function magicFunction(counter){
//     return `Favourite and classic flim,${counter}`;
// }
  
  function limitFunctionCallCount(cb, n) {
    // Should return a function that invokes `cb`.
    // The returned function should only allow `cb` to be invoked `n` times.
    // Returning null is acceptable if cb can't be returned
    let counter=0
    return function(){
        if(counter<n){
            counter+=1
            return cb(counter)
        }else{
            return "Exceded the number of calls"
        }
    }
  }

//   const limitedCallsForInstance=limitFunctionCallCount(magicFunction,2)
//   console.log(limitedCallsForInstance())
//   console.log(limitedCallsForInstance())
//   console.log(limitedCallsForInstance())

  
  function cacheFunction(cb) {
    // Should return a function that invokes `cb`.
    // A cache (object) should be kept in closure scope.
    // The cache should keep track of all arguments have been used to invoke this function.
    // If the returned function is invoked with arguments that it has already seen
    // then it should return the cached result and not invoke `cb` again.
    // `cb` should only ever be invoked once for a given set of arguments.
    const cache = {};  // 1. Initialize cache

    return function(args) {  // 2. Inner function to handle arguments
        const key = JSON.stringify(args);  // 3. Create a unique key

        if (cache.hasOwnProperty(key)) { 
            console.log(cache[key],"is existed in memory so here it is the answer")                              // 4. Check if result exists in cache
            return cache[key];            // 5. Return cached result if available
        }

        const result = cb(args);   // 6. Otherwise, invoke cb with arguments
        cache[key] = result;          // 7. Store result in cache
        return result;                // 8. Return result
    };

  }

//   function multiplyByTwo(n) {
//     return n * 2;
// }

// const cachedMultiply = cacheFunction(multiplyByTwo);

// console.log(cachedMultiply(2));  // Calls cb, returns 4
// console.log(cachedMultiply(2));  // Returns cached result: 4
// console.log(cachedMultiply(3));  // Calls cb, returns 6
// console.log(cachedMultiply(3));  // Returns cached result: 6

module.exports={counterFactory,limitFunctionCallCount,cacheFunction};


