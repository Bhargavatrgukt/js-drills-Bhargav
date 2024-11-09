const personsData=require('./problem-dataset')


 //    Write a function that accesses and prints the names and email addresses of individuals aged 25.

 const getNamesAndEmailsByAge=function(data){
   let result=[] 
   try{
      for(let person of data){
        if(person.age===25){
          result.push({"name":person.name,"person":person.email});
        }
      }
   }catch(err){
      return err.message
   }

   return result;
 }

 module.exports={
    personsData,
    getNamesAndEmailsByAge
 }