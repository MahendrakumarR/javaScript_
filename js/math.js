// ------ Math Methods ------- //

console.log(Math.PI) // output : 3.141592653589793 
//or
console.log(Math.trunc(Math.PI)) // output : 3 // here '.' after values are omit only '3' visible
// round
console.log(Math.round(4.5)) // output : 5 ( becase the value is '4' then '4.5' to '4.9' to the value is '5' otherwise '4.1' to '4.4' the value is '4')
// ceil or floor
console.log(Math.ceil(4.1)) // output : 5 ( becase the 'ceil' used for opposite of the round method)
                           // ('4.1' to '4.9' the value is '5')
//or 
console.log(Math.floor(4.7)) // output : 4( becase the 'floor' used for opposite of the ceil method)
                           // ('4.1' to '4.9' the value is '4')

// pow
console.log(Math.pow(8,2)) // output : 64 // here 8x8 = 64

// min
console.log(Math.min(4,7,2,5)) // output : 2 // minimum value

// max
console.log(Math.max(4,7,2,5)) // output : 7 // maximum value

// random
console.log(Math.random()) // output : 0.5842395955422822 // any random value value
console.log(Math.random()) // output : 0.28802700339256226 // any random value value
//or // here i want 1 to 10 numbers in random
console.log(Math.floor(Math.random()*10)+1) // output : 1 to 10 random number ( here using '+1' because the values(0-9) ten values i want (1-10) so using '+1") 
// floor used for whole value from '1' then '10' for '10'values '+1' for not '0'

const a = "Mahendran";
console.log(a.charAt(Math.floor(Math.random()*a.length))) // output : Mahendran random value