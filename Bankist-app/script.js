'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

//MAP METHOD
//
const eurToUsd = 1.1;
const mainmoney = movements.map(mov => mov * eurToUsd);

const currency = movements.map(
  (mov, i) =>
    `
  Movement ${i + 1}: you ${mov > 0 ? 'Deposit' : 'Withdrawal'} ${Math.abs(mov)}
  `
);
// console.log(currency);

const calcdisplaysummary = function (movements) {
  const income = movements
    .filter(mov => mov > 0)
    .reduce((acc, curr) => acc + curr);
  labelSumIn.textContent = `${income}`;
};
calcdisplaysummary(movements);

const some_accounts = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split('')
      .map(name => name[0])
      .join('');
  });
};
some_accounts(accounts);
// console.log(accounts);

//FILTER METHOD
// const anyelement = movements.filter(function (move) {
//   return move > 0;
// });
// console.log(anyelement);

// const haveelement = [];
// for (const anyelem of movements) {
//   if (anyelem > 0) haveelement.push(anyelem);
// }
// console.log(haveelement);

// const anielement = movements.filter(movee => movee > 0);
// console.log(anielement);

//REDUCE METHOD
// const budget = movements.reduce(function (acc, curr) {
//   console.log(`iteration ${i} :${acc}`);
//   return acc + curr;
// });
// console.log(budget);

//using arrow function
// const budget = movements.reduce((acc, curr) => acc + curr, 0);
// console.log(budget);

//using for of method
// let budget2 = 0;
// for (const something of movements) budget2 += something;
// console.log(budget2);

//DOM manipulation using reduce method

const show_balance = function (movements) {
  const balance = movements.reduce((acci, curr) => acci + curr, 0);
  labelBalance.textContent = `${balance} RS`;
};
show_balance(account1.movements);

//REDUCE METHOD
// const given = [2, 4, 5, 6, 7, 7];
// const give = given.reduce((acci, movo) => acci + movo);
// console.log(give);

//app part
//PIPELINE
const Euro_to_nepali = 144;
const total_deposit = movements
  .filter(mov => mov > 0)
  .map(mov => mov * Euro_to_nepali)
  .reduce((acc, curr) => acc + curr, 0);
// console.log(total_deposit);

//FIND methods

// const first_withdrawl = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(first_withdrawl);
// console.log(accounts);

// const finding_account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(finding_account);

// // EVENT HANDLER
// let currentAccount;
// btnLogin.addEventListener('click', function (e) {
//   // Prevent form from submitting
//   e.preventDefault();
//   currentAccount = accounts.find(
//     acc => acc.username === inputLoginUsername.value
//   );
//   console.log(currentAccount);
// });

// some and every method

let ages = [10, 23, 19, 20, -10, -90, -35, -42];
const greater = ages.findIndex(greater_age => greater_age > 18);
console.log(greater);

const truth = ages.every(elementss => elementss > 18);
console.log(truth);
const truthi = ages.some(elementss => elementss > 18);
console.log(truthi);

// flat and flatmap

const some_array = [
  [1, 2],
  [4, 5],
  [7, 9],
];
const any_array = some_array.flatMap(function (val, ind) {
  return [val[0] + val[1]];
});
console.log(any_array);

// const any_array = some_array.map(function (val, ind) {
//   return [val[0] + val[1]];
// });
// console.log(any_array);

//If we use map here it will return arrays of arrays but if we use flatMap then it will return flat values with single arrays

//SORTING WITH ARRAYS

let sorted_arr = ages.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (b > a) {
    return -1;
  }
});

console.log(sorted_arr);
console.log(ages.sort()); //this cant sort the negative number so we use above method to sort negative numbers
