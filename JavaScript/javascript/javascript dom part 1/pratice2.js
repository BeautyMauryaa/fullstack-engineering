let div=document.querySelectorAll(".box")
let idx=0;
for(div of div){
    div.innerText=`new unique value is ${idx}`;
    idx++;
}
let divs=document.querySelectorAll(".box");
console.log(divs)