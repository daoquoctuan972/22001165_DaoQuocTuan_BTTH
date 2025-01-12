// Step 1: Arrow function to calculate the average score
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Step 2: Calculate average scores for both teams
const dolphinsAvg1 = calcAverage(44, 23, 71);
const koalasAvg1 = calcAverage(65, 54, 49);

const dolphinsAvg2 = calcAverage(85, 54, 41);
const koalasAvg2 = calcAverage(23, 34, 27);

// Step 3: Function to check the winner based on the rule
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(
      `Dolphins win (${avgDolphins.toFixed(2)} vs. ${avgKoalas.toFixed(2)})`
    );
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(
      `Koalas win (${avgKoalas.toFixed(2)} vs. ${avgDolphins.toFixed(2)})`
    );
  } else {
    console.log("No winner!");
  }
};

// Step 4: Use the function to check the winner for both Data 1 and Data 2
console.log("Data 1:");
checkWinner(dolphinsAvg1, koalasAvg1);

console.log("\nData 2:");
checkWinner(dolphinsAvg2, koalasAvg2);
