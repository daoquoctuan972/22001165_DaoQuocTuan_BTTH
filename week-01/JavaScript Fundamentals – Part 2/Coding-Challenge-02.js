// Step 1: Function to calculate the tip
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Step 2: Array of test bills
const bills = [125, 555, 44];

// Step 3: Array of tips, using the calcTip function
const tips = bills.map(calcTip);

// Step 4: Array of totals, bill + tip
const totals = bills.map((bill, index) => bill + tips[index]);

// Print the results
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Total values (bill + tip):", totals);
