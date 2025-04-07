
// number => 2 to power 53
let age = 24

// string => 'name' or "name"
let name = 'hari'
let place = "delhi"

// boolean => true or false

// bigint

// null => standalone value
let state = null

// undefined => value not assigned
let marks; // Creating variable and not giving any value.

// symbol => unique

// object

console.log(typeof age)

console.log(typeof null); // object
console.log(typeof undefined); // undefined

// Array

const array = ["ram","manu","gojo"];

// Object

let objectModel = {
    name:"Suma",
    age:23,
    place:"kollam",
}

// Function

const functionModel = function(){
    console.log("Function Model...");
    
}

// ------------------------------------ Memory ------------------------------------------------------

// Stack Memory ( Primitive ) & Heap Memory ( Non-Primitive )

let youtybeName = "simpleLearn"
let newName = youtybeName
newName = "Upskill"
console.log(youtybeName);
console.log(newName);


let userOne = {
    email:"newone@gmail.com",
    age:24,
}

let userTwo = userOne
userTwo.email="newtwo@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


