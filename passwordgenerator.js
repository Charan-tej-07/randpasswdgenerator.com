
let btn=document.querySelector("button");
let head=document.getElementsByClassName("pa");


btn.addEventListener("click",event=>{
    let big=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let small=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let symbol=["`","!","@","#","$","%","^","&","*","(",")","_","+","-","="];
let number=[0,1,2,3,4,5,6,7,8,9];
// big matters
let randBig=big[Math.floor(Math.random()*big.length)];
console.log(randBig);
big.sort(()=>Math.random()-0.5);
console.log(big);
let bigSliced=big.slice(0,3);
console.log(bigSliced);
let bigSlice=bigSliced.flat().join("");
console.log(bigSlice);
// small matters
small.sort(()=> Math.random()-0.5);
console.log(small);
let smallSliced=small.slice(4,7);
console.log(smallSliced);
let smallJoin=smallSliced.flat().join("");
console.log(smallJoin);
// symbol matters
symbol.sort(()=> Math.random()-0.5);
console.log(symbol);
let symbolSliced=symbol.slice(3,8);
console.log(symbolSliced);
let symbolJoin=symbolSliced.flat().join("");
console.log(symbolJoin);
// number matters
number.sort(()=> Math.random()-0.5);
console.log(number);
let numberSliced=number.slice(4,8);
console.log(numberSliced);
let numberJoin=numberSliced.flat().join("");
console.log(numberJoin);
let password=bigSlice+numberJoin+symbolJoin+smallJoin;
console.log(password);
    
    document.querySelector("h3").innerText=password;
    document.querySelector("h3").style.color="black";
    document.querySelector("h3").style.textAlign="center";
  
})
