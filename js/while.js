let i = 1;              // while loop 
while (i<4){           // output : 1 2 3 4 5 
    console.log(i);
    i = i+1;
}
// break
let a = 1;              // while loop 
while (a<5){           // output : 1 2 3   // 4 and 5 not print 
    console.log(a);    
    if(a === 3){
        break;
    }
    a = a + 1;
}


let r = 1;             // do while loop
do{                   // output : 1 2 3 4 5
    console.log(r);
    r = r+1;
}while(r<6);

for(f=0; f<10; f++){   // for loop
    console.log(f);    // output : 0 1 2 3 4 5 6 7 8 9
}  

// continue
for(f=0; f<10; f++){   // for loop
    if(f === 2){       // output : 0 1 3 4 5 6 7 8 9
        continue;      // here 2 not print
    }
    console.log(f);    
}
//or

let myname = "MahendraN"
for(n=0; n<myname.length; n++){       // here name print using the for loop
    console.log(myname.charAt(n));   // output : M a h e n d r a N
}

