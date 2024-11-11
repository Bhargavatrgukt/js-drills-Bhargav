const forEachFunction=require("../forEach");

const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.

let indexObj={};

//test Case--->

function callback(element,index){
  indexObj[index]=element
  console.log(element,index)
}

forEachFunction(items,callback)


