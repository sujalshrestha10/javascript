/* ARRAYS :-
      Array is used to store more than one value to the variables 
*/

// Example

let suj = ["sujal", "shrestha", "Husky", 5];
console.log(suj[2]); // output will be Husky

// print all elements of array using for loop
let conco = ["sujal", "shrestha", "Husky", 5, 6, 7, 8, 9];
for (let i = 0; i < 8; i++) {
  console.log(conco[i]); // prints the values in an array of conco
}

// ARRAY METHODS

// toString()
let numnum = [1, 2, 3, 4, 5];
let fufa = numnum.toString();
console.log(fufa); //output will be [1,2,3,4,5] but it is converted into string not integers

//join() :- it helps to join the element in an array using any seprator we want as follows
let kuda = ["cry", "baby", 45, 3, 4, "anda"];
let a = kuda.join("--");
console.log(a); // output will be 1--2--3--4--5

//pop() :- removes the last element of an array
let b = kuda.pop();
console.log(kuda, b); // output will be["cry", "baby", 45, 3, 4]  "anda"

//push()
kuda.push("VATI");
console.log(kuda); //output will be ["cry", "baby", 45, 3, 4, "anda", 'VATI']

//shift() :- Removes first element and return it
let dra = kuda.shift();
console.log(kuda, dra);

//unshift() :- adds element to the begining and return new array length
let p = kuda.unshift("circus");
console.log(kuda, p);

//delete :- array elements can be delete using delete operator
delete kuda[2];
console.log(kuda);

//concat :- used to join arrays in the given arrays
let ding = [1, 2, 3, 4, 5, 5, 6, 76, 7];
let bino = [3, 4, 5, 6, 7, 3, 3, 556, 6];
let con = [3, 4, 5, 6, 65, 4, 4, 3];
let newarray = ding.concat(bino);
let newmorearray = ding.concat(newarray);
console.log(newmorearray);

//length:- it is used to add the elements in an array without using the push ()method
let areo = [1, 2, 5, 3, 2, 5];
areo[areo.length] = "pimp";
console.log(areo);

//sort :-sorting the array in alphabetical order
let poni = [1, 4, 3, 2, 6, 8, 9, 7, 6, 0];
poni.sort();

console.log(poni);

let coni = (a, b) => {
  return b - a;
};
let nepo = [2, 3, 4, 2, 1, 6, 8, 7, 66, 55, 43, 56];
nepo.sort(coni);
console.log(nepo);

nepo.reverse();
console.log(nepo);

//splice and slice

//splice :-
//used to add elements in an array
nepo.splice(2, 3, 9, 9, 9);
console.log(nepo);

//slice :- slice out the needed element in an array
let k = nepo.slice(3, 5);
console.log(nepo);

const arr = [1, 2, 3, 4];
console.log(arr.at(0)); // Here at is the array method
console.log(arr.slice(-1)[0]); //Slice means to extract out the required output

