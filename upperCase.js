// Example 1: Basic usage
let userName = prompt("What is your name?");
if (userName) {
  console.log("Hello, " + userName + "!");
} else {
  console.log("You didn't enter your name.");
}

// Example 2: Prompt with a default value
let age = prompt("How old are you?", "18");
if (age) {
  console.log("You are " + age + " years old.");
} else {
  console.log("No age provided.");
}

// Example 3: Using prompt for numeric input
let number = prompt("Enter a number:");
if (number !== null) {
  let doubled = Number(number) * 2;
  console.log("Double of your number is: " + doubled);
} else {
  console.log("You canceled the input.");
}