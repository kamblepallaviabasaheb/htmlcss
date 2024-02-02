//array intteration method
//for Each


 let s=[
    
       { name:"pallavi", city:"pune" },
       {name:"pooja",city:"solapur"},
       {name:"poonam",city:"latur"}
 ]
 let names=[];
 for(let index=0;index<s.length; index++){
    names.push(s[index].name)
 }
//
s.forEach(item=>{
    names.push(item.name)
})
console.log(names);