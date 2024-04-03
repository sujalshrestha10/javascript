let calcAverage = (a, b, c) => (a + b + c) / 3;

const comp = calcAverage(50, 60, 20);
console.log(comp);

//test 1

let scoreDolphin = calcAverage(30, 20, 10);
let scoreKoalas = calcAverage(20, 70, 40);
console.log(scoreDolphin, scoreKoalas);

const checkWinner = function (avgDolphin, avgKoalas) {
  if (avgDolphin >= 2 * avgKoalas) {
    console.log(`Dolphins are the winners (${avgDolphin} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphin) {
    console.log(`Koalas are the winners (${avgDolphin} vs ${avgKoalas})`);
  } else {
    console.log(`No one is winner`);
  }
};
checkWinner(scoreDolphin, scoreKoalas);
checkWinner(10, 60);


//test 2

scoreDolphin = calcAverage(44, 23, 71);
scoreKoalas = calcAverage(8, 54, 4);
console.log(scoreDolphin, scoreKoalas);
checkWinner(scoreDolphin, scoreKoalas);
