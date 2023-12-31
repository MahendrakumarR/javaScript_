
//  const view1 = document.getElementById("view1");
//  console.log(view1)                                     // here select the section

//            or

const view2 = document.querySelector("#view1");      // here using '#' for query selector
console.log(view2)                                  // here select the section

view2.style.display = "none";                      // now display content not showing
view2.style.display = "flex";  

//  const views = document.getElementsByClassName("view");    // here geting element using 'class name'
//  console.log(views);

//             or

//  const views2 = document.querySelectorAll(".view");       // here geting element using 'class name'
//  console.log(views2);

const sall = view2.querySelectorAll("div");   // here 'view2' store the 'view1' id elements inside 
console.log(sall);                           // select all the individual 'div' elements

//          or
// const sall2 = view2.getElementsByTagName("div");
// console.log(sall)

const evendiv = view2.querySelectorAll("div:nth-of-type(2n)"); // only select 2,4,6,8,10,12 elements
console.log(evendiv);

// const odd_div = view2.querySelectorAll("div:nth-of-type(2n-1)"); // only select 1,3,5,7,9,11 elements
// console.log(odd_div);

evendiv[3].style.backgroundColor = "purple"; // here 'evendiv[3]' index position then change the color that position


// ============ change all even elements color/width/properties ============================

for(i=0; i<evendiv.length; i++){          // here I want all even numbers properties change
    evendiv[i].style.width = "150px";                  // increase height
    evendiv[i].style.height = "150px";                // increase width
    evendiv[i].style.color = "yellow";               // this is a number color 
    evendiv[i].style.backgroundColor = "blue";    // change an element backgroundcolor 
   
}

// ============ change the 'nav' inside text ================================================

const change_text_name = document.querySelector("nav h1");         // here using h1 for which size already used
change_text_name.textContent = 'Welcome to my page';              //  here change text content
change_text_name.innerHTML= '<h1> Welcome to my page2 </h1>';    // here change nside the html code
 
console.log(evendiv[0].parentElement);                              // select the section whole(odd and even elements)
console.log(evendiv[0].parentElement.children);                    // select section inside 'odd' and 'even' elements
console.log(evendiv[0].parentElement.childNodes);                 // now nodes(25) becacuse " 'enter' or '\n' " and 'div' both can take
console.log(evendiv[0].parentElement.hasChildNodes());           // check there is a child node there
console.log(evendiv[0].parentElement.lastElementChild);         // last child is 'enter' or '\n'
// or 
console.log(evendiv[0].parentElement.firstElementChild);       // first child is " 'enter' or '\n' " or 'div'
console.log(evendiv[0].nextSibling);                          // next sibling is 'enter or \n' 
console.log(evendiv[0].nextElementSibling);                  // next element sibling is '3' 
// or
console.log(evendiv[0].previousElementSibling);            // previous element sibling is '1' 

 

     




