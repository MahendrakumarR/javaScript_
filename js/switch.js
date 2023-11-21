switch(2){       // here using expression '2' is case 1 or 2
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default:
        console.log("No match");
}

//or

switch(Math.floor(Math.random())*5){    
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(2);
        break;
    case 4:
        console.log(2);
        break;
    default:
        console.log("No match");
}