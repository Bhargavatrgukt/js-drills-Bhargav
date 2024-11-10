const users=require('./problem-dataset');

//Q1 Find all users who are interested in playing video games.

const usersPlayedGames=function(data){
    let result=[]
    for(let user in data){
        if(data[user]['interests']&&data[user]['interests'].some(interest=>interest.toLowerCase().includes('video games'))){
           result.push(user)
        }
    }

    return result
}


module.exports={
    users,
    usersPlayedGames
}


