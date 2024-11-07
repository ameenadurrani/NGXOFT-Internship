console.log("Arithmetic Operators in JS");
let a = 23;
let b = 3;
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log("a ** b = ", a**b);
console.log("a % b = ", a%b);
console.log("a++ = ", a++);
console.log("++a = ", ++a);
console.log("a-- = ", a--);
console.log("--a = ", --a);
console.log("a = ", a);

console.log("Assignment Operators in JS");
let c = 4;
console.log("c is: ",c);
c+=5; //c = c + 5
console.log("c is now(c+=5): ",c);
c-=5; //c = c - 5
console.log("c is now(c-=5): ",c);
c*=5; //c = c * 5
console.log("c is now(c*=5): ",c);
c/=5; //c = c / 5
console.log("c is now(c/=5): ",c);
c%=5; //c = c % 5
console.log("c is now(c%=5): ",c);
c**=5; //c = c ** 5
console.log("c is now(c**=5): ",c);

console.log("Comparison Operators in JS");
let d = 4;
let e = 7;
console.log("d == e is ", d==e);    //if d = 6 and e ='6' it will give true but e===d will give false because they have different types
console.log("d != e is ", d!=e);     //if d = 6 and e ='6' it will give false but e!==d will give false because they have different types
console.log("d === e is ", d===e);    
console.log("d !== e is ", d!==e);    


//logical operators
//&& and (it will be true if both the conditions will be true)
//|| or (it will be true if one of the conditions will be true)
//! not (it will negate the condition)

//taking input from user in terminal (npm install prompt-sync)
const ps = require("prompt-sync");
const prompt = ps();
let name = prompt("Enter your name: ");
console.log(`Hello, ${name}`);
let age = prompt("Enter your age: ");
console.log(`You are ${age} years old.`);
