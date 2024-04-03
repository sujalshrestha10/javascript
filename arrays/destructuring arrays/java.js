const restaurant = {
  Name: ["sujal shrestha"],
  Address: ["Pyuthan", "Butwal"],
  position: ["owner", "producer", "cashier"],
};

const [name] = restaurant.Name; //simple calling the the object

const [,lastaddress] = restaurant.Address; //calling direct second address using comma

console.log(lastaddress);

let [a, , c] = restaurant.position; //calling the first and last method
console.log(a, c);
