const personsData=require('./problem-dataset')


// Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.


function accessIndexPosition(personsData){
  if(!Array.isArray(personsData)){
    throw new Error("Argument must be an array")
  }
 
  try {
    let index3=personsData[3]
    return personsData[3].name+"--"+personsData[3].city
  } catch (error) {
    return error.message
  }
  
}

accessIndexPosition(personsData)
module.exports={
    personsData,accessIndexPosition
}