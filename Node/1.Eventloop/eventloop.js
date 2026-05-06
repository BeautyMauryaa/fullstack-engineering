//node js is single threaded but it still handle many request at once how?--by event look(async)

//sync flow:
// console.log("1.start");
// console.log("2.middle")
// console.log("3.end");

//async:
//1.settimeout.js
// console.log("1.first");

// setTimeout(()=>{
//     console.log("2.setTimeout middle");
// },0);

// console.log("3-end");


//3.promises.js
// console.log("1-start");

// setTimeout(()=>{
//     console.log("2-settimeout middle");
// },0);

// Promise.resolve().then(()=>{//(priority)promise will run first then setTimeout
//     console.log("3-promise");
// });

// console.log("4- end");



//event loop execute the code in priority order:
//1.call stack(higher priority)
//2. microtask queue(middle priority)-promises
//3. macrotask queue(lower priority)-setTimeout,setInterval


//4.Async-await -its like wait in background it doesn't intrupt the next execution its only wait in background to get the data when it get data then it will execute

console.log("1.start")//step1

async function fetchData(){
    console.log("2.inside async function");//step3
    const result=await new Promise((resolve)=>{//step4 promises run in background
        setTimeout(()=>resolve("Data recevied"),2000);
    });

    console.log("3.After await: ",result);
}

fetchData();//step2
console.log("4.After function call");//step4