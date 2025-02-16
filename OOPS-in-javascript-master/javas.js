//  CONSTRUCTER FUNCTIONS AND NEW OPERATOR

const anyone = function (name, address, first_person_age) {
  this.firstname = name;
  this.his_address = address;
  this.first_person_age = first_person_age;
};

const person = new anyone("Sujal", "Butwal", 1997);
console.log(person);

//1. New {} is created
//2. function is called,this={}
//3. {} linked to the prototype
//4. function automatically return {}

const another_person = new anyone("Robert", "New Jersey", 2030);
const person_2 = new anyone("Martin", "Miami", 2010);
console.log(another_person, person_2);

//here person,another_person , person_2  are the instance of anyone
//Next thing to be noted is that we should not create any method inside the constructor cause it carry the method for all other instances.

//Prototypes
//Prototypes are the objects that are linked to the constructor functions.

console.log(anyone.prototype);

anyone.prototype.calcAge = function () {
  console.log(2037 - this.first_person_age);
};
person.calcAge();
another_person.calcAge();
console.log(person.__proto__);
console.log(person.__proto_ === anyone.prototype);
console.log(anyone.prototype.isPrototypeOf(person));
console.log(anyone.prototype.isPrototypeOf(person_2));

//.PrototypeOfLinkedObjects

anyone.prototype.species = "Homo Sapiens";

console.log(person.hasOwnProperty("species"));
//Objects has own property that are directly declared in the objects itself but also we can add the property just like shown in above example
//to check the property is own property of object or it is added we check by hasOwnProperty method
