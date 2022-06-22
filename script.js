// let js = "amazing";
// if (js === "amazing") alert("hello!");
// console.log(40 + 8);

// let firstName = "trina";
// console.log(firstName);

// let country = "USA";
// let continent = "North America";
// let population = "380 million";

// console.log(country);
// console.log(continent);
// console.log(population);

// const currentYear = 2022;
// const ageTrina = currentYear - 1982;
// console.log(ageTrina * 2, ageTrina / 2);
// console.log(firstName + country);

// const ageSarah = now - 2014;
// //assignment operators
// let x = 10;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;

// //comparison operators
// console.log(ageTrina > ageSarah);
// //>, <, >=, <=

// const markHeight1 = 1.69;
// const markMass1 = 78;

// const johnHeight1 = 1.95;
// const johnMass1 = 92;

// const markHeight2 = 1.88;
// const markMass2 = 95;

// const johnHeight2 = 1.76;
// const johnMass2 = 85;

// const markBMI1 = markMass1 / (markHeight1 * markHeight1);

// const johnBMI1 = johnMass1 / (johnHeight1 * johnHeight1);

// const markBMI2 = markMass2 / (markHeight2 * markHeight2);

// const johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);

// console.log(markBMI1);
// console.log(johnBMI1);
// console.log(markBMI2);
// console.log(johnBMI2);

// const firstName = "Trina";
// const job = "student";
// const birthYear = 1982;
// const year = 2022;

// const trina =
//   "I'm " + firstName + ", a" + (year - birthYear) + "years old" + job + "!";
// console.log(trina);

// //template literal make the above easier
// //interpolation

// const trinaNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(trinaNew);

// console.log(`can use backticks for any regular string`);
// console.log(`string
// with
// mulitple
// lines`);

// const age = 15;
// const isOldEnough = age >= 18;

// if (age >= 18) {
//   console.log("Sarah can start driving! 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(
//     `Sarah is not old enough to drive! Wait another ${yearsLeft} years 🚫`
//   );
// }
// const birthYear = 1999;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(`You were born in the ${century} th/st century!`);

const markHeight1 = 1.69;
const markMass1 = 78;

const johnHeight1 = 1.95;
const johnMass1 = 92;

const markHeight2 = 1.88;
const markMass2 = 95;

const johnHeight2 = 1.76;
const johnMass2 = 85;

const markBMI1 = markMass1 / (markHeight1 * markHeight1);

const johnBMI1 = johnMass1 / (johnHeight1 * johnHeight1);

const markBMI2 = markMass2 / (markHeight2 * markHeight2);

const johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);
const markHigherBMI = markBMI1 > johnBMI1;

console.log(markBMI1);
console.log(johnBMI1);
// console.log(markBMI2);
// console.log(johnBMI2);
// console.log(markHigherBMI);

if (markBMI2 > johnBMI2) {
  console.log(`Mark's BMI (${markBMI1}) is higher than Johns!`);
} else {
  console.log(`Johns (${johnBMI1}) BMI is higher than Marks!`);
}

//converting a string from user input into a number
//for calculations

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

//type coercion
console.log("I am " + 23 + " years old");
//string, number, string
//in above example, number will be convertd to string; + operator will convernt number to string

//JS will convert strings to numbers when using the minus operator

console.log("12" - "10" - 3);
console.log("23" * "2");
//will convert from strings to numbers

//equality operators
const age = 18;
if (age === 18) console.log("you just became an adult");
// always use strict equality operator === JS does not perform type coercion on this
// avoid loose equality operator == JS does perform type coercion  so '19' == 19
//would be true

const favorite = Number(prompt("Guess the number between 1-30."));
console.log(typeof favorite);
if (favorite === 23) {
  console.log("You guessed it!");
} else if (favorite === 7) {
  console.log("You guessed it!");
} else {
  console.log("Sorry. Try again.");
}

if (favorite !== 23) {
  console.log("Try number 23.");
}

//boolean logic; AND OR and NOT operators
// AND operator returns true only if A and B are both true
// if either A or B are false, then A and B will be false

//OR operator; true if either A or B variables is true;

//NOT operator; acts on only one boolean value and inverts it. so if A is true, it will become false.

age = 16;

//A variable  age is great or equal to 20 (false)
// B variable agee is less than 30 (true)

//!A (false)
//so result of !A is true

//A AND B (false and true)
//result is false

//A OR B (false or true)
//result is TRue since one variable is true

//!A AND B (true and true)
//result is true

//A or !B (false and false)
//result is false
