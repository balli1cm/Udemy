// "use strict";

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
// }

// const Canada = describeCountry("Canada", 38, "Ottawa");
// console.log(Canada);

// const Mexico = describeCountry("Mexico", 128, "Mexico City");
// console.log(Mexico);

// const Spain = describeCountry("Spain", 47, "Madrid");
// console.log(Spain);

// function percentageOfWorld1(population) {
//   const percentage = Number(((population / 7900) * 100).toFixed(2));

//   return percentage;
// }

// const popSpain = percentageOfWorld1(47);
// const popCanada = percentageOfWorld1(38);
// const popMexico = percentageOfWorld1(128);
// console.log(popSpain, popCanada, popMexico);

// const percentageOfWorld2 = function (population) {
//   return Number(((population / 7900) * 100).toFixed(2));
// };

// const popSpain2 = percentageOfWorld2(47);
// const popCanada2 = percentageOfWorld2(38);
// const popMexico2 = percentageOfWorld2(128);
// console.log(popSpain2, popCanada2, popMexico2);

// const percentageOfWorld3 = (population) =>
//   Number(((population / 7900) * 100).toFixed(2));

// const popSpain3 = percentageOfWorld2(47);
// const popCanada3 = percentageOfWorld2(38);
// const popMexico3 = percentageOfWorld2(128);
// console.log(popSpain3, popCanada3, popMexico3);

// function describePopulation(country, population) {
//   return `${country} has ${population} people, which is about ${percentageOfWorld1(
//     population
//   )}% of the world.`;
// }

// const popSpain4 = percentageOfWorld2(47);
// const popCanada4 = percentageOfWorld2(38);
// const popMexico4 = percentageOfWorld2(128);
// console.log(popSpain4, popCanada4, popMexico4);

// const populations = [47, 38, 128, 329.5];

// console.log(populations.length === 4);

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];

// const neighbors = ["Canada", "Mexico"];

// neighbors.push("Utopia");
// neighbors.pop();

// if (!neighbors.includes("Germany")) {
//   console.log("Probably not a central European country :D");
// }

// const spot = neighbors.indexOf("Canada");

// neighbors[spot] = "Canadia";
