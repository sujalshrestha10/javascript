'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return this.starterMenu[starterIndex], this.starterMenu[mainIndex];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    naame = 'sulav',
    address,
  }) {
    console.log(
      `${this.starterMenu[starterIndex]} and ${this.starterMenu[mainIndex]} has been recieved by ${naame} at ${address}.`
    );
  },
};
restaurant.orderDelivery({
  naame: 'sujal shrestha',
  address: 'JalpaTol',
  mainIndex: 1,
  starterIndex: 2,
});
restaurant.orderDelivery({
  mainIndex: 0,
  address: 'china',
});

//LOOPING ARRAYS

const some_menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of some_menu) console.log(item);
for (const item of some_menu.entries()) {
  console.log(item);
}
console.log([...some_menu.entries()]);
/*[
//DESTRUCTURING OF ARRAYS

//Here we are destructuring the array simply for the first and second items in the list
const [first, second] = restaurant.categories;
console.log(first, second);

//Here we are destructuring the array to get third and fourth items in the list
const [, , third, fourth] = restaurant.starterMenu;
console.log(third, fourth);

let [a, b, c, d, e, f] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

//Normal Switching
let tempo = a;
a = b;
b = tempo;
console.log(a, b);

//using destructuring
[a, b] = [b, a];
console.log(a, b);

//call the function in the method of an object with the function order
let [starter, mainCourse] = restaurant.order(0, 2);
console.log(starter, mainCourse);

//for nested array i.e array inside an array destructuring
let nested = [3, 4, 5, [8, 9]];
let [p, , , [r, s]] = nested;
console.log(p, r, s);

//Default values
let [x,m,z,y,o,k=1]=[3,8,9,6,7]
console.log(o,k);
]
*/

/*
[
DESTRUCTURING OF OBJECTS

const { name, order, categories } = restaurant;
console.log(name, order, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//DEFAULT VALUES
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//Mutuating variables
let a = 124;
let b = 343;
let someVariables = { a: 12, b: 14 }; //Assigning the new variables
({ a, b } = someVariables); //adding the parenthesis
console.log(a, b);

//Nested objects
const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close);
]
*/

//                                  [Short circuiting operators]
// restaurant.matrix = 'compana';
// using ternary operator
const Johncena = restaurant.matrix ? restaurant.matrix : 'very cool';
console.log(Johncena);

// using short circuiting technique
const hector = restaurant.matrix || 'not so cool';
console.log(hector);

//NULLISH OPERATOR
//IT  WORKS only if the first value is null or empty("")

//EXAMPLE
//  restaurant.manmade = 'garciaa';   (if defined then the default value wont be displayed)
const gambit = restaurant.manmade ?? 'not tasty';
console.log(gambit);

//LOGICAL OPERATORS
//We can use OR and AND Operator for short circuting .. directly

let any_obj = {
  Name: 'Baki',
  Surname: 'Hanma',
  Profession: 'Farmer',
};
let another_obj = {
  Name: 'Gojo',
  Surname: 'Satouru',
};

console.log((any_obj.Profession ||= 'Police'));
console.log((another_obj.Profession ||= 'Police'));

//here we did the short circuiting i.e when Profession is declared already the value is not changed in the first object meanwhile when the profession is not declared in the second object , the value is changed.

//In OR assingnment operator , it checks wheather the value is defined but In case of AND assignment operator we replace the value like:-

const dynamite = (any_obj.Profession &&= 'Granade');
console.log(dynamite);

//coding challanges
/*1. Create one player array for each team (variables 'players1' and 
'players2')
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players
3. Create an array 'allPlayers' containing all players of both teams (22 
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: '   Nov 9th,2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [goalkeeper, ...fieldPlayers] = players1;
console.log(goalkeeper, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored.`);
};

//7.
printGoals(...game.scored);
team1 < team2 && console.log('team1 will more likely to win');
team2 < team1 && console.log('team2 will more likely to win');

//optional chaining(?.)

const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined

//Maps
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze,Italy'); //In Objects we cant use integers as key value
rest.set(2, 'Lisbon,Portugal');
console.log(rest.set(2, 'Lisbon,Protugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegan', 'Origano'])
  .set('open', 11)
  .set('close', 7)
  .set(true, 'Yup we are open for fun')
  .set(false, `nope you can go home we're off`);

console.log(rest.get('name'));
console.log(rest.get(1));
console.log(rest.get(true));

const time = 5;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
const gordon = [1, 2];
rest.set(gordon, 'Lion'); // Here "Lion" denotes [1,2] which are represented by gordon
console.log(rest.get(gordon));

const question = new Map([
  ['question', 'What is your name ?'],
  [1, 'Michael'],
  [2, 'Itachi'],
  [3, 'Asta'],
  ['correct', 2],
  [true, 'correct'],
  [false, 'Try again'],
]);
console.log(question);

//Converting Objects into maps
console.log(Object.entries(game));
const someplayers = new Map(Object.entries(game));
console.log(someplayers);

//Maps iteration
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`the answer is ${key}:${value}`);
}
//const answer = Number(prompt('Your Answer'));
//console.log(answer);
//console.log(question.get(question.get('correct') === answer));

//coding challanges 3

//1>.. create an array 'events of the different game events that happened' no duplicates

const gameEvents = new Map([
  [12, 'Goal'],
  [31, 'Substitution'],
  [43, 'Goal'],
  [46, 'Substitution'],
  [43, 'Substitution'],
  [56, 'Goal'],
  [64, 'Yellow Card'],
  [78, 'Goal'],
]);

//2.. After the game has finished, remove yellow card event from the game
const game_arr = new Set(gameEvents.values());

//3.print the following average in 90 minutes
const remove_card = gameEvents.delete(64);
console.log(gameEvents);
console.log(
  `An event happened,on average,every ${90 / gameEvents.size} minutes`
);
//4..loop over the events and log the to the consoloe, marking whether it's in the first half or second half
//(after 45 min)of the game like this
// [FIRST HALF]17:gOAL
for (const [minute, event] of gameEvents) {
  const half = minute < 45 ? 'First' : 'Second';
  console.log(`${half} HALF:${minute}:${event}`);
}

//String parameters
//they are used to pass a string , or sequence of characters, to a functions or methods

const songs = 'Despacito yo yo honey singh';
console.log(songs[1]);
console.log(songs.length);
console.log(songs.indexOf('c'));
console.log(songs.lastIndexOf('y'));

//Slice
console.log(songs.slice(4)); //here the 3 letters of stirng from beginning is sliced up
console.log(songs.slice(2, 4)); //here we sliced 2 letters from index 2 to index 4
console.log(songs.slice(-2)); //with this (-) we can pop out the last index of given index

//function using slice
const song = function (genre) {
  const y = genre.slice(-1);

  if (y === 'R' || y === 'S') console.log('its either rap song or sad song');
  else console.log('it is common song');
};
song('despacito R');
song('taki taki R');
song('kaise hua');

// converting into Lowercase
const correction_lower = songs.toLowerCase();
console.log(correction_lower);
const finale = songs[0].toUpperCase() + songs.slice(1);
console.log(finale);
//here we converted first letter of songs to uppercase and added to the sliced part of songs

//replace
const priceNp = 'the currency is $';
console.log(priceNp.replace('$', 'NRs'));
//includes() shows either true or false
//startsWith()
//endsWith()
//works accordingly

//split
//using function

const newName = function (nameee) {
  const actual_namee = nameee.split([' ']);
  const store_name = [];
  for (const n of newName){
    store_name.push()
  }
};
newName('Sujal Shrestha')