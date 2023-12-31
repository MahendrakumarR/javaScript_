 // object
// key-pair called objects inside the curly braces

const obj = {name:"Mahendran"};
console.log(obj);                 // output : { name: "Mahendran" }

//or
console.log(obj.name);         // output : Mahendran

// Another method for objects

const newObj = {
    a : true,                                   // boolean datatype
    b : 10,                                    // integer datatype
    c : {                                     // this is an another object inside the object 
        d : 1,
        e : "hello"
    },
 
    f : ["a","b","c","d"],                             // this is an array inside a object

    g : function(){   
        return "This is a function";                 // this is a function inside an object
    },

    h : function(){                                // this is a function inside an object
        return `The Value of b is: ${this.b}`;    // here 'this' is an object property to find the object 'b'
    }

}

console.log(newObj);                 // output : Object { a: true, b: 10, c: {…}, f: (4) […] } // here '...' means values of 'c' and 'f'
console.log(newObj.a);              // output : true
console.log(newObj.b);             // output : 10
console.log(newObj.c);            // output : Object { d: 1, e: "hello" } 
console.log(newObj.c.e);         // output : hello                              // here print only hello inside the object
console.log(newObj.f);          // output : Array(4) [ "a", "b", "c", "d" ]
console.log(newObj.f[2]);      // output : c  // here 'c' index position is 2
console.log(newObj.g());      // output : this is a function  // here g '()' used to call the function
console.log(newObj.h());     // output : The Value of b is: 10

// =================  object used inheritance ==============

const old = {           //  this is an object i created first 
    apple : "red",
    banana : "yellow",
    orange : "orange"
}
console.log(old.apple)                          // output : red

// here inherit the above object (old)

const few = Object.create(old);             // here 'new1' object inherit the 'old' object
console.log(few.apple);                    // output : red // because inherit the 'old' object values
console.log(few);                         // output : object { } // because no value inside the 'few' object
few.carrot = "green";                    // here add values inside the 'few' object 
console.log(few);                       // output : Object { carrot: "green" }
console.log(few.orange);               // output : orange // because inherit the object 'old'

// Another Method

const movie = {
    artist : "Mahendran",
    music : "Arr",
    direct : "logesh",
    camera : "john",
    singer : "omi"
}
                                        // here only print keys 
console.log(Object.keys(movie));       // output : Array(4) [ "artist", "music", "direct", "camera", "singer" ]
                                      // here only print values
console.log(Object.values(movie));   // output : Array(4) [ "Mahendran", "Arr", "logesh", "john", "omi" ]

delete movie.singer;               // here delete the 'singer' value from the object


// ================ for in =======================

for(let i in movie){
    console.log(movie[i]);  // output : Mahendran, Arr, logesh, john
}

// or 

for(let i in movie){
    console.log(`${i}, it's a ${movie[i]}`);  // output : 'artist, it's a Mahendran', 'music, it's a Arr', 'direct, it's a logesh', 'camera, it's a john'
}


// ============ destructuring the object ========================

const movie1 = {
    artist : "kumar",
    music : "Ani",
    direct : "logi",
    camera : "meg",
}

// here using variable to store the values of object

const { music : storeValue } = movie1; // here 'storeValue' used to store the music value of 'Ani'
console.log(storeValue);              // output : Ani

//or
const {artist,music,direct,camera} = movie1; // here 'storeValue' used to store the music value of 'Ani'
console.log(artist);                        // output : kumar














