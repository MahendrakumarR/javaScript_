// hrere using string methods
// create a variable to store the string value

let v = "Mahendrakumar";
console.log(v) // Output: Mahendrakumar  // here using console for print the value to display browsers console
 // here using length property for length of the string
console.log(v.length) // Output: 13
// or 
console.log("Welcome all".length) //Output: 11

// ----- using index positions ------ //

console.log(v.charAt(0)) // Output: M
//indexOf
console.log(v.indexOf("dr")) // Output: 5
//or
console.log(v.indexOf("i")) // Output: -1 // output is -1 because no (i) inside the string
// slice
console.log(v.slice(3,9)) // Output: endrak
// toLowerCase or toUpperCase
console.log(v.toLowerCase(v)) // Output: mahendrakumar
// include  
console.log(v.includes("dr")) // Output: True  // the given strings are match the variable
// split
console.log(v.split("dr")) // Output: ["mahen", "akumar"]  // the given strings are split the variable
//or
console.log("Hello World".split(" ")) // Output: ["Hello", "World"] // the given strings are split the value
//or
console.log("Hello , World , Welcome".split(",")) // Output: ["Hello", "World", "Welcome" ] // the given strings are split the value into seperate value 
//or
console.log("Hello World Welcome".split("")) // Output: ["H","e","l","l","o", "W","o","r","l","d", "W","e","l","c","o","m","e",_ ] // the given strings are split the value into seperate value