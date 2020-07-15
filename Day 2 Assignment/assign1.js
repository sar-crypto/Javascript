console.log('String Methods and Properties');

/* 1. String length():The length property returns the length of a string:*/
let str = 'Sarita Maharana want to roam the world.';

console.log('str length :', str.length);
let str1 = str.length;
console.log('str1 len :', str1);

/*indexOf() :Finding a String in a String The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
*/
console.log('index :', str.indexOf('world'));

/*The lastIndexOf() : method returns the index of the last occurrence of a specified text in a string:
*/

console.log('last index :', str.lastIndexOf('a'));

/*String search() :The search() method searches a string for a specified value and returns the position of the match:
*/

console.log('position :', str.search('roam'));

/* The slice() Method :slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: the start position, and the end position (end not included).*/

console.log(str.slice(0.1));

/*The substring() :Method substring() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.

The difference is that substring() cannot accept negative indexes.
*/

console.log(str.substring(3, 8));

/*The replace() method : replaces a specified value with another value in a string:
*/

let s = 'Live';
let s1 = s.replace('Live', 'Smile');
console.log(s1);

/*String.trim() : The trim() method removes whitespace from both sides of a string:*/

let s2 = '    hello world   ';
console.log(s2.trim());

/*The charAt() Method :
The charAt() method returns the character at a specified index (position) in a string:*/

console.log(str.charAt(0));

/*split() : Converting a String to an Array
A string can be converted to an array with the split() method:
If the separator is omitted, the returned array will contain the whole string in index [0].

If the separator is "", the returned array will be an array */
let s3 = 'H,e,l,l,o';
console.log(s3.split(' '));
console.log(s3);

//Array Methods
console.log('Array Methods');

/*Popping
The pop() method removes the last element from an array:
*/
let f = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(f.pop());
console.log(f);

/*Pushing
The push() method adds a new element to an array (at the end):
*/

f.push('Custard apple');
console.log(f);

/*The shift() method removes the first array element and "shifts" all other elements to a lower index.*/

f.shift();
console.log(f);

/*The unshift() method : returns the new array length.*/

f.unshift();
console.log(f);

/*Changing Elements
Array elements are accessed using their index number:
Array indexes start with 0. [0] is the first array element, [1] is the second, [2] is the third ...*/
f[0] = 'Kiwi';
console.log(f);

/*Deleting Elements
Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:*/

delete f[0];
console.log(f);

/*Splicing an Array
The splice() method can be used to add new items to an array:*/
f.splice(2, 0, 'grapes', 'pomegranate');
console.log(f);

// Using splice() removing elements
f.splice(0, 1);
console.log(f);

/*Slicing an Array
The slice() method slices out a piece of an array into a new array.
This example slices out a part of an array starting from array element 1 ("Orange"):*/
let d = f.slice(1);
console.log(d);
console.log(f);
