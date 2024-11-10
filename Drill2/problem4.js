const usersData=require("./problem-dataset");

//Group users based on their Programming language mentioned in their designation.

const groupUsersByLanguage=function(users){
    return Object.keys(users).reduce((acc,user)=>{
      const designation=users[user]["desgination"]?users[user]["desgination"].toLowerCase():"";
      const language=designation.includes('python')?"Python":
                     designation.includes('javascript')?"Javascript":
                     designation.includes("golang") ? "Golang" :
                     "Other"
        if(!acc[language]){
            acc[language]=[]
        }
        acc[language].push(user);

        return acc;
        },{})
}

module.exports={
    usersData,
    groupUsersByLanguage
}