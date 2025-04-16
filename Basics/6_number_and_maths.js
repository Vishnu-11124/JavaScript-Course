const number = 232
// console.log(number);

const balance = new Number(200); //  Specifying that the variable is number.
// console.log(balance);

// console.log(balance.toString()); // Converting number into string.
// console.log(balance.toFixed(2)); // Used for precision value.

const otherNumber = 578.8564
// console.log(otherNumber.toPrecision(4)); // 578.8 Rounding from start of the number

const salary = 1000000
// console.log(salary.toLocaleString('en-IN')); // Representing the value in terms of indian number system. eg: 10,00,000


// ++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++

// console.log(Math); 
// console.log(Math.abs(-5)); // Evaluating the absolute value.
// console.log(Math.round(7.4)); // The value to be rounded to the nearest integer.
// console.log(Math.ceil(4.2));  // Rounding to greater value
// console.log(Math.floor(4.6)); // Rounding to smallerr value
// console.log(Math.max(4,8,6,1)); // Finding maximum value.
// console.log(Math.min(4,8,6,1)); // Finding minimum value.

console.log(`The random value is ${Math.random()}`); // The value between 0 to 1.
console.log((Math.random()*10) + 1); // Now the result will be greater than zero.

const min = 10
const max = 20

console.log(`The value is ${Math.floor(Math.random() * (max - min + 1.)) + min}`)








