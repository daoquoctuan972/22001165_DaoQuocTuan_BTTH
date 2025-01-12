// Function to calculate the average score of a team
function calculateAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

// Task 1: Calculate the average score for each team
// Test Data 1
let dolphinsScores1 = [96, 108, 89];
let koalasScores1 = [88, 91, 110];

// Test Data Bonus 1
let dolphinsScoresBonus1 = [97, 112, 101];
let koalasScoresBonus1 = [109, 95, 123];

// Test Data Bonus 2
let dolphinsScoresBonus2 = [97, 112, 101];
let koalasScoresBonus2 = [109, 95, 106];

// Calculate the average scores for each team in all test cases
let dolphinsAvg1 = calculateAverage(...dolphinsScores1);
let koalasAvg1 = calculateAverage(...koalasScores1);

let dolphinsAvgBonus1 = calculateAverage(...dolphinsScoresBonus1);
let koalasAvgBonus1 = calculateAverage(...koalasScoresBonus1);

let dolphinsAvgBonus2 = calculateAverage(...dolphinsScoresBonus2);
let koalasAvgBonus2 = calculateAverage(...koalasScoresBonus2);

// Function to determine the winner based on the scores, including the bonus rules
function determineWinner(dolphinsAvg, koalasAvg) {
  // Bonus rule: Both teams need a minimum average of 100 to win or draw
  if (dolphinsAvg >= 100 && koalasAvg >= 100) {
    if (dolphinsAvg > koalasAvg) {
      console.log(
        `Dolphins win with an average score of ${dolphinsAvg.toFixed(
          2
        )} vs Koalas' ${koalasAvg.toFixed(2)}!`
      );
    } else if (koalasAvg > dolphinsAvg) {
      console.log(
        `Koalas win with an average score of ${koalasAvg.toFixed(
          2
        )} vs Dolphins' ${dolphinsAvg.toFixed(2)}!`
      );
    } else {
      console.log(
        `It's a draw! Both teams have the same average score of ${dolphinsAvg.toFixed(
          2
        )}!`
      );
    }
  } else if (dolphinsAvg >= 100) {
    console.log(
      `Dolphins win with an average score of ${dolphinsAvg.toFixed(
        2
      )} while Koalas' average score of ${koalasAvg.toFixed(2)} is too low.`
    );
  } else if (koalasAvg >= 100) {
    console.log(
      `Koalas win with an average score of ${koalasAvg.toFixed(
        2
      )} while Dolphins' average score of ${dolphinsAvg.toFixed(2)} is too low.`
    );
  } else {
    console.log(
      `No winner! Neither team has a high enough score to win. Dolphins' average: ${dolphinsAvg.toFixed(
        2
      )}, Koalas' average: ${koalasAvg.toFixed(2)}.`
    );
  }
}

// Task 2: Compare the teams and determine the winner for all data sets
console.log("Data 1: ");
determineWinner(dolphinsAvg1, koalasAvg1);

console.log("\nData Bonus 1: ");
determineWinner(dolphinsAvgBonus1, koalasAvgBonus1);

console.log("\nData Bonus 2: ");
determineWinner(dolphinsAvgBonus2, koalasAvgBonus2);
