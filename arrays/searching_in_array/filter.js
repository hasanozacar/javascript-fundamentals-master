let arr=[2000,4000,5000,8000,1000];
const rVal = arr.filter((elem)=>{
   return elem>3000;
})
// find method returns new array
console.log(rVal);//[ 4000, 5000, 8000 ]