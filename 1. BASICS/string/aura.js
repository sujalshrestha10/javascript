let suri = "human";
let wanda = "seucy";
let gobar = `${suri} is ${wanda}`; // this is called template literals
console.log(gobar); // output : human is seucy

let vision = "blind'nigga"; // here \'  is the escape sequence.
console.log(vision); //output will be: blind'nigga
// some other escape sequence are
/* 
    \n : new line
    \t : tab
    \r :return carriage 
*/

// STRINGS METHODS AND PROPERTIES

let namikage = "Beele";
console.log(namikage.length); //it will find length of the string
console.log(namikage.slice(1, 4)); //output:eel
// slice means to obtain the needed string from given string

console.log(namikage.replace("Beel", "jel"));
//replace the string

console.log(namikage.concat(" provides ", " honey "));
//use to add the stirngs in the variables
