const findMethod=require("../find");

const items = [1, 2, 3, 4, 5, 5]; 

function callback(element){
    if (element===3){
        return true 
    }
}



console.log(findMethod(items,callback));