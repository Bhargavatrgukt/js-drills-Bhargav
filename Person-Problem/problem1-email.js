const arrayOfObjects=require('./problem-dataset')


//write a function that accesses and returns the email addresses of all individuals.
  
function emailAddressOfPerson(persons) {
   // Check if the input is an array
   if (!Array.isArray(persons)) {
      throw new TypeError("The argument must be an array of objects");
   }

   let email_array = [];

   // Loop through the array to extract emails
   for (let person of persons) {
      // Check if each element in the array is an object
      if (typeof person !== 'object' || person === null) {
         throw new TypeError("Each element in the array must be an object");
      }

      // Check if 'email' property exists in the object
      if (person.hasOwnProperty('email')) {
         email_array.push(person['email']);
      } else {
         throw new Error("One or more objects are missing the 'email' property");
      }
   }

   return email_array;
}





//solution 2 using map

// const emails=arrayOfObjects.map(pers=>console.log(pers.email))


module.exports=emailAddressOfPerson;

