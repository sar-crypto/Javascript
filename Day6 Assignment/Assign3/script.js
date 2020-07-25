//const name = prompt("Enter your name","Anonymous")
title.innerText=`Welcome to Letsupgrade Community ${name}`;


const clocktime=document.getElementById('time');
function clock (){ 
  let date=new Date();
 let time=date.toLocaleTimeString();
 clocktime.innerText= time;
}
//clock();
setInterval(clock,1000)


//Switching white to dark mode
const dmode= document.getElementById('dark');
dmode.onclick= function changemode(){
  document.body.style.backgroundColor = "black";
  
  document.body.style.color= "white";
}