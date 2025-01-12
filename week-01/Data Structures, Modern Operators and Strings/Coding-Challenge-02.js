// Test Data (Game Information)
const game = {
  team1: "Bayern Munich",
  team2: "Barcelona",
  players: [
    [
      "Neuer",
      "Pavard",
      "Boateng",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Muller",
      "Coman",
      "Lewandowski",
      "Nianzou",
    ], // Bayern Munich players
    [
      "Ter Stegen",
      "Roberto",
      "Pique",
      "Lenglet",
      "Alba",
      "Busquets",
      "De Jong",
      "Messi",
      "Griezmann",
      "Suarez",
      "Lenglet",
    ], // Barcelona players
  ],
  score: "4:0",
  scored: ["Davies", "Muller", "Lewandowski", "Kimmich"],
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5,
  },
};

// 1. Loop over the game.scored array and print player name along with the goal number
console.log("Goals scored:");
game.scored.forEach((player, index) => {
  console.log(`Goal ${index + 1}: ${player}`);
});

// 2. Loop to calculate the average odd and log it to the console
const odds = Object.values(game.odds); // Get all odds values in an array
const averageOdd = odds.reduce((acc, odd) => acc + odd, 0) / odds.length;
console.log(`Average odd: ${averageOdd.toFixed(2)}`);

// 3. Print the 3 odds to the console in a nice formatted way
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.draw}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

// 4. Bonus: Create an object 'scorers' that tracks how many goals each player scored
const scorers = game.scored.reduce((acc, player) => {
  acc[player] = acc[player] ? acc[player] + 1 : 1;
  return acc;
}, {});

console.log("Scorers:", scorers);
