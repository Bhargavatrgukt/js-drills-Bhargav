const personsData=require('./problem-dataset');


  //    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

 function studentNames(persons) {
    if (!Array.isArray(persons)) {
        throw new Error("The argument must be an array of objects");
    }

    let result = [];
    for (let person of persons) {
        try {
            // Check if each person is an object and not null
            if (typeof person !== "object" || person === null) {
                throw new Error("Each element in the array must be an object");
            }

            // If the person is a student, check if the 'name' property exists
            if (person['isStudent']) {
                if (person['name']) {
                    result.push(person['name']);
                } else {
                    throw new Error("Name is not in the data while they are a student");
                }
            }
        } catch (error) {
            result.push(error.message);
        }
    }
    
    return result;
}


module.exports={
    studentNames,
    personsData
}





