let mark = {
  Name: "Mark Henry",
  mass: 78,
  Height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.Height ** 2;
    return this.bmi;
  },
};
let john = {
  Name: "John Carteer",
  mass: 92,
  Height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.Height ** 2;
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.Name} bmi ${mark.bmi} is higher than ${john.Name} bmi${john.bmi}`
  );
} else {
  console.log(
    `${john.Name} bmi ${john.bmi} is higher than ${mark.Name} bmi${mark.bmi}`
  );
}
