//always needed to take input from users
 const ps = require("prompt-sync");
 const prompt = ps();
 
 const menu = () =>
 {
    console.log("________________________");
    console.log("Press 1 to find sum: ");
    console.log("Press 2 to find difference: ");
    console.log("Press 3 to multiply: ");
    console.log("Press 4 to divide: ");
    console.log("Press 5 to find power: ");
    console.log("Press 6 to find modulus: ");
    console.log("Press 7 to find quit: ");
   console.log("________________________");
 }
 
const sum = (a,b) =>
{
    return a+b;
}
const sub = (a,b) =>
{
    return a-b;
}
const mul = (a,b) =>
{
    return a*b;
}
const div = (a,b) =>
{
    return a/b;
}
const modulus = (a,b) =>
{
    return a%b;
}
const power = (a,b) =>
{
    return a**b;
}

menu();

let a = prompt("Enter first number: ");
a = Number.parseInt(a);
let b = prompt("Enter second number: ");
b = Number.parseInt(b);

let choice = 0;
choice = prompt("Enter your choice: ");
choice = Number.parseInt(choice);

while(choice != 7)
{
    if (choice == 1)
        {
            console.log("The sum of " ,a ," and ", b ," is ", sum(a,b));
        }
        if (choice == 2)
        {
            console.log("The difference of " ,a ," and ", b ," is ", sub(a,b));
        }
        if (choice == 3)
        {
            console.log("The product of " ,a ," and ", b ," is ", mul(a,b));
        }
        if (choice == 4)
        {
            console.log("The quotient of " ,a ," and ", b ," is ", div(a,b));
        }
        if (choice == 5)
        {
            console.log("The power of " ,a ," raise to ", b ," is ", power(a,b));
        }
        if (choice == 6)
        {
            console.log("The modulus of " ,a ," and ", b ," is ", modulus(a,b));
        }
        else
        {
             console.log("Invalid choice.");
        }
        choice = prompt("Enter your choice: ");
        choice = Number.parseInt(choice);
}
if (choice == 7)
    {
        console.log("Thank you for using this calculator!");
    }
