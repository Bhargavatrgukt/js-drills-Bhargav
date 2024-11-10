const usersData=require('./problem-dataset');

//Q3 Find all users with masters Degree.


const masterDegreeHolders=function(data){
    let result=[]
    
    for(let person in data){
        if(typeof data[person]["qualification"] === "string" && 
            data[person]["qualification"].toLowerCase().startsWith("masters")){
            result.push(person)
        }
    }

    return result
}

module.exports={
    usersData,
    masterDegreeHolders
}