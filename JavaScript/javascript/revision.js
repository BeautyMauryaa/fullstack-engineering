// let mode="light-mode";
// let color;
// if(mode=='dark-mode'){
//     console.log(color=="black");
// }else{
//     console.log(color=="white");
// }

// let mode='blue';
// let color;
// if(mode==='red'){
//     color:"white";
// }
// else{
//     color:"black";
// }

// console.log("hello")

// let n=3;
// if(n%2==0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

// let age=19;
// let result=age>18?"adult":"not adult";
// console.log(result);

// let num;
// prompt("enter a number: ");
// if(num%2==0){
//     console.log("even")
// }else{
//     console.log("odd");
// }

// let grades=prompt("enter your grades:");
// if(grades>=80&&grades<=100){
//     console.log("A")
// }
// else if(grades>=70&&grades<=79){
//     console.log("B")
// }
// else if(grades>=60&&grades<=69){
//     console.log("C")
// }
// else if(grades>=50&&grades<=59){
//     console.log("D")
// }else{
//     console.log("fail");
// }

// let employee={
//     name:"beauty",
//     age:23,
//     field:"enginner",
//     salarly:100000
// }
// for(let key in employee){
//     console.log("key=",key)
// }

// for(let a=0;a<=100;a++){
//     if(a%2==0){
//         console.log(a);
//     }else{
//         console.log();
//     }
// }

// let gamenumber=24;
// let usernum=prompt("Guess the gamenumber:");
// while(usernum!=gamenumber){
//     usernum=prompt("You Guess the Wrong number ! try again.")
// }console.log("cong! you have guess the wrong number, you Win this game");

// let str="beauty";
// console.log(str);
// console.log(typeof(str));
// console.log(str.length)
// console.log(str[3])


//template literals
// let product={
//     name:'agani',
//     price:20,
//     color:"red"
// }
// console.log(`the color of the ${product.name} pen is ${product.color}.`)

// console.log(`the addition of 1+2+3+4+5 is : ${1+2+3+4+5}`)


//escape chracter
// console.log("hii!\nMy name is beauty")
//console.log("hello\tthere!")

// let string="beauty";
// console.log(string)
// console.log(string.toUpperCase());
// console.log(string.toLocaleLowerCase())
 
// let str="i love you";
// console.log(str.charAt(2))

// let fullname=prompt("enter your full name without any space:");
// let username="@"+fullname+fullname.length;
// console.log(username);

// let student=prompt("enter the array element:")
// let size=5;
// for(let i=0;i<5;i++){
//     console.log(prompt(`enter the array elemntat${i+1} position`))
// }
// console.log(student);

//let marks=[22,34,56,78,90]
//console.log(marks)


//looping
// let marks=[22,34,56,78,90]
// let sum=0;
// for(let val of marks){
//     sum=sum+val;
// }
// console.log(sum)
// let avg=sum/marks.length;
// console.log(avg)


// let marks=[22,34,56,78,90]
// let i=0
// for(let val of marks){
//     let offer=val/10;
//     marks[i]=marks[i]-offer;
//     console.log(marks[i])
//     i++;
// }

// let marks=[22,34,56,78,90]
// console.log(marks);
// let added=marks.push(100)
// console.log(marks)
// let deletemarks=marks.pop()
// console.log(marks)

// console.log(marks.toString())

//concat

let marks=[22,34,56,78,90];
let marks1=[20,32,53,74,91];
let concat=marks.concat(marks1);
console.log(concat)



