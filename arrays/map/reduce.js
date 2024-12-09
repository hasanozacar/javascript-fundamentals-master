
// The reduce() method executes a reducer function on each element of the array 
//and returns a single output value.

// sum of array
let array=[2,4,6,8];
let result =array.reduce((accumulator,current)=>{
    return accumulator +current;
})
console.log(result);//20

//using default value
const defaultValue=5;

result=array.reduce((accumulator,current)=>{
    return accumulator + current;
},defaultValue)
console.log(result);//25

//find average of array

result = array.reduce((accumulator,current,index)=>{
    accumulator += current;
    if(index===array.length-1) 
    return accumulator/array.length
    return accumulator;
})
console.log(result);//25

//How will you flatten an array i.e e.g converting 2 dimensional 
//array into single dimension ?

let arr=[
    [45,90],
    [5,6],
    [2,4]
];
let flattenArray = arr.reduce((accumulator,element)=>{
    return accumulator.concat(element);
},[])
console.log(flattenArray);
