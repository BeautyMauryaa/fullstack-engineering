//promise: pending,fulfilled,rejected 


const promise= new Promise((resolve,reject)=>{
 let workdone=true;
 if(workdone){
    console.log("work completed");
 }else{
    console.log("work failed");
 }
});


//using that promise which we have created:
promise
.then((result)=>{
    console.log(result);
})
.then((error)=>{
    console.log(error);
})


// resolved-succes
// reject-failed(error)


//quest:
function orderPizza(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("pizza done");
        },3000);
    });
}

orderPizza()
.then((result)=>{
    console.log(result);
})


//promise chaining:  
//suppose: login,fetch profile,fetch post

function loginuser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("user login");
        },1000);
    });
}


function getprofile(message){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(message+ "-> profile fetched");
        },1000);
    });
}


function getpost(message){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(message + "-> posts fetched");
        },1000);
    });
}

//chaning:
loginuser()
.then((result)=>{
    console.log(result);
    return getprofile(result);
})
.then((result)=>{
    console.log(result);
    return getpost(result);
})
.then((result)=>{
    console.log(result);
})
//"User Logged In -> Profile Fetched -> Posts Fetched"