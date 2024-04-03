// sorting the array in random order

let jai = [1, 3, 5, 36, 7, 4, 3];
let car = () => {
  for (let i = jai.length - 1; i > 0; i--) {
    let p = Math.floor(Math.random() * (i + 1));
    let k = jai[p];
    jai[p] = jai[i];
    jai[i] = p;
  }
  console.log(jai);
};
