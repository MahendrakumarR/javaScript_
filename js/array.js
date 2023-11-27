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

// incase you want delete in between value so use this

// splice
const newArray = ["a", 5, "b", 8, "c"];    // new array 
newArray.splice(2, 1);                    // here '2' is starting position and '1' is how many items delete
console.log(newArray)                    // output : Array(4) [ "a", 5, 8, "c" ]


newArray.splice(2, 0, "Hello");        // here '2' is starting position and '0' is add new item inside the array                                                                                                                                                                                                                                                                                                                                                              
console.log(newArray)                 // output : Array(5) [ "a", 5, "Hello", 8, "c" ]

newArray.splice(2, 1, "new");          // here '2' is starting position and '1' is how many items // then 'new' replace 'Hello'                                                                                                                                                                                                                                                                                                                                                               
console.log(newArray)                 // output : Array(4) [ "a", 5, "new", "c" ]

// reverse
const reverseArray = [1,2,3,4,5,6,7,8,9];   // new array created
const re = reverseArray.reverse();                    // here using 'reverse' method for reverse order of the array 
console.log(re);                // output : Array(9) [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

// join
const joinArray = ['A','B','C','D','E'];    // new array created
const my = joinArray.join();               // here using 'join' method for no quotations 
console.log(my);                          // output : A,B,C,D,E    // this are single string

// split         // The above code is commbained so now split indiviual
const splitArray = ['A','B','C','D','E'];   // new array created
const sp = splitArray.join().split(",");   // here using 'split' method for split the value each by each
console.log(splitArray);                  // output : Array(5) [ "A", "B", "C", "D", "E" ]  

// concat        // Joining to arrays
const oneArray = ['A','B','C','D','E'];       // new array created
const secondArray = ['F','G','H','I','J'];   // new array created
const con = oneArray.concat(secondArray);   // here using 'concat' method for add two arrays
console.log(con);  

//or    // same as the above code               // Joining to arrays

const con_1 = [...oneArray,...secondArray];   // here using 'concat' method for add two arrays
console.log(con_1); 

// ================ Two Dimensotional Array ===========================
const a = [1,2,3,4,5,6,7,8,9,0];
const b = ["a", "b", "c", "d"];
const c = [23, "e", "f", 11];

const v = [a,b];               // here 'v' is array they store two arrays inside the v  

console.log(v[0][1]);          // output : 2

// ================ Three Dimensotional Array =========================

const v_1 = [a,b,c];               // here 'v' is array they store two arrays inside the v  

console.log(v_1[2][1]);          // output : e
