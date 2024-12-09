//Various ways to declare a string variable

const { load } = require("cheerio");

let string = "Hello World";

string='Hello World';

string=`Hello World`;

string = new String("Hello Word")

console.log(string);//'Hello World'

// How will you deal with unicode characters

string ="\u00A9"
console.log(string);//©

string ="\u{1F602}"
console.log(string);//😂


string ='I\'m JS'
//\ is instruction that this is not the end of the quote
console.log(string);//I'm JS

