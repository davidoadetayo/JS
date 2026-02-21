// In JavaScript, you can choose single quotes ('), double quotes ("), or backticks (`) to wrap your strings in. All of the following will work:
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

// You must use the same character for the start and end of a string, or you will get an error
// const badQuotes = 'This is not allowed!";


// Inside a template literal, you can wrap JavaScript variables or expressions inside ${ }, and the result will be included in the string:
const fname = "Chris";
const greeting = `Hello, ${fname}`; 
console.log(greeting); // "Hello, Chris"

// You can use the same technique to join together two variables:
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"