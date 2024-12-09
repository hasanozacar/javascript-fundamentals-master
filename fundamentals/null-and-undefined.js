//code-block-1
//JavaScript also has, but at the time of variable declaration, there is no type decided.block_and_function_scope.js
//Undefined
let x;
console.log(x);//undefined
console.log(typeof x);//undefined

//code-block-2
//Null is exactly the same as other programming languages. Null means nothing.
//Null
let y=null;
console.log(y);//null

//code-block-3
//Undefined and Null represent nothingness.
{
let x=null;
let y;
console.log(x==y);//true
}

//code-block-4
//Undefined and Null are different in terms of data type.
{
let x=null;
let y;
console.log(x===y);//false
}
//Undefined itself is a data type. Null is a primitive data type.