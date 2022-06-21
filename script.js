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

const age = 15;
const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Sarah can start driving! 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Sarah is not old enough to drive! Wait another ${yearsLeft} years 🚫`
  );
}
