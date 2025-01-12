// Step 1: Function to calculate the tip
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Step 2: Array of test bills
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Step 3: Create empty arrays for tips and totals
const tips = [];
const totals = [];

// Step 4: Use a loop to calculate tips and totals
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

// Bonus Step: Function to calculate the average of an array
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Add current value to sum
  }
  return sum / arr.length; // Return average
}

// Step 5: Calculate and log the average total
const averageTotal = calcAverage(totals);
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);
console.log("Average total value:", averageTotal.toFixed(2));
