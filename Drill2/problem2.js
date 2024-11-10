const usersData=require('./problem-dataset')

//Q2 Find all users staying in Germany.

const germanNationality=function(data){
    let result=[]
    for(let person in data){
        if(data[person]["nationality"].toLowerCase()==="germany"){
               result.push(person)
        }
    }
    return result
}


module.exports={
    usersData,
    germanNationality
}