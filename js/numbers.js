// const mean fixed the variable name

const myString = "34";  // this is string

const myNumber = 5;

const myFloat = 5.0;

console.log(myNumber === myFloat);  // here (===) using for both are equal or not
console.log(myString);   // output : 34 (string are in the console are white color)
console.log(myNumber);  // output : 5   (numbers are in the console are green color)
console.log(myFloat);  // output : 5    (numbers are in the console are green color)
// string to number convert
console.log(Number(myString));  // output : 34
// number to string convert
console.log(String(myNumber));  // output : 5 
// NaN
console.log(Number("abcd") + 3);  // output : NaN  ( Not a Number )
// Boolean 
console.log(Number(true));  // output : 1 (false = 0)

// ====== Number Methods =========== //

// isInteger
console.log(Number.isInteger(59));  // output : true (the given number is integer so true)
//or
console.log(Number.isInteger(myString));  // output : false (the given variable store a string)

// pareFloat
const nf = "12.4465aaa";
console.log(Number.parseFloat(nf));  // output : 12.4465 (becuase only identify the float numbers only)
//or
console.log(Number.parseFloat(nf).toFixed(2)); // output : 12.44 (becuase toFixed method used only for 2 decimal points print )
                                               // and also using 'toFixed' method the number convert to string
// parseInt
const n = "25as";
console.log(Number.parseInt(n));  // output : 25 (becuase only identify the integer numbers only)

// chaining
const fl = 123.4567;
console.log(parseFloat(fl).toFixed(3).toString()); // output : 123.456 ( chaining mean morethan '.' used that is chaining)

// isNaN      // Not a Number
const a = 23;
const b ="hi"
console.log(Number.isNaN(a));  // outout : false ( 'a' is store a number so this is false)
console.log(isNaN(b));  // outout : true ( 'b' is store a string so this is not a number then true)