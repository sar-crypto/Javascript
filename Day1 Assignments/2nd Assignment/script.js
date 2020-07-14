/*var: The scope of a variable defined with the keyword “var” is limited to the “function” within which it is defined. If it is defined outside any function, the scope of the variable is global.
  var is “function scoped”.*/ 
{
  var a=10;
  console.log(a);
} 
{
  a++;
  console.log(a);
}
{ 
  var lang = ["Hindi","English","Marathi","Odisa"];
  console.log("language know :",lang);
}

/*let: The scope of a variable defined with the keyword “let” or “const” is limited to the “block” defined by curly braces i.e. {} .
  “let” and “const” are“block scoped. */
{ 
   let name = "Sarita Maharana"; 
   console.log("Name :",name);
}
/*const: The scope of a variable defined with the keyword “const” is limited to the block defined by curly braces. However if a variable is defined with keyword const, it cannot be reassigned.
  “const” cannot be re-assigned to a new value. However it CAN be mutated.*/
  { 
const PI = 3.141592653589793;
//PI = 3.14 // This will give an erro
console.log(PI)
}