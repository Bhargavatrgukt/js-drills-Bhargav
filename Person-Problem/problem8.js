const personsData=require('./problem-dataset'); 
 
 //    Implement a loop to access and log the city and country of each individual in the dataset.

 const  logCityAndCountry=function(data){
    if (!Array.isArray(data)) {
        throw new Error("Input data must be an array");
      }

      let result=[]

      for (let person of data) {
         result.push({"City":person.city, "Country": person.country});
      } 

      return result
 }

 module.exports={
    personsData,
    logCityAndCountry
 }