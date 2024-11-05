console.log("Hello World"); //printing hello world
//variables in js
let x = 54; // it is block scoped mostly used after es6 cannot be re declared or but can be updated
//let x = 89; it will throw an error because it is re declared
var y = 90; //not widely used it was used before es6 it is a global variable it can also be re declared.
const z = "Ameena"; //cannot be re declared or updated

// data types (primitive and non primitive)
// primitive
let a = null;   // N null 
let b = 90;  // N number
let c = "ameena";    // S string 
let d = Symbol("This is a symbol");   // S symbol
let e = true;    // B boolean
let f = BigInt(5670);        // B bigInt
let g = undefined;// U undefined it is equal to let g;
console.log(a,b,c,d,e,f,g);
console.log(typeof d);

//objects in js 
let student =
{
    "Name" : "Ameena",
    "RollNo" : 211,
    "CGPA": 3.58,
}
console.log(student["Name"]);
student['Name'] = "Aaabish";
console.log(student);
student = 45;
console.log(student); //if we make const student then we cannot do this but we can change or add the key-value pairs