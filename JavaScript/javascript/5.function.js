// function myfile(){
//     let information={
//     name:"beauty",
//     stu_class:12,
//     age:20,
//     address:"wazirganj"
//     }
//     for(let key in information){
//     console.log("key",key);
//     }
// }
// myfile();

// function myfunction(msg){
//     //parameters -> input
//     console.log(msg);
// }
// myfunction("i love js"); //argument

//function -> 2numbers,sum
// function sum(){
//     let a = prompt("enter the first number");
//     a=parseInt(a);
//     let b=prompt("enter the second number");
//     b=parseInt(b)
//     let sum=a+b;
//      console.log(`sum of ${a} and ${b} is: ${sum}`)   
//     }
//     let i=1;
//     while(i<=5){
//         console.log(sum());
//         i++;
//     }
    
// function sum(x,y){
//     console.log(x+y);
// }

// function sum(x,y){
//     s=x+y;
//     return s;
// }
// let val_sum=sum(3,4);
// console.log(val_sum);

// function sum(x,y){
//     s=x+y;
//     return s;
// }
// console.log(sum);


// function sum(x,y){
//     s=x+y;
//     console.log("before return");
//     return s;
//     console.log("after return");//never execute
// }
// let val_sum=sum(3,4);
// console.log(val_sum);

// //sum function
// function sum(a,b){
//     return a+b;
// }

// //function multiplication
// function multiplication(a,b){
//     return a*b;
// }

//compact version of function ->  Arrow function
// const sum=(a,b)=>{
// return a+b;
// }

// const multiplication=(a,b)=>{
//     return a*b;
// }

// const printhello = ()=> console.log("hello");



//ptaticequestion
//1.
// function countVowels(str){
//     let count=0;
//     for(const char of str){
//         if(char==="a"||
//            char==="e"||
//            char==="i"||
//            char==="o"||
//            char==="u")
//            {
//             count++;
//         }
//     }
//  console.log(count);
// }

// const countvowels=(str)=>{
//     let count=0;
//     for(const char of str){
//         if(char==="a"||
//                        char==="e"||
//                        char==="i"||
//                        char==="o"||
//                        char==="u")
//                        {
//                         count++;
//                     }
//     }
//     return count;
// }

//foreach
// let arr=[1,2,3,4,5];
// arr.forEach(function printval(val){//value at each idx
//     console.log(val);
// });

// let arr=[2,3,4,5,6];
// arr.forEach(function square(val){
//     console.log(val*val);
// });

// let arr=[2,3,5,6,7];
// arr.forEach((arr)=>{
//     console.log(arr*arr);
// });

//or
// let arr=[3,6,89,12,20,];
// let square=(arr)=>{
//     console.log(arr*arr);
// };
// arr.forEach(square);

//map
// let num=[23,34,4,45,10];
// let newnum=num.map((val)=>{
//     return val*2;
// });
// console.log(newnum);

//filter
// let num=[2,3,4,5,6,7,8,9,10];
// let newarr=num.filter((val)=>{
//     return val%3===0;
// });
// console.log(newarr);


//reduce
// let arr=[1,2,3,4,5];
// let newarr=arr.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log(newarr);

let num=[4,5,1];
let newarr=num.reduce((prev,curr)=>{
    return prev<curr?prev:curr;
});
console.log(newarr);