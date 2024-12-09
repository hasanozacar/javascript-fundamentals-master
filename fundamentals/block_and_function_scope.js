
//ES5 has function scope that is because of hosting.ES6 does not have hosting, it has block scope. Hoisting means it is bringing the declaration on top.
//code-block-1
let x=9;
{
    let x=8;
    console.log(x);//8
}
console.log(x);//9

//code-block-2

var y=9;
{
    var y=8;
    console.log(y);
}
console.log(y); //Uncaught SyntaxError: Identifier 'x' has already been declared