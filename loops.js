let a={
    employees:[
        {"firstname":"john","lastname":"doe"},
        {"firstname":"pallavi","lastname":"kamble"},
        {"firstname":"aniket","lastname":"jadhav"}
    ],
    city:"pune",
    no:[90909090],
    status:true
}
let r1= JOHN.stringify(a)
console.log(r1);
let r2 JSON.parse(r1);
console.log(r2);

let g5 ={
    name :{name:"pallavi"}}
    console.log(g5.name.name);