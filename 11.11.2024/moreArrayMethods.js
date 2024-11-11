let num = [1,2,3,4,5];
num.forEach((element)=>
{
    console.log(element*element);    // it performs some functions on the array element
}) //in this case array will remain the same
let a = num.map((value)=>
{
   return value*value;          //it returns a new array after performing some function
})

//you can use 3 arguments in forEach and map (value index array)
 

//filter method

//filter an array with values that passes the text
let arr = [34,56,78,1,2,5,8,12];
let b = arr.filter((value)=>
{
    return value < 10;
})
console.log(b);  //it will return a new array

//reduce method 
//reduce an array to a single value

let sum = arr.reduce((h1,h2)=>
{
    return h1+h2;
})
console.log(sum);