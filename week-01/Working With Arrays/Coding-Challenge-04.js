// Sample data for dogs (including name, weight, currentFood, and owners).
const dogs = [
  {
    name: "Bella",
    weight: 10,
    currentFood: 300,
    owners: ["Alice", "Bob"],
  },
  {
    name: "Max",
    weight: 20,
    currentFood: 500,
    owners: ["Sarah"],
  },
  {
    name: "Lucy",
    weight: 8,
    currentFood: 220,
    owners: ["John", "Sarah"],
  },
  {
    name: "Rocky",
    weight: 15,
    currentFood: 450,
    owners: ["Michael", "Alice"],
  },
];

// Task 1: Loop over the dogs and calculate the recommended food portion
dogs.forEach((dog) => {
  dog.recommendedFood = dog.weight ** 0.75 * 28; // Formula to calculate recommended food
});

// Task 2: Find Sarah's dog and log whether it's eating too much or too little
const sarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));
const isEatingTooMuch = sarahsDog.currentFood > sarahsDog.recommendedFood;
const isEatingTooLittle = sarahsDog.currentFood < sarahsDog.recommendedFood;
const isEatingOkay =
  sarahsDog.currentFood >= sarahsDog.recommendedFood * 0.9 &&
  sarahsDog.currentFood <= sarahsDog.recommendedFood * 1.1;

if (isEatingTooMuch) {
  console.log(`${sarahsDog.name} is eating too much.`);
} else if (isEatingTooLittle) {
  console.log(`${sarahsDog.name} is eating too little.`);
} else if (isEatingOkay) {
  console.log(`${sarahsDog.name} is eating an okay amount.`);
}

// Task 3: Create arrays for owners whose dogs eat too much or too little
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];

dogs.forEach((dog) => {
  if (dog.currentFood > dog.recommendedFood) {
    ownersEatTooMuch.push(...dog.owners);
  } else if (dog.currentFood < dog.recommendedFood) {
    ownersEatTooLittle.push(...dog.owners);
  }
});

// Task 4: Log the names of owners whose dogs eat too much or too little
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// Task 5: Log whether any dog is eating exactly the recommended food amount
const isEatingExactly = dogs.some(
  (dog) => dog.currentFood === dog.recommendedFood
);
console.log(isEatingExactly); // true or false

// Task 6: Log whether any dog is eating an okay amount of food
const isEatingOkayCheck = dogs.some(
  (dog) =>
    dog.currentFood >= dog.recommendedFood * 0.9 &&
    dog.currentFood <= dog.recommendedFood * 1.1
);
console.log(isEatingOkayCheck); // true or false

// Task 7: Create an array of dogs that are eating an okay amount of food
const dogsEatingOkay = dogs.filter(
  (dog) =>
    dog.currentFood >= dog.recommendedFood * 0.9 &&
    dog.currentFood <= dog.recommendedFood * 1.1
);
console.log(dogsEatingOkay); // Array of dogs eating okay amount

// Task 8: Create a shallow copy of the dogs array and sort it by recommended food portion in ascending order
const sortedDogs = [...dogs].sort(
  (a, b) => a.recommendedFood - b.recommendedFood
);
console.log(sortedDogs); // Sorted array by recommended food
