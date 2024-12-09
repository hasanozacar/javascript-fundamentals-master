let arr = ["a","b","c","d"];
arr.forEach((item,index)=>{
    console.log(item,index);
    /**
     * a 0
       b 1
       c 2
       d 3
     */
})
/*
The forEach method is a convenient way to loop through each 
element of an array, and the provided callback function is 
executed for each element. The callback function takes three 
parameters: the current element, the current index, and 
the array itself.
*/

// for..in will display the index number
for(let item in arr){
    console.log(item);
    /**
     * 0
     * 1
     * 2
     * 3
     */
}

// for..of will display the element
for(let item of arr){
    console.log(item);
    /**
     * a
     * b
     * c
     * d
     */
}