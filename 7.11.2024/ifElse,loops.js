//always needed to take input from users
const ps = require("prompt-sync");
const prompt = ps();


let age = prompt("Enter your age: ")
//if we take input from user it will always be a string type

age = Number.parseInt(age);   //converting the string into number
if(age>=18)
{
    console.log("You are eligible for driving!");
}
else if(age<18 && age>0)
{
    console.log("You are not eligible for driving!");
}
else 
{
    console.log("Invalid age!");
}

//using switch case
switch(true)
{
    case age>=18:
        console.log("You are eligible for driving!");
         break;

    case age<18:
        console.log("You are not eligible for driving!");
        break;
}
//ternary operator
console.log("You can ",(age>=18? "drive." : "not drive."));  //condition ? exprIfTrue : exprIfFalse

//for loops
let sum = 0;
for (let i = 0;i < 5; i++)
{
    sum = sum + i;
}
console.log("Sum: ",sum);

// //for in loop
let marks =
{
    Ameena : 99,
    Aabish : 100,
    Fatima : 34
}
for(let a in  marks)
{
     console.log("Marks of " + a + "are ",marks[a]);
}

// //for of loop
for(let b of "Ameena")
{
    console.log(b);
}

//while loop
let n = prompt("Enter a number: ");
n = Number.parseInt(n);
let i = 0;
let sum = 0;
while(i<n)
{
   sum = sum + i;
   i++
}
console.log("The sum of first " + n + " natural numbers is: ",sum);

//do while will always execute once

//functions
function sum(a,b)
{
    return a+b;
}
console.log(sum(9,1));

//arrow function
const sum = (a,b) =>
{
    return a+b;
}
console.log(sum(34,5));

