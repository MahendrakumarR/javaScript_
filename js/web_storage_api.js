// Web storage API   

// two types  1.local storage 2. seeion storage


// local storage means you close the browser data not clear 
// session storage means you close the browser data are clear 
// you see this output in console then click the storage option in console 

document.addEventListener("readystatechange", (event)=>{  // using for reload the server
    if(event.target.readyState === "complete"){
        console.log("Complete");
        initApp();                                  // first initialize the app then using below
    }
})

const initApp = () =>{
    const myContent = ["Earn","Grow","Give"];  // this is array 
    const myObject = {                         // this is object
        name : "MahendraN",
        myContent : ["Earn","Grow","Give"],
        logName : function(){                  // this is function
            console.log(this.name);
        }
    };
    window.sessionStorage.setItem("mySessionStore", JSON.stringify(myObject)); // here using session for storing data setitem for adding new items (or) object
    const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore")); // convert to json file and then get the value using getitem
    console.log(mySessionData);
}