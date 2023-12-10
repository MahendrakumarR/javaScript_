// create a JSON file

const jn = {                      // This is an object
    name : "Mahendran",
    content : ["Earn","Grow","Give"],
    sub : function(){
        console.log("Thanks for clicking");
    }
};
console.log(jn);            // output : Object { name: "Mahendran", content: (3) ["Earn","Grow","Give"], sub: sub() }
console.log(jn.name);      // output : Mahendran
jn.sub();                 // output : Thanks for clicking

//=========== converting object into json ============================

const cvtjson = JSON.stringify(jn);         // here 'stringify' convert 'object' into 'json' 
console.log(cvtjson);                      // output : {"name":"Mahendran","content":["Earn","Grow","Give"]} // here function not tacable
console.log(typeof jn)                    // output : object
console.log(typeof cvtjson)              // output : string

//=========== converting json into object ============================

const newcvtjson = JSON.parse(cvtjson);        // here 'parse' used to convert 'json' into 'object' 
console.log(newcvtjson);                      // output : Object { name: "Mahendran", content: (3) ["Earn","Grow","Give"]} // here function not tacable
console.log(typeof cvtjson)                  // output : string
console.log(typeof newcvtjson)              // output : object
