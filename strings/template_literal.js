/*Template Literal or Teplate String is a
newer way to declare the string variable in J.S
*/ 

let string=`Hello Word`;


//You can display a value or an expression inside template string

const number=545;

string =`Your number is ${number}`
console.log(string);//Your number is 545

/*
Template Literal help us to store the format as it is
then escape sequence is not required for special characters 
*/

string=`First line
Second Line,
Third Line
`

console.log(string);
/**
 * First line
 * Second Line,
 * Third Line
 */