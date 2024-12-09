let arr=[2000,4000,5000,8000,1000];
// find method can take  callback function which is called for each element
const rVal = arr.find((elem)=>{
   return elem>3000;
})
// find method returns only one value
//first match and stops searching 
console.log(rVal);//4000