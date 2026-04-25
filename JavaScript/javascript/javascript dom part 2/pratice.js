let newbtn=document.createElement("button");
newbtn.innerText="click me!";
console.log(newbtn);
newbtn.style.color="white";
newbtn.style.backgroundColor="red";
document.querySelector("body").prepend(newbtn);

//question 2
 let para=document.querySelector("p");
 let attr=para.getAttribute("class");
// let changename=para.setAttribute("class","newclass")
