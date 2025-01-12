function calcAverageHumanAge(ages) {
  // Step 1: Calculate the human age for each dog and filter out dogs with less than 18 human years
  const humanAges = ages
    .map((age) => {
      if (age <= 2) {
        return age * 2; // Human age for dogs <= 2 years
      } else {
        return 16 + age * 4; // Human age for dogs > 2 years
      }
    })
    .filter((humanAge) => humanAge >= 18); // Exclude dogs that are younger than 18 human years

  // Step 2: Calculate the average human age of adult dogs
  const averageHumanAge =
    humanAges.reduce((acc, age) => acc + age, 0) / humanAges.length;

  return averageHumanAge;
}

// Test data 1:
const dogsData1 = [5, 2, 4, 1, 15, 8, 3];
const averageAge1 = calcAverageHumanAge(dogsData1);
console.log(`Average human age of adult dogs in test data 1: ${averageAge1}`);

// Test data 2:
const dogsData2 = [16, 6, 10, 5, 6, 1, 4];
const averageAge2 = calcAverageHumanAge(dogsData2);
console.log(`Average human age of adult dogs in test data 2: ${averageAge2}`);
