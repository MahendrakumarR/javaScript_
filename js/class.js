// classes

const mypizza = {
    size : "medium",
    amount : 100,
    bake : function(){
        return console.log(`Baking a ${this.size} size pizza is Rs ${this.amount}. `) // output : Baking a medium size pizza is Rs 100.
    }
}

mypizza.bake();

//================ class =================================
class pizza{
    constructor(){
        this.size = "large";
        this.amount = 200;
    }
    bake(){                 // this is a function 
        return console.log(`Baking a ${this.size} size pizza amount is Rs.${this.amount}.`) 
    }
}

const objpizza = new pizza();  // here 'objpizza' is a 'object' then 'pizza()' is class // here object used to call the class 
objpizza.bake()               // output : Baking a large size pizza amount is Rs.200.
console.log(objpizza.size);  // output : large

//================ parameter ===============================
class piz{
    constructor(area){          // here using parameter
        this.size = "large";
        this.amount = 200;
        this.area = area;
    }
    bakery(){                 // this is a function 
        return console.log(`Baking a ${this.size} size pizza amount is Rs.${this.amount} location is ${this.area}.`) 
    }
}

const objpiz1 = new piz("chennai");         // here passing a parameter value
objpiz1.bakery()                           // output : Baking a large size pizza amount is Rs.200 location is chennai. // call the function then run
const objpiz2 = new piz("bangalore");     // here passing a parameter value
objpiz2.bakery()                         // output : Baking a large size pizza amount is Rs.200 location is bangalore.// call the function then run

//================ inherit class ===========================

class parent {
    constructor(sizepizza){
        this.size = sizepizza;
        this.crust = "original";
    }
    getCrust(){                                  // here get the value of crust
        return this.crust;
    }
    setCrust(crustpizza){                       // here change the value of crust
        this.crust = crustpizza;
    }

}
class child extends parent {         // here 'child' is a another class
    constructor(sizepizza){         // constructor is must for all classes
        super(sizepizza);          // 'super' used for link the parent class 
        this.type = "margarita";
    }
    slice(){                     // this is a function
        console.log(`our ${this.type} ${this.size} pizza has a 8 slices`)
    }
}

const bothclass = new child("medium");
bothclass.slice();                        // output : our margarita medium pizza has a 8 slices




