//always needed to take input from users
const ps = require("prompt-sync");
const prompt = ps();

let marks = [96,56,94,92,59,"absent"];  //array
console.log(marks[0]);  //printing a specific index
console.log("The length of the array is : ",marks.length);
// you can add value to an array 
marks[6] = 56;
// you can change value in the array . arrays are mutable while strings are immutable
marks[4] = 79;
console.log(marks);
//printing an array using loop
console.log("Printing array using for loop:");
for(let i =0; i<marks.length;i++)
{
    console.log(marks[i]);
}
console.log("The type of array is: ",typeof marks);

//array methods
//pop
r = marks.pop();     //it returns the popped value and the original array is changed
console.log("Array after popping the element is : ",marks);
console.log("The element popped is: ",r);

//push
a = prompt("Enter the marks of another student: ");
//adding those marks in the array
a = Number.parseInt(a);
marks.push(a);  //it returns the new array length 
console.log("Array after pushing the element is : ",marks);
console.log("The element pushed is: ",a);

//shift
//it removes first element in the array
s = marks.shift();  //it returns the first element
console.log("Array after shifting the element is : ",marks);
console.log("The element shifted is: ",s);

//unshift
//id add a new element at the start of the array
let u = prompt("Enter the marks: ");
u = Number.parseInt(u);
marks.unshift(u);  //it returns the new length of the array
console.log("Array after unshifting the element is : ",marks);
console.log("The element un-shifted is: ",u);

//delete method 
console.log("The length before deleting: ",marks.length);
delete marks[0];
console.log("Array after deleting the element from 0th index is : ",marks);
//the length of the array will remain the same
console.log("The length after deleting: ",marks.length);

//concat 
//you can make a new array by concating two or more arrays it will not change the original array
marks2 = [23,36,28,28,96];
total = marks.concat(marks2);
console.log("The concatted array is: ",total);


