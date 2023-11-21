let a = "Hi";
let b = a ? "Welcome" : "Not declare a";  //output: Welcome  // using for shorthand if
     // here 'b' is variable and a' is condition then the condition is true print 'Welcome' otherwise print 'Not declare a'
console.log(b);

let testscore = 40;
let grade = testscore >=80 ? "Grade:A": testscore >=60 ? "Grade B": testscore >=40 ? "Grade C":testscore >=20 ? "Grade D": "Grade E"; // here 'Grade E' is else part so use there
         // here 'testscore >=80 ?'(if) then 'Grade:A'(print) and 'testscore >=60 ?'(elif) then 'Grade B'(print).....etc.. Grade E(else)print 
console.log(grade)