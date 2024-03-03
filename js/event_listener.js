const view = document.querySelector("#view2");
console.log(view);

const div = view.querySelector("div");
const h2 = div.querySelector("h2");

//   syntax
// .addEventListeners(event, function, useCapture)

const doSomething = () =>{
    alert("doing Something");
};

h2.addEventListener("click", doSomething, false);     // here 'click' is 'event'and 'doSomething' is function 'false' is true or false
h2.removeEventListener("click", doSomething, false); // remove the EventListener

// using anonymous function

h2.addEventListener("click", 
(event) =>{
    console.log(event.target);
    event.target.textContent = " Again come "; 
});

// The below code use for serever load or not i want the proccess is over or not 

document.addEventListener
    ("readystatechange",(event)=>{                   // using for reload the server
        if(event.target.readyState === "complete"){
            console.log("complete");
            initApp();                              // first initialize then use below lines
        }            

    }
)


const initApp = () =>{
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event)=>
    {
        view.style.backgroundColor = "purple";

    })

    div.addEventListener("click", (event)=>
    {
        event.stopPropagation();  // explain below
        div.style.backgroundColor = "blue";

    })

    h2.addEventListener("click", (event)=>
    {
        event.stopPropagation(); // here why use this because when i click the text chage all the above colors so stop this then change only the text here
        event.target.textContent = "New year";

    })

};










