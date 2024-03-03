   
/*
   <script type = "module" src="js/module_1.js"></script> 

   here using type = "module" when using module in html file 

*/
const earnMoney = () => {
    return "Earn Money";
};

const growMoney = () =>{
    return "Grow Money";
}

const giveMoney = () =>{
    return "Give Money";
}

export default earnMoney;        // when using module compulsory one function is default then they work 

    //or

/* export default function earnMoney(){         // this is alternative for above default method
    return "Earn Money";                        
};  */                                  
    

export{growMoney, giveMoney};    // this is export module functions

        //or
/*
export const giveMoney = () =>{
    return "Give Money";
};

*/



