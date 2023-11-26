let x = 1;    // let used for change value in the variable
x = 2;       // here not use "let x = 2;" because already used above code then only use x =2 ;

console.log(x); // output : 2

const y = 1;  // here const used for fixed value in the variable
x = 2;       

console.log(y);

// Global Scope
let a = 2;  // here a used for anywhere to print this value
let b = 4; // here a used for anywhere to print this value

// Local Scope // Block Scope

if(true){
   let c = 3;       // here let a = 3; not given error beacuse inside the curleprackets
   console.log(`Global : ${b}`);  // here 'b' is print becuase 'b' is a global scope
   console.log(`Block / Local : ${c}`)   // here 'c' is print becuase 'c' is a local scope
} 

// console.log(c)  // here 'c' is given error becuase 'c' is a local scope or block scope

// Local Scope // Funtion Scope 

function myFunc(){
    const z = 5;
    console.log(`Function / Local : ${z}`)  // here 'z' is print becuase 'z' is a local scope or function scope
    console.log(`Global : ${b}`) // here 'a' is print becuase 'a' is a global scope
}
console.log(myFunc())
console.log(`Global : ${b}`)
// console.log(z)  // here 'z' is not print becuase 'z' is a local scope or function scope
