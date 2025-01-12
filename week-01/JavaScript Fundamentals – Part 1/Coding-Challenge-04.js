// Function to calculate the tip and total value
function calculateTip(bill) {
  // Step 1: Calculate the tip using a ternary operator
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

  // Step 2: Calculate the total value
  const total = bill + tip;

  // Step 3: Print the result
  console.log(
    `The bill was ${bill}, the tip was ${tip.toFixed(
      2
    )}, and the total value ${total.toFixed(2)}`
  );
}

// Test Data
let bill1 = 275;
let bill2 = 40;
let bill3 = 430;

// Calculate and print the results for each bill value
calculateTip(bill1); // Test with bill value 275
calculateTip(bill2); // Test with bill value 40
calculateTip(bill3); // Test with bill value 430
