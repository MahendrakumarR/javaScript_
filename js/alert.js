let a = alert("Welcome"); // message display in browser window
console.log(a);

let boolean = confirm("Accepet the cookies");  // confirm used for 'true or false' mean user accept 'true' otherwise 'false'
console.log(boolean);

let myname = prompt("Enter your Name:"); // prompt used to gather user input
console.log(myname);     // here have some error user not Enter the name they print 'null'  avoid null using '??'

let oldname = prompt("Enter your Name:"); 
console.log(oldname ?? "User not enter the name");     //avoid null using '??' when user not enter the name


//or

let newname = prompt("Enter Your Name:");

if (newname){
    console.log(newname ?? "User not enter the name") 
}else{
    console.log( "Your not Enter your name")
}
console.log(newname.trim().length) // here using trim for avoiding extra space in input field only count the characters

