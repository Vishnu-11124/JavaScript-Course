
// console.log(2 > 1)
// console.log(2 < 1)
// console.log(2 <= 1)
// console.log(2 >= 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1) // true
// console.log("02" > 1) // true


// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

// The reason is that an equality check == and <,>,<= & >= work differently.Comparisons convert null to a number,treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false. 


// === (strict comparison)

console.log("2" == 2); //true
console.log("2" === 2); //false
