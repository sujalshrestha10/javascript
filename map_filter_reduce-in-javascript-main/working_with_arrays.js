//In JavaScript, map is a built-in method used to create a new array by applying a function (callback) to each element of the original array. It's a versatile tool for transforming arrays without modifying the original one.

//Steps;
///Iteration: map iterates over the original array.
/*Callback Execution: For each element:
The callback function is called, passing the current element as an argument (along with optional index and entire array).
The return value from the callback is added to a new array.
New Array Creation: After iterating through all elements*/

//Examples
//DOUBLING THE NUMBERS
let numbers = [1, 2, 3, 4, 5];
let double_numbers = numbers.map((numbers) => numbers * 2); //[2, 4, 6, 8, 10
console.log(numbers);
console.log(double_numbers);
//CAPITALIZATION
let words = ["apple", "banana", "cherry"];
let capital = words.map((words) => words.toUpperCase());
console.log(words);
console.log(capital);

//FILTERS
// here  we are going to filter out any number that is divisible by two and not even
const arr = [1, 2, 3, 4, 5, 6, 7];
function even(arr) {
  return arr % 2;
}
console.log(arr.filter(even));

//REDUCE
//Example (Finding the Sum of Numbers):

const numberss = [1, 2, 3, 4, 5];

const sum = numberss.reduce(
  (accumulator, numberss) => accumulator + numberss,
  0
); // Initial value of 0 for summation

console.log(sum); // Output: 15
/*Explanation:

The callback function (accumulator, number) => accumulator + number adds the current number to the accumulator (sum).
The initial value 0 is provided for the accumulator, starting the summation from zero.*/
//askfj
//safioi
//igai
//alsigjaoiegjiojgojgreaoijgaiegoiehgagisgdghoangoaei
//salfiuhaiufiaufj