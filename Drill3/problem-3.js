const carData=require("./problem-dataset");

 // ==== Problem #3 ====
  // The marketing team wants the car models listed alphabetically on the website.
  // Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
  

  const arrangeCars=data=>{
    const order= data.sort((a,b)=>a.car_model.localeCompare(b.car_model));
    return order
  }


  module.exports={
    carData,arrangeCars
  };