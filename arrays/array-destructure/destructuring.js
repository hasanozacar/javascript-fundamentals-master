let exampleArray=["1","2","3","4"];
// syntax of destructuring
/* It's about extracing the data pieces from 
array or object literal and assigning to individual variables*/
const [a,b,c]=exampleArray;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// you can avoid assignment in some case with destructuring

const [x,,y,z,defaultvalue=3]=exampleArray;
console.log(x,y,x,defaultvalue);//1 3 1 3

//Swap value using destructuring

let d = 5;
let e = 7;
[d,e]=[e,d];
console.log(d,e);//7 5
