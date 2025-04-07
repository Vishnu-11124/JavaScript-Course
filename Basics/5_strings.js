
// "string" or 'String'

const userName = "hakim"
const repoCount = 40

console.log(`Hi,my name is ${userName} and my repo count is ${repoCount}.`); 

console.log(userName.length); // Total length of the string
console.log(userName.toUpperCase()); // Converting string into uppercase

const gameName = "Roger-Joyboy"
console.log(`Game Name = ${gameName}`);


const substring = gameName.substring(0,5) // Dividing the string
console.log(`Substring Name = ${substring}`);

const anotherName = gameName.slice(-6) // Dividing the string and also we can use negative values.
console.log(`Another Name is ${anotherName}`);

const newName = "   Gojo   "
console.log(`My newName is ${newName}.`);
console.log(`My trimed newName is ${newName.trim()}.`); // trim() : Removes the  starting and ending white spaces from the string.

const url = "https://varun.com/varun%30harshit"

console.log(`Here is my url ${url}.`);
console.log(`Here is my original url ${url.replace('%30','-')}.`); // replace() : Replacing string with another.

console.log(`My gameId is ${gameName}.`);
console.log(`My gameId after splitting is ${gameName.split('-')}.`); // split() : Splitting the string based on some parameter like white spaces,-,etc.







