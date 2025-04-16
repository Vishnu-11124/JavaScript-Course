
// Dates

let myDate = new Date()
console.log(myDate.toString()); // Wed Apr 16 2025 19:44:21 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Wed Apr 16 2025
console.log(myDate.toLocaleString()); // 16/4/2025, 7:44:21 pm

console.log(typeof(myDate)); // object

let createMyDate = new Date(2024,0,25,7,8)
console.log(createMyDate.toDateString()); // Thu Jan 25 2024
console.log(createMyDate.toLocaleString()); // 25/1/2024, 7:08:00 am



let myTime = Date.now()
console.log(myTime); // Date shows in millisecond format. eg: 1744813387757
console.log(createMyDate.getTime());

console.log(Math.floor(myTime/1000)); // Converting time into seconds from milliseconds. eg: 1744813654


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());


