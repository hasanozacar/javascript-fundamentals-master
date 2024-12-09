let arr = ["One","Two","Three","Four","Five"];
// you can remove a specific element
console.log(arr.splice(2));// [ 'Three', 'Four', 'Five' ]
console.log(arr);//[ 'One', 'Two' ]

let arr2 = ["One","Two","Three","Four","Five"];
// you can insert an element at given position ?
console.log(arr2.splice(1,3,"New"));//[ 'Two', 'Three', 'Four' ]

console.log(arr2);//[ 'One', 'New', 'Five' ]