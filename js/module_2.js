/*
   <script type = "module" src="js/module_2.js"></script> 

   here using type = "module" when using module in html file 

*/

// import module


import earnMoney from "./module_1.js";
import {growMoney, giveMoney} from "./module_1.js";

console.log(earnMoney()) // here call the function
console.log(growMoney())
console.log(giveMoney())

// output

/*
    Earn Money 
    Grow Money 
    Give Money

*/