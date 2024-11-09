const personsData=require("./problem-dataset")

//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.


function retriveHobbies(persons){
    if (!Array.isArray(persons)) {
        throw new Error("The argument must be an array of objects");
     }
    
     let result={}
    
     for (let person of persons){
        if(typeof(person)!== "object" || person==="null"){
            throw  new Error("Each element in the array must be an object");
        }


        if(person['age']===30){
            if(!person['hobbies']){
                throw new Error ('No hobbies for this person');
            }
            else{
                 person.name?result[person.name]=person["hobbies"]:result["anonmyous"]=person['hobbies'];
            }
        }
     }

     return result
}




module.exports={retriveHobbies,
    personsData
}