const personsData=require('./problem-dataset');


 //    Implement a loop to access and print the ages of all individuals in the dataset.

 function getAges(data){
   
    if(!Array.isArray(data)){
        throw new Error("argument should be arrays")
    }
    let result=[]
    for(let person of data){
        result.push(person['age'])
    }

    return result;

 }


 module.exports={
    personsData,getAges
 }