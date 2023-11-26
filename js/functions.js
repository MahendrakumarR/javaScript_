
function sum(n1, n2){
    return n1 + n2;   
}
console.log(sum(10, 20))     // output : 30
console.log(sum(300, 400))  // output : 700
console.log(sum(75, 60))   // output : 135
console.log(sum(13, 21))  // output : 34

//or 
function sum(n1, n2){     // here used two parameters but the value is only one '10'.
    console.log(n1);     // output : 10
    console.log(n2);    // output : undefined
    return n1 + n2;   
}
console.log(sum(10))  // output : NaN // how to avoid 'NaN' given in below

// or 
function sum(n1, n2){        // here used two parameters but the value is only one '10'.
    console.log(n1);        // output : 10
    console.log(n2);       // output : undefined
    if(n2 == undefined){
        return n1 + n1;
    } 
    return n1 + n2;   
}

console.log(sum(10))  // output : NaN

function getUserEmail(email){                      // here '@' before letters are printed
    return(email.slice(0, email.indexOf("@")));   // here slice('0' is starting position and indexOf("@") is ending position)
}
console.log(getUserEmail("Mahendrakumar@gmail.com"))  // output : Mahendrakumar 
console.log(getUserEmail("kumar@gmail.com"))         // output : kumar
console.log(getUserEmail("vijay@gmail.com"))        // output : vijay


// javascript don't have .toProperCase only have .toLowerCase and .toUpperCase
// the below code how to create first letter is capital

function toProperCase(name){
    return name.charAt(0).toUpperCase();  // here used for capatalized first letter print not other letters print
}
console.log(toProperCase("mahendran"))  // output : M    

// or
function _toProperCase(name){
    return name.charAt(0).toUpperCase()+ name.slice(1).toLowerCase(); // here name.slice(1).toLowerCase used for print other letters
}
console.log(_toProperCase("mahendran"))  // output : Mahendran



// ====== Other Methods for Declaring Functions ========= 
// ====== Method 1 ======================================

const toProperCase_2 = function (name){    // here toProperCase_2 is a Variable store a function 
    return name.charAt(0).toUpperCase()+ name.slice(1).toLowerCase(); 
}
console.log(toProperCase_2("mahendran"))  // output : Mahendran

// ====== Method 2 ======================================

const toProperCase_3 = (name) => {    // here toProperCase_3 is a Variable and '=>' is function 
    return name.charAt(0).toUpperCase()+ name.slice(1).toLowerCase(); 
}
console.log(toProperCase_3("mahendran"))  // output : Mahendran

