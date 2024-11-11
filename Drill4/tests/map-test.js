const mapFunction=require("../map");

function callBack(element){
    return element*2  //just for test purpose
}

const items = [1, 2, 3, 4, 5, 5]; 

console.log(mapFunction(items,callBack))