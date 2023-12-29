
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