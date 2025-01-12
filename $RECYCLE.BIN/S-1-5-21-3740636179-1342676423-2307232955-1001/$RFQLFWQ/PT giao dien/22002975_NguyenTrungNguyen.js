// Data Structures, Modern Operators and Strings

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// CODING CHALLENGE 1 //

// 1. Create one player array for each team (variables 'players1' and 
// 'players2')
const [players1, players2] = game.players

console.log(players1, players2);

// 2. The first player in any player array is the goalkeeper and the others are field 
// players. For Bayern Munich (team 1) create one variable ('gk') with the 
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
// field players
const [gk, ...fieldPlayers] = players1

console.log(gk, fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22 
// players) 
const allPlayers = [...players1, ...players2]

console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
// new array ('players1Final') containing all the original team1 players plus 
// 'Thiago', 'Coutinho' and 'Perisic' 
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']

console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 
// 'team1', 'draw' and 'team2') 
const { team1, x: draw, team2 } = game.odds

console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player 
// names (not an array) and prints each of them to the console, along with the 
// number of goals that were scored in total (number of player names passed in)
const printGoals = (...players) => {
    players.forEach((player) => {
        console.log(player)
    })

    console.log(`number of goals: ${players.length}`);
}

printGoals('Pavard', 'Martinez', 'Alaba')

// 7. The team with the lower odd is more likely to win. Print to the console which 
// team is more likely to win, without using an if/else statement or the ternary 
// operator.
console.log([team1, team2].sort().at(-1));

// CODING CHALLENGE 2 //

// 1. Loop over the game.scored array and print each player name to the console, 
// along with the goal number (Example: "Goal 1: Lewandowski") 
game.scored.forEach((score, index) => {
    console.log(`Goal ${index}: ${score}`);
})

// 2. Use a loop to calculate the average odd and log it to the console (We already 
// studied how to calculate averages, you can go check if you don't remember) 
console.log(`average odd: ${[...Object.values(game.odds)].reduce((o, a) => o + a) / [...Object.values(game.odds)].length}`);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
// Odd of victory Bayern Munich: 1.33 
// Odd of draw: 3.25 
//  Odd of victory Borrussia Dortmund: 6.5 
// Get the team names directly from the game object, don't hardcode them 
// (except for "draw"). Hint: Note how the odds and the game objects have the 
// same property names 😉 
console.log(`Odd of victory ${game['team2']}: ${game.odds['team1']}`);
console.log(`Odd of draw: ${game.odds['x']}`);
console.log(`Odd of victory ${game['team2']}: ${game.odds['team2']}`);

// 4. Bonus: Create an object called 'scorers' which contains the names of the 
// players who scored as properties, and the number of goals as the value. In this 
// game, it will look like this: 
// { 
//   Gnarby: 1, 
//   Hummels: 1, 
//   Lewandowski: 2 
// }
const scorers = {
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 2
}

console.log(scorers);

// CODING CHALLENGE 3

// Let's continue with our football betting app! This time, we have a map called 
// 'gameEvents' (see below) with a log of the events that happened during the 
// game. The values are the events themselves, and the keys are the minutes in which 
// each event happened (a football game has 90 minutes plus some extra time). 

const gameEvents = new Map([ 
    [17, '⚽ GOAL'], 
    [36, '🔁 Substitution'], 
    [47, '⚽ GOAL'], 
    [61, '🔁 Substitution'], 
    [64, '🔶 Yellow card'], 
    [69, '🔴 Red card'], 
    [70, '🔁 Substitution'], 
    [72, '🔁 Substitution'], 
    [76, '⚽ GOAL'], 
    [80, '⚽ GOAL'], 
    [92, '🔶 Yellow card'], 
  ]);

// Your tasks: 
// 1. Create an array 'events' of the different game events that happened (no 
// duplicates)
const events = Array.from(gameEvents).reduce((set, event) => {
    if (!set[1].has(event[1])) {
        set[1].add(event[1])
        set[0].push(event)
    }
    return set;
}, [[], new Set()])[0]

console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 
// was unfair. So remove this event from the game events log. 
console.log(events.reduce((events, event, index) => {
    if (event[0] == 64) events.splice(index, 1)
    return events
}, events));

// 3. Compute and log the following string to the console: "An event happened, on 
// average, every 9 minutes" (keep in mind that a game has 90 minutes) 
const calculateEvent = new Map()
for (const [key, value] of gameEvents) {
    if (!calculateEvent.get(value)) calculateEvent.set(value, [])

    calculateEvent.set(value, [...calculateEvent.get(value), key])
}

for (const [key, value] of calculateEvent) {
    calculateEvent.set(key, value.reduce((a, v) => a + v) / value.length)
}

console.log(calculateEvent);

for (const [key, value] of calculateEvent) {
    console.log(`[${key}] events happened, on average, every ${value} minutes`);
}

// 4. Loop over 'gameEvents' and log each element to the console, marking 
// whether it's in the first half or second half (after 45 min) of the game, like this: 
// [FIRST HALF] 17: ⚽ GOAL
console.log();
for (const [key, value] of gameEvents) {
    console.log(`[${key < 45 ? 'FIRST HALF' : 'SECOND HALF'}] ${key}: ${value} \n`);
}
