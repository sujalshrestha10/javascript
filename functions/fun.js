// Below (a,b) are the parameters
function sum(a, b) {
  return a + b;
}
// for round off results we use math.round(operation)

let x = 3;
let y = 4.5;
let z = 6;

console.log("the sum of x and y is", sum(x, y));
console.log("the sum of x and y is", sum(z, y));

let g = 45;
let e = 78;
function addi(a, b) {
  return a + b;
}
console.log("the addition is ", addi(g, e));

function fruits(apples, mangoes) {
  console.log(apples, mangoes);
  const juice = `juice with ${apples} apples and ${mangoes} mangoes`;
  return juice;
}
const frooti = fruits(10, 20);
console.log(frooti);

//Arrow function

function age(birthyear, retirementage) {
  const realage = 2080 - birthyear;
  const retirement = retirementage - realage;
  return (realage, retirement);
};
const age2 = age(2060, 60);
console.log(
  `randy who is ${birthyear} years old is retiring in next ${retirement} years. `
);
