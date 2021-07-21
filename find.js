
const filterUsers=(usersArr,func)=>{
    const newArr=[]

    for(let i=0;i<usersArr.length;i++){
        
        const getResult=func(usersArr[i]);

        if(getResult){
            newArr.push(usersArr[i])
        }

       
    }

    return newArr
}


callback=(usersArr)=>{
    if(usersArr.age <40){
        return true
    }

    else{
        return false;
    }
}




const users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true }
  ];


  const getResult=filterUsers(users,callback)

  console.log("get result");

  console.log(getResult)