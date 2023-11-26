const myArray = [];  // This is empty Array
console.log(myArray) // output : Array []

// add elements inside the Array

const myArray_1 = [];

myArray_1[0] = "MahendraN";   // string
myArray_1[1] = 20;           // integer
myArray_1[2] = "Kumar";     // string
myArray_1[3] = 34.89;      // float
myArray_1[4] = true;      // boolean

console.log(myArray_1);                       // output : Array(5) [ "MahendraN", 20, "Kumar", 34.89, true ]
console.log(myArray_1.length);               // output : 5
console.log(myArray_1[myArray_1.length-1]); // output : true // here why use 'myArray_1.length-1' find the last value of the array

// push
myArray_1.push("Hello");   // push used to add last element in an array
console.log(myArray_1);   // output : Array(6) [ "MahendraN", 20, "Kumar", 34.89, true, "Hello" ]

// unshift
myArray_1.unshift("Welcome");   // unshift used to add first element in an array
console.log(myArray_1);        // output : Array(7) [ "Welcome", "MahendraN", 20, "Kumar", 34.89, true, "Hello" ]

// pop
myArray_1.pop();            // pop used to delete last element in an array
console.log(myArray_1);    // output : Array(6) [ "Welcome", "MahendraN", 20, "Kumar", 34.89, true ]

// shift
myArray_1.shift();        // shift used to delete first element in an array
console.log(myArray_1);  // output : Array(5) [ "Welcome", "MahendraN", 20, "Kumar", 34.89, true ]

//==================== important ========================
const myArray_2 = [1, "Hello", "Welcome", 6, "not"]   // this is an array elements

const lastItem = myArray_2.push("not");              // here return length of an elemnts are there in the array when using .push("anything")
console.log(lastItem);                              // output : 6

const firstItem = myArray_2.unshift("yes");       //  same as the above code 
console.log(firstItem);                          // output : 7

const firstItem_1 = myArray_2.shift();         //  not give value inside the '.shift()' they print element of an array
console.log(firstItem_1);                     // output : yes

const lastItem_1 = myArray_2.pop();         //  same as the above code 
console.log(lastItem_1);                   // output : not

console.log(myArray_2)                   // output : Array(5) [ 1, "Hello", "Welcome", 6, "not" ]

// incase i want delete in between value so use this

const newArray = ["a", 5, "b", 8, "c"];   // new array 
newArray.splice(2,1);                    // here '2' is starting position and '1' is how many items delete
console.log(newArray)                   // output : Array(4) [ "a", 5, 8, "c" ]


newArray.splice(2,1,"Hello");        // here '2' is starting position and '0' is add new item inside the array
console.log(newArray)               // output : Array(4) [ "a", 5, 8, "c" ]






