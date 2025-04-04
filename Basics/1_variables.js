
const accountId = 12382;  //We can't modify the value of const variable.
// accountId = 10;

let accountEmail = "gojo@gmail.com";
accountEmail = 'newgojo@gmail.com'; // Updating email address

var accountPassword = "gojo2341";
accountPassword = 'newgojo2341' // Updating password

// We are able to create variables like this in JS.Don't use this method.
accountCity = 'delhi'; // updating city
accountCity = 'jaipur';

console.log(`AccountId= ${accountId}`);
console.table([accountId,accountEmail,accountPassword,accountCity]);


