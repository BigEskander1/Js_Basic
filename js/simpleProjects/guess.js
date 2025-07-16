const min = 1;
const max = 10;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);


let guess = Number(prompt("Enter a number between 1 and 10:"));
while (guess !== randomNum) {
    if (guess > randomNum) {
        console.log("Too high! Try again.");
    } else {
        console.log("Too low! Try again.");
    }
    guess = Number(prompt("Enter a number between 1 and 10:"));
}
console.log("Congratulations! You guessed the number!");