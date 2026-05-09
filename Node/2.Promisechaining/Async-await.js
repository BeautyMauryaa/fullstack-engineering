//without async/await-call back hell 
// setTimeout doesn't block the execution

console.log("start");
setTimeout(()=>{
    console.log("pizza ready");
},3000);

console.log("doing other work till pizzaa doesn't ready");



//problem without async - other mini program have to wait till the current program doesn't finised;
// prevent line by line execution
 