console.log("hello")
window.console.log("hello")
console.log(window)
console.log(window.document)
console.dir(window.document)

//selecting with id
let heading=document.getElementById("heading");
console.dir(heading);


//selecting with class
let class1=document.getElementsByClassName("class1");
console.dir(class1);


//selecting with tag
let para=document.getElementsByTagName("p")
console.dir(para);


//query selector
//1.queryselector
let element=document.querySelector("p");
console.dir(element);

//2.queryselectorall
let element1=document.querySelectorAll("p");
console.dir(element1);

let element3=document.querySelectorAll(".class1");
console.dir(element3);

console.dir(document.body.firstChild);




//innertext
let div=document.querySelector("div")
console.dir(div);

let heading1=document.querySelector("h1")
console.dir(heading1);

