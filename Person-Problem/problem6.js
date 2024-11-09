 const personsData=require('./problem-dataset');


  //    Create a function to retrieve and display the first hobby of each individual in the dataset.


  function getFirstHobbies(data) {
    return data.map(person => person.hobbies && person.hobbies[0] ? person.hobbies[0] : null);
  }
  




 module.exports={
    personsData,
    getFirstHobbies
 }