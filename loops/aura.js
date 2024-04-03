// program to find sum of n natural numbers

let x = 0;
let n = prompt("enter the number");
input = Number.parseInt(n);

for (let i = 1; i < n; i++) {
  x += i + 1;
}
console.log("the sum of entered " + n + " natural number is  ", +x);

/*
 - THIS is { for in loop }
 - Program to just to print data using for loop

*/
let obj = {
  harry: 89,
  sujal: 90,
  romeo: 91,
  juliet: 97,
};
for (let b in obj) {
  console.log("the scored marks of " + b + " is ", obj[b]);
}

//this is { for of loop }
for (let c of "harry") {
  console.log(c);
}

// program with while loop
let i = 0;
input = Number.parseInt(n);
while (i < n) {
  i += i + 1;
}
console.log("the sum of n natural numbers is", +i);

/*
 Program to print the marks of the student in an object using for loop
 let obi = {
  sujal: 89,
  suhrit: 90,
  silakijawani: 84,
};
for (let a in obi) {
  console.log("the marks of " + a + "is ", obi[a]);
} 
*/

// const joker = ["sujal", "29", "magic"];
// for (let i = 0; i < 3; i++) {
//   console.log(joker[i]);
// }

