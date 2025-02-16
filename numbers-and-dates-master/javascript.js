//Conversion of string to numbers
console.log(Number("23"));
console.log(+"23");

//Parsing
console.log(Number.parseInt("30px"));
console.log(Number.parseFloat(30.5));
// console.log(Number.parseInt("e30px"));  [This doesnt work]

console.log(Number.isNaN(20));
console.log(Number.isFinite(20 / 0));
console.log(Number.isInteger(20.3));

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));

//ROUNDING THE INTEGERS
console.log(Math.max(2, 3, 4, 7, 5, 9));
console.log(Math.trunc(34.34));
console.log(Math.round(34.78));
console.log(Math.floor(34.78));
console.log(Math.ceil(34.78));

//floor and trunc seems same but it provides different values for negative numbers

console.log(Math.floor(-34.78));
console.log(Math.trunc(-34.78));

//ROUNDING THE DECIMALS
console.log((5.3).toFixed(3));
console.log((5.398).toFixed(2));

//NUMERIC SEPARATORS

const diameter = 7_232_253_237_637;
console.log(diameter);
//console will read all these numbers seprated by underscore at once

// BIG INT
console.log(2 ** 53 - 1); //this is the max integer number javascript can represent
console.log(Number.MAX_SAFE_INTEGER);

const BIG_INT = BigInt(45245363636);
console.log(BIG_INT);
const num = 23;
console.log(BigInt(num)); //this will convert number to big int
console.log(BigInt(num) * BIG_INT);

const date = new Date();
console.log(date); //this will give current date and time

setTimeout(() => console.log("here is your pen "), 3000);
