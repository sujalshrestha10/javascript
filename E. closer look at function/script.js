"use strict";

const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 299) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
// To override these functional values
createBooking("LH456", 2, 799);

//How passing arguments works value vs reference
const anime = "Naruto";
const main_character = {
  name: "Naurto Uzumaki",
  age: 18,
};

const power = function (main_attack, alternate_attack) {
  main_attack = "Rasengan";
  alternate_attack.name = "Mr." + alternate_attack.name;
  if (alternate_attack.age === 18) {
    //alert("rasengan");
  } else {
    //alert("Wrong attack");
  }
};
power(anime, main_character);
const some_anime = function (shonen) {
  shonen.name = Math.trunc(Math.random() * 1000000);
};
some_anime(main_character);
power(anime, main_character);

const v = (a, b) => a + b;
const Beast = {
  name: "The great Balerion",
};
const computer = (dragon) => {
  dragon.name = "Mr." + dragon.name;
};

computer(Beast);
console.log(Beast.name);
// here it overrides the object name by the value passed in function parameters

//functions Accepting callback functions
const the_word = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const First_word_upper = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};
//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer("Javascript is the best Programming language", First_word_upper);
transformer("Javascript is the best Programming language", the_word);

//JS uses callback function all the time
const cheers = function () {
  console.log("🙏");
};
document.body.addEventListener("click", cheers);
["Ruslan", "Arna", "Mustang"].forEach(cheers);

//functions returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greet_hey = greet("hey");
greet_hey("hey baby");
greet_hey("hey whats up ?? ceiling ??");
greet("hello")("brother");

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name} `);
greetArr("Hello")("Brother");

//The Call and apply Methods

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  //book:function(){}

  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}
  `);
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};
lufthansa.book("125", "Sujal Shrestha");
lufthansa.book("349", "Kalyug ko Bhoot");
console.log(lufthansa);
const eurowings = {
  airline: "Eurowings",
  iataCode: "Ew",
  bookings: [],
};

const book = lufthansa.book; //we can store function book to the new variable and use it anywhere
// book(23, "Brock Lesner"); //this doesnot works
book.call(eurowings, 23, "Brock Lesner");
book.call(lufthansa, 43, "Valadmir Putin");

const swiss = {
  airline: "Qatar AirWays",
  iataCode: "QT",
  bookings: [],
};
book.call(swiss, 69, "Angela Markel");

//Apply Methods
const flightData = [234, "Tom Hardy"];
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData);

//Bind Methods
//book.call(eurowings, 23,'william turner')

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, "Shane Watson");

const cameraMan = {
  firstname: "Jaggu",
  age: 29,
};
let finance = function (place, food) {
  console.log(
    `${this.firstname} is ${this.age} years old and lives in ${place} and always eats ${food}`
  );
};

const director = {
  firstname: "Binod",
  age: 3,
};
finance.call(director, "sahara", "Ramen");

//Difference between call and apply

finance.apply(cameraMan, ["Red Keep", "Burrata"]);

//Now using Bind Methods
let rider = finance.bind(director, "Thankot ", "Margarita ");
console.log(rider);
rider();
//using this bind functino we can directly invoke required function only by using variables

//Closures
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)

// lexical scoping
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
// here we have to call main function to invoke inner funciton
//Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer functions, displayName() can access the variable name declared in the parent function, init().

const bus_today = function () {
  let passenger = 0;
  return function () {
    passenger++;
    console.log(`${passenger} passengers`);
  };
};
let booking_list = bus_today();
booking_list();
booking_list();
booking_list();

//closure is the closed over variable environment of the execution context in which the function was created,even after that execution context (function) is gone

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 3);
  };
};

const h = function () {
  const b = 65;
  f = function () {
    console.log(b * 22);
  };
};

g();
f();
h();
f();

//example 2
const board_passengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we're now boarding all ${n} passangers`);
    console.log(`There are three groups , each with ${perGroup} passangers`);
  }, wait * 1000);

  console.log(`will start boarding in ${wait} seconds`);
};
const perGroup = 1000;
board_passengers(120, 6);

//Function enclosures allows us to access the variable outside of the function too.
//other example
function outer_variable(outside) {
  let contract = "builder"; // This is outside the inner function but it can be accesible outside the inner function too..
  return function innner_variable(inside) {
    console.log("Outer variable:" + outside);
    console.log("Inner variable:" + inside);
    console.log(contract);
  };
}
const new_fun = outer_variable("Bahira jaa");
new_fun("Bhitra aaija");

//coding challange

//change the color of the h1 text using enclosure
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

