console.log("hello")
let btn=document.querySelector("#btn")
btn.onclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
    console.log("btn was clicked");
    let a=25;
    a++;
    console.log(a);
}

 let div=document.querySelector("div")
// div.onmouseover=(evt)=>{
//     console.log(evt.type)
//     console.log(evt.target)
//     console.log("congrates! you are inside the box now.");
//     let a=50;
//     console.log(`and now your weight is ${a}.`);
// }



//event listiners:-
div.addEventListener("mouseover",()=>{
    console.log("congrates! you are inside the box now.-handler1")
})


const handler2=() =>{
    console.log("congrates! you are inside the box now-handler2")
};

div.addEventListener("mouseover",handler2);


// div.addEventListener("mouseover",()=>{
//     console.log("congrates! you are inside the box now-handler3")
// })

const handler3=()=>{
    console.log("congrates! you are inside the box now-handler3")
};
div.removeEventListener("mouseover",handler3);

div.addEventListener("mouseover",(evt)=>{
    // console.log(evt)
    // console.log(evt.type);
    console.log("congrates! you are inside the box now-handler4")
})

div.removeEventListener("mouseover",handler2);