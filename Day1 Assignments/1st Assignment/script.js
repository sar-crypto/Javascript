//1. console.log()
{
  var a = 10;
  console.log(a);
}
//2. console.info()
{ 
 var b = [name="Sarita", age="10"];
 console.info(b);
}
//3. console.time()
{
 console.time("answer time");
 alert("Click to continue");
 console.time("answer time");
 alert("Do a bunch of other stuff...");
  console.timeEnd("answer time");
}

//4. console.table() 
/*{
var x = {name:"Sarita",age:"20",city:"Mumbai"}
var u ={name:"Peace",age:"1",city:"Mumbai"}
  console.table({x,u});
}*/

//5. console.error()
console.error("This is error");
 
//6. console.warn()
console.warn("Hey this is warning!");