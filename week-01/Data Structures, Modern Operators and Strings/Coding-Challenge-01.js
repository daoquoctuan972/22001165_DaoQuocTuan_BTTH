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

// 1. Create player arrays for each team
const players1 = game.players[0]; // Bayern Munich
const players2 = game.players[1]; // Barcelona

// 2. Create the goalkeeper and field players for Bayern Munich
const gk = players1[0]; // First player is the goalkeeper (Neuer)
const fieldPlayers = players1.slice(1); // Remaining 10 players are field players

// 3. Create an array 'allPlayers' containing all players from both teams
const allPlayers = [...players1, ...players2]; // Combine both teams' players

// 4. Add substitutes to Bayern Munich's players
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"]; // Adding substitutes

// 5. Create variables for each odd
const { team1, draw, team2 } = game.odds;

// 6. Function to print goals scored by players
function printGoals(...players) {
  console.log("Goals Scored by Players:");
  players.forEach((player) => console.log(player));
  console.log(`Total goals scored: ${players.length}`);
}

// Test with players from 'scored' array
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

// Test with players from game.scored
printGoals(...game.scored);

// 7. Determine which team is more likely to win (lower odd)
const likelyWinner =
  team1 < team2 && team1 < draw
    ? "Bayern Munich"
    : team2 < draw
    ? "Barcelona"
    : "Draw";
console.log(`The team more likely to win is: ${likelyWinner}`);
