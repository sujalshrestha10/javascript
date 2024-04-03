const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
console.log(calcTip(60));

const bills = [140, 50, 70];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

// create a function to input strings and  take output only vowels

// function stringwewant(x) {
//   let vowels = 0;
//   for (let i = 0; i < x.length; i++) {
//     if (
//       x[i] === "a" ||
//       x[i] === "e" ||
//       x[i] === "i" ||
//       x[i] === "o" ||
//       x[i] === "u"
//     ) {
//       vowels++;
//     }

//   }
//   return vowels;
// }

// Challenge 3: Write a function that takes an array of numbers as input and returns a new array with all the negative numbers removed.

// function arrnum(arr) {
//   let arrNew = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//       arrNew.push(arr[i]);
//     }
//   }
//   return arrNew;
// }
// console.log(arrnum([1, 2, 3, 4, -2, -4, 6, -5]));

// Challenge 4: Write a function that takes a string as input and returns a new string with all the uppercase letters converted to lowercase and all the lowercase letters converted to uppercase.

// function oldarr(arr) {
//   let stri = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == arr[i].toUpperCase()) {
//       stri += arr[i].toLowerCase();
//     } else {
//       stri += arr[i].toUpperCase();
//     }
//   }
//   return stri;
// }
// console.log(oldarr("conicCHIwa"));
