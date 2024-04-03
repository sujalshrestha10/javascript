//creating objects

let sujal = {
  name: "sujal",
  class: 10,
  subject: "Japanese",
  birthyear: 2020,
  // using functioin in the objects
  newage: function (name) {
    return 2060 - name;
  },
};
console.log(sujal.newage(2030));



