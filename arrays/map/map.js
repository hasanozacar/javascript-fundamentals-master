/* map() method is very useful method & used in most of real world aplications 
 * to loop through the array to display  the data  on page
 */
let arr=[2,3,6,4,5];
arr.map(function(elem,index){
    console.log(elem,index);
    /**
     * 2 0
     * 3 1
     * 6 2
     * 4 3
     * 5 4
     */
});
// map() method returns new array and it doesn't change the orginal arrays
let newArray = arr.map(function(elem,index){
    return elem*elem
});
console.log(arr);//[ 2, 3, 6, 4, 5 ]
console.log(newArray);//[ 4, 9, 36, 16, 25 ]

// we can use like that
let nArr = arr.map((elem)=> elem*elem);
console.log(nArr);////[ 4, 9, 36, 16, 25 ]



// Get all product names (i.e pNames) in a new array.

let products=[
    {id:1,name:"Apple"},
    {id:2,name:"Banana"},
    {id:3,name:"Grapes"},
    {id:4,name:"Oranges"}
]
let pNames = products.map(elem=>elem.name);
console.log(pNames); //[ 'Apple', 'Banana', 'Grapes', 'Oranges' ] 

//Finding length of each element in a new array.
let lArr = pNames.map(elem=>elem.length);
console.log(lArr); //[ 5, 6, 6, 7 ]
