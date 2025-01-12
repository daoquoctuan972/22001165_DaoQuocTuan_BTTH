const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4)) // Convert dog age to human age
    .filter((humanAge) => humanAge >= 18) // Exclude dogs with human age < 18
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0); // Calculate the average

// Test data 1:
const dogsData1 = [5, 2, 4, 1, 15, 8, 3];
console.log(
  `Average human age of adult dogs in test data 1: ${calcAverageHumanAge(
    dogsData1
  )}`
);

// Test data 2:
const dogsData2 = [16, 6, 10, 5, 6, 1, 4];
console.log(
  `Average human age of adult dogs in test data 2: ${calcAverageHumanAge(
    dogsData2
  )}`
);
