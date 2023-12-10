// Error Handling

//=========== Reference Error =====================

// "use strict";                // here using 'use strict' for giving error for not using 'const' or 'let'
// variable = "Mahendran";     // here not use 'let' or 'const' but run
// console.log(variable);     // output : Reference Error

//=========== Syntax Error ========================

// obj..name    // here give error because '..' given

// ========== try catch finally ====================

const makeErr = () =>{
    try{
        const name = "Welcome";
        name = "Hello";
    }
    catch(err){
        console.log(err);        // no red color error give messeage type error
        //or
        console.table(err);     // give table format error
        //or
        console.warn(err)      // give yellow color messeage type error
        //or
        console.error(err);   // give red color messeage type error
    }
}
makeErr();