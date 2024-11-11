// Do NOT use .filter, to complete this function.
// Similar to `find` but you will return an array of all elements that passed the truth test
// Return an empty array if no elements pass the truth test


function filter(elements, cb) {
    let resut=[]
    for(let i=0;i<elements.length;i++){
        if(cb(elements[i])){
            resut.push(elements[i])
        }
    }

    return resut;
  }

module.exports=filter;