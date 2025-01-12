function checkDogs(dogsJulia, dogsKate) {
  // Step 1: Remove the cat ages from Julia's array
  const correctedJulia = dogsJulia.slice(1, dogsJulia.length - 2); // Create a shallow copy and remove the first and last two elements (cat ages)

  // Step 2: Combine Julia's corrected array and Kate's data
  const allDogs = correctedJulia.concat(dogsKate); // Concatenate the arrays

  // Step 3: Check for each dog whether it's an adult or a puppy
  allDogs.forEach((age, index) => {
    if (age >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${age} years old`
      );
    } else {
      console.log(`Dog number ${index + 1} is still a puppy 🐶`);
    }
  });
}

// Test data 1:
const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];
checkDogs(dogsJulia1, dogsKate1);

// Test data 2:
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];
checkDogs(dogsJulia2, dogsKate2);
