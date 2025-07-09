const readline = require('readline-sync');

let hasJavascript = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  "; 
console.log(hasJavascript.includes("JavaScript"));

let codingPosition = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";
console.log(codingPosition.indexOf("Coding"));

let startsWithWelcome = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";
console.log(startsWithWelcome.startsWith("Welcome"));

let endsWithToday = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";
console.log(endsWithToday.endsWith("Today"));



let lowercaseString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";
let lowerCaseText = lowercaseString.toLowerCase();
console.log(lowerCaseText);

let uppercaseString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";
let upperCaseText = uppercaseString.toUpperCase();
console.log(upperCaseText);

let trimmedString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";
let trimmedStringClean = trimmedString.trim()
console.log(trimmedStringClean);

let replacedString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";
let newText = replacedString.replace("JavaScript","coding")
console.log(newText);


let wordsArray = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";
let message = wordsArray.split(" ")
console.log(message);

let firstCharacter = "Welcome to the Coding Bootcamp! Learn JavaScript today.";
console.log(firstCharacter.charAt(0));

let extractedBootcamp = "Welcome to the Coding Bootcamp! Learn JavaScript today.";
let slicedWord = extractedBootcamp.indexOf("Bootcamp");
let extractedWord = extractedBootcamp.slice(slicedWord, slicedWord + 8);

console.log(extractedWord);