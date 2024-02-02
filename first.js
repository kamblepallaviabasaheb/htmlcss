console.log("welcome to pallavi kamble");
// Using var
var a = 5;
function exampleVar() {
  var a = 10; // This is a different variable with the same name, limited to the function scope
  console.log(a); // 
}
exampleVar();
console.log(a); // 

// Using let
let b = 15;
if (true) {
  let b = 20; // This is a different variable with the same name, limited to the block scope
  console.log(b); // Outputs 20
}
console.log(b); // 

// Using const
const c = 25;
// c = 30; // Error: Assignment to a constant variable is not allowed
console.log(c); // 
const student={
  fullname:"pallavi kamble",
  age:20,
  cgpa:8.2,
  ispass:true
};
console.log(student["age"]);

const profile ={
  username :"pallavi kamble",
  isfollow:false,
  followers: 200,
  following: 100,
};
console.log( ["follower"]); 
console.log("hello wold");
//this is the comment
// Arithmatic oprator
let s=5;
let p=3;
console.log("s+p=",s+p);
console.log("s-p=",s-p);
console.log("s*p=",s*p);
console.log("s/p=",s/p);

//unary oprator



//JSON
let P = {
  employees:[
      {"firstname":"john","lastname":"doe"},
      {"firstname":"pallavi","lastname":"kamble"},
      {"firstname":"aniket","lastname":"jadhav"}
  ],
  city:"pune",
  no:[90909090],
  status:true
}
let r1= JSON.stringify(a)
console.log(r1);
let r2= JSON .parse(r1);
console.log(r2);

let g5 ={
  name :{name:"pallavi"}}
  console.log(g5.name.name);