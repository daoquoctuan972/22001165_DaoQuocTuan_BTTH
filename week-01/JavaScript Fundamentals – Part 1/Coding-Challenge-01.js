// Task 1: Store Mark's and John's mass and height in variables
// Data 1
let markMass1 = 78,
  markHeight1 = 1.69;
let johnMass1 = 92,
  johnHeight1 = 1.95;

// Data 2
let markMass2 = 95,
  markHeight2 = 1.88;
let johnMass2 = 85,
  johnHeight2 = 1.76;

// Task 2: Calculate both their BMIs using the formula (BMI = mass / height^2)
function calculateBMI(mass, height) {
  return mass / (height * height); // or mass / height ** 2
}

// Task 3: Calculate BMI for both Mark and John for both sets of data
let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);

let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);

// Task 4: Create a Boolean variable 'markHigherBMI' to compare BMIs
let markHigherBMI1 = markBMI1 > johnBMI1;
let markHigherBMI2 = markBMI2 > johnBMI2;

// Output results
console.log("Data 1: ");
console.log(`Mark's BMI: ${markBMI1.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI1.toFixed(2)}`);
console.log(`Mark has a higher BMI than John: ${markHigherBMI1}`);

console.log("\nData 2: ");
console.log(`Mark's BMI: ${markBMI2.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI2.toFixed(2)}`);
console.log(`Mark has a higher BMI than John: ${markHigherBMI2}`);
