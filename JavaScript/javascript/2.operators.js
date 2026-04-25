//1.Arithmetic operators
let a=6;
let b=3;
console.log("a=",a,"& b=",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);


//modulus operator:
console.log("a%b:",a%b);


//exponentiation:
console.log("a**b:",a**b);//6^3=216


//unary operatrs:
a++;
console.log(a);//6=7
b--;
console.log(b);//3=2


//Asignment operator:
console.log(a+=b);//7+2=9
let c=3;
console.log(b-=c);//2-3=-1
let d=4;
let e=4;
console.log(d*=e);//4*4=16
let f=5;
f*4;
console.log("f=",f);

//comparison operator:
let i=4;
let h=6;
console.log("i==h",i==h);

let j=5;//number
let k="5";//string -> number
console.log("j==k:",j==k);//true

//logical operator:
let l=4;
let m=4;
l==m;
console.log(!l==m);

//conditonal statements:
//1.if:
let mood="dark mood";
if(mood==="dark mood"){
    console.log(color="black");
}

if(mood!="dark mood"){
    console.log(color="white");
}


//if-else:
let boy=13;
if(boy===13){
    console.log("true counting");
}
else{
    console.log("re-counting");
}

//Ternary operator:
let age=19;
let result=age>18?"adult":"not adult"; //simpler,compact if else
console.log(result);



//for loop
for(let i=1;i<=100;i++){
    console.log("Beauty");
}

let sum=0;
for(let j=1;j<=50;j++){
    sum=sum+j;
    console.log(sum);
}


//while loop
let z=1;
while(z<=5){
    console.log("beauty");
    z++;
}


//do whileloop
let shyam=1;
do{
    console.log("hello from the beauticottage!");
    shyam++;
}while(shyam<=5);

//for of loop
let str="beauty";
let size=0;
for(let val of str ){
    console.log("val=",val);
    size++;
}
console.log("string size:",size);

//for in loop

let employee={
    emp_name:"rahul",
    age:32,
    fiel:"accountent",
    salarly:100000
};
console.log(employee);
console.log(employee["salarly"]);
for(let key in employee){
    console.log("key=",key,"value=",employee[key]);
}


//string
let string ="beauty maurya";
let string2='beautyrani';
//string indices
console.log(string[9]);


//template literals
let specialstring=`this is a template literal `;
console.log(specialstring);



let product={
    item:"pen",
    color:"red",
    price:10
};
//console.log("The price of", product.item,"which is",product.color,"in color is",product.price);
console.log(`The price of ${product.item} which is ${product.color} in color is ${product.price}.`); 


console.log("hello!\nits\tme.");

//string methode
let newspacialstring=specialstring.toUpperCase();
console.log(newspacialstring);

let str1="world";
let str2="hello!";
let newstr2=str2.slice(1,5);
let res=str2.concat(str1);
console.log(res);
console.log(newstr2);

let replacestr1=str1.replace("world","duniya");
console.log(replacestr1)

console.log(str1.charAt(4));





