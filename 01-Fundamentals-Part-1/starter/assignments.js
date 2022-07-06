let country = "United States";
let continent = "North America";
let population = 329500000;

//population = 1000000;

console.log(
  "Country:",
  country,
  "\nContinent:",
  continent,
  "\nPopulation:",
  population
);

console.log(continent);
console.log(population);

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "English";
/*
//isIsland = true;
const halfPopulation = population / 2;
//population++;
console.log(
  "United States Population: " +
    population +
    "\nHalf Population: " +
    halfPopulation
);

const populationFinland = 6000000;
console.log(population > populationFinland);
const averagePopulation = 33000000;
console.log(population < averagePopulation);

const description =
  "The " +
  country +
  " is in " +
  continent +
  ", and it's " +
  (population / 1000000).toFixed(1) +
  " million people speak " +
  language +
  ".";

console.log(description);

console.log(
  `The ${country} is in ${continent}, and it's ${(population / 1000000).toFixed(
    1
  )} million people speak ${language}.`
);

if (population > 33000000) {
  console.log(`The ${country}'s population is above average.`);
} else {
  console.log(
    `The ${country}'s population is ${
      (33000000 - population) / 1000000
    } million below average.`
  );
}
//4, 617, 23, false, 1143
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

const numNeighbors = Number(
  prompt("How many neighbor countries does your country have?")
);

if (numNeighbors === 1) {
  console.log("Only 1 border!");
} else if (numNeighbors > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
*/

if (language === "English" && population < 50000000 && isIsland === false) {
  console.log(`You should live in the ${country}`);
} else {
  console.log(`The ${country} does not meet your criteria.`);
}

switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers.");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language.");
    break;
  default:
    console.log("Great language too.");
}

console.log(
  `The ${country} population is ${
    population > 33000000 ? "above" : "below"
  } average.`
);
