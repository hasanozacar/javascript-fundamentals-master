let products=["Banana","Orange","Grapes","Apple"];
let sortedArr = products.sort();
// We dont need to copy new element
console.log(sortedArr);//[ 'Apple', 'Banana', 'Grapes', 'Orange' ]

console.log(products);//[ 'Apple', 'Banana', 'Grapes', 'Orange' ]

/*To sort an array  in descending order there is a callback function
passed to sort() method which we refer to as compare function
*/
let array =["A","BB","CCC","DDD"]
// array.sort(function(a,b){
//    console.log(a,b);
//    /**
//     * A B
//     * B C
//     * C D
//     */
// });
// console.log(array);

/* Compare funtions returns three types of values less than 0 (-1)
more than 0 (1) */
let productsArray=["B","O","G","A"];
productsArray.sort(function(a,b){
    if (a>b) {
        return 1;
    }
    if (b<a) {
        return -1;
    }
    if (b==a) {
        return 0;
    }
})
console.log(productsArray);
//Number sorted
//What will be the output in case an array has undefined while sorting the values ?
let price=[45,23,10,undefined,5];
console.log(price.sort(function(a,b){
    if(a<b){
        return -1;
    }
    if(a>b){
        return 1;
    }
    if(a==b){
        return 0;
    }
   
  }
  ));//[ 5, 10, 23, 45, undefined ]


// How wil sort an object literal ?
const employees=[
    {eNo:1001,salary:3000},
    {eNo:1002,salary:2200},
    {eNo:1003,salary:3400},
    {eNo:1004,salary:6000}
]
 
employees.sort(function(a,b){
    if(a.salary<b.salary){
        return 1;
    }
    if(a.salary>b.salary){
        return -1;
    }
    if(a==b){
        return 0;
    }
   
  }
  );
  console.log(employees);
  /**
   * { eNo: 1004, salary: 6000 },
    { eNo: 1003, salary: 3400 },
    { eNo: 1001, salary: 3000 },
    { eNo: 1002, salary: 2200 } ]
   */