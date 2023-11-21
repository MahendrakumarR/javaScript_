let age = 19;
let la = 61;
let lo = 17;

if (age >= 18){
    message =  `You are ${age} years old eligible for vote`;
}else if (age >= 60){
    message = `You are ${age} years old also eligible for vote`;
}else{
    message = `You are ${age} years old not eligible for vote`;
}

console.log(message)
