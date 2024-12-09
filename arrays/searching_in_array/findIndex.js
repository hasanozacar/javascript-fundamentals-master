let arr=[2300,4500,5600,7800,1200];
//findIndex method finds index of searching value
const rVal = arr.findIndex((elem)=>{
   return elem>3000;
})
console.log(rVal);

//findIndex will also return "-1" if there is no true value matched
const returnValue = arr.findIndex((elem)=>{
    return elem>9000;
 })
 console.log(returnValue);//-1