const view = document.querySelector("#view2");
console.log(view);

const div = view.querySelector("div");
const h2 = div.querySelector("h2")

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
})
