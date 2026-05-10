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


function step1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("step1");
            resolve("Step 1");
        }, 1000);
    });
}

function step2(prev) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("step2");
            resolve(prev + " -> Step 2");
        }, 1000);
    });
}

function step3(prev) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("step3");
            resolve(prev + " -> Step 3");
        }, 1000);
    });
}

// Chaining
// step1()
// .then((result) => {
//     console.log(result);
//     return step2(result);
// })
// .then((result) => {
//     console.log(result);
//     return step3(result);
// })
// .then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// });

//problem with chaining: too many then()


//convert chaining into async/await
async function run(){
    const step=await step1();
    console.log(step);
    const stepone=await step2(step);
    console.log(stepone);
    const steptwo=await step3(stepone);
    console.log(steptwo);
}

run();

//error-handling:
//chaining erro:
// .catch((err)=>{
//     console.log(err);
// })


//async/await errror:
async function run(){
    try{
        const result=await step1();
        console.log(result);
    }catch (error){
        console.log(error);
    }
}



//quest 2:
const stud=require(".../models/studentmondel");
async function getstudent(req,res){
    try{
        const student=await stud.findById(req.params.id);
        res.json(student);
    }catch(error){
        res.status(500).json({
            message: error.message
        });
    }
}