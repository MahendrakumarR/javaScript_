let a = alert("Welcome to Paper/Rock/Cissor Game");
console.log(a);

let b = confirm("Are you ready to play");
console.log(b);

const c = prompt("Please choose one(rock/paper/cissor):")
if (c){
   console.log(`You are a ${c}`)
   if (c ==="rock"){
        computer = "paper"
        let d = confirm("You Win")
        console.log(d)
   }else if(c === "paper"){
        computer = "rock"
        let e = confirm("Computer Win")
        console.log(e)
   }else if(c === "cissor"){
        computer = "rock"
        let f = confirm("Computer Win")
        console.log(f)
    
   
}else 
  console.log("hi")  
}