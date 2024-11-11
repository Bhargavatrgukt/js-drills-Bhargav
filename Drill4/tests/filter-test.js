const filterMethod=require("../filterMethod");

const items = [1, 2, 3, 4, 5, 5]; 

function callback(element){
    if (element%2===0){
        return true 
    }
}



console.log(filterMethod(items,callback));