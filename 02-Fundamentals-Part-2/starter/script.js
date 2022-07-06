"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

//const interface = 'Audio';
//const private = 534;
//const if = 23;



function logger() {
  console.log("My name is Jonas.");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

//function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);



//Arrow Function

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));



function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));



const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));

*/
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const averageDolphins1 = calcAverage(44, 23, 71);
console.log(averageDolphins1);

const averageKoalas1 = calcAverage(65, 54, 49);
console.log(averageKoalas1);

checkWinner(averageDolphins1, averageKoalas1);

//Test 2
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));

function checkWinner(averageDolphins, averageKoalas) {
  if (averageDolphins >= 2 * averageKoalas) {
    console.log(`Dolphins win! (${averageDolphins} vs. ${averageKoalas})`);
  } else if (averageKoalas >= 2 * averageDolphins) {
    console.log(`Koalas win! (${averageKoalas} vs. ${averageDolphins})`);
  } else {
    console.log("No one wins. Better luck next year.");
    console.log(averageDolphins, averageKoalas);
  }
}

*/
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];

console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
//friends = ["Bob", "Alice"]

const firstName = "Jonas";
const Jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];

console.log(Jonas);
console.log(Jonas.length);

//Exercise

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

*/
/*
const friends = ["Michael", "Steven", "Peter"];
//add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Remove Elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven.");
}

*/
/*
function calcTip(bill) {
  let tip = 0.2;
  if (50 <= bill && bill <= 300) {
    tip = 0.15;
  }
  return tip;
}

console.log(calcTip(1000));

const bills = [125, 555, 44];
const tips = [];

const total = [];
let i = 0;
let t = 0;

while (bills.length > i) {
  tips.push(calcTip(bills[i]) * bills[i]);
  i++;
}

while (bills.length > t) {
  total.push(bills[t] + tips[t]);
  t++;
}

console.log(bills, tips, total);
*/

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";

console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

//console.log(jonas."last" + nameKey);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );

// if (jonas(interestedIn)) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request. Choose between firstName, lastName, age, job, and friends"
//   );
// }

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtmann";
console.log(jonas);

//"Jonas has 3 friends, and his best friend is called Michael"

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
cd;
