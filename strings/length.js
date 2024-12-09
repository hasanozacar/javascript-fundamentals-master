/* The string type has a length property which 
returns the length number of characters */ 

let string ="Let say the lenght this sentences";
console.log(string.length);//33

/* indexOf() and lastIndexOf() search for a character
or within string and returns the index number
*/

// Begins search from the beginning of the sentence
console.log(string.indexOf("en"));// 13

// Starts searching from the end
console.log(string.lastIndexOf("en"));//28 

// You can declare start index
console.log(string.lastIndexOf("en",12));//-1:not found

console.log(string.indexOf("en",14));// 25


//indexOf() cannot be used for advanced search operations like regex

//search() method can take regular expressions as well

console.log(string.search(/En/i));//13