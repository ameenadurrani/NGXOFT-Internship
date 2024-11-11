marks = [132,134,23,43,1,34,56];
// the method sort modifies the original array
// it will sort alphabetically
marks.sort();
console.log("Array after sorting: ",marks);

//if you want to sort the array in ascending order
let compare = (a,b)=>
{
    return a-b;
}
marks.sort(compare);
console.log("Array after sorting in ascending order: ",marks);

//if you want to sort the array in descending order
let compare2= (a,b)=>
    {
        return b-a;
    }
marks.sort(compare2);
console.log("Array after sorting in descending order: ",marks);
marks.splice(2,3,102,234,2367,453);
    // the first parameter tell the starting index, 2nd parameter tells the number of values you want to delete 
    //the other values will be added in the array on the index you provided after deleting the no of values you said
    // it will modify the original array   
console.log("Array after splicing: ",marks);

//for each loop
let num = [1,2,3,3];
num.forEach((element)=>
{
    console.log(element*element);
})

//array from(used to create array from any other object)
let name = "Ameena";
let arr = Array.from(name);
console.log(arr);

//for......of loop
for(let i of num)
{
    console.log(i);
}

//for...in loop
for(let i in num)
{
    console.log(i);        //gives the key(index) in case of arrays(to access element using for in loop use num[i])
}

