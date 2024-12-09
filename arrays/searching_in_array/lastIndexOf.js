let arr=["One","Two","One","Three","Four","One","Five"];
// lastIndexOf starts searching from the end of the array
console.log(arr.lastIndexOf("One"));//5
console.log(arr.lastIndexOf("One",3));//2
// lastIndexOf search is case sensitve
console.log(arr.lastIndexOf("one"));//-1