//always needed to take input from users
const ps = require("prompt-sync");
const prompt = ps();

//code to generate a random number between a certain range
const min = 1;
const max = 100;
const num = Math.floor( Math.random() * (max - min) + min);
console.log(num);

let guess;
let chances = 0;

console.log("___________Guess the number________________________");
console.log("We have generated a Random number between 1-100.");
console.log("You have to guess it!");
console.log("More the guesses less the score!!");
console.log("_____________________________________________________");

while(num!=guess)
    {
        guess = prompt("Enter your guess: ");
        if (guess>100 || guess<0)
            {
                console.log("Your number exceeds the range!");
            }
            chances++;
        }

let score = 100 - chances;

console.log("_____________________________________________________");
console.log("You took " + chances + " chances.");
console.log("Your score is: ",score);
console.log("_____________________________________________________");