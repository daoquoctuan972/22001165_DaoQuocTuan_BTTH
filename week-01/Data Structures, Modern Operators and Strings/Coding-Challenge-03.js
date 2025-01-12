// Test Data (Game Events)
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔶 YELLOW CARD"],
  [47, "⚽ GOAL"],
  [64, "🔶 YELLOW CARD"],
  [69, "⚽ GOAL"],
  [70, "🔴 RED CARD"],
  [85, "⚽ GOAL"],
]);

// 1. Create an array 'events' of the different game events (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log("Different Game Events:", events);

// 2. Remove the yellow card from minute 64 (unfair)
gameEvents.delete(64);
console.log("Updated Game Events:", gameEvents);

// 3. Compute and log the average time between events
const totalEvents = gameEvents.size; // Get the number of events
const averageTime = 90 / totalEvents; // 90 minutes divided by number of events
console.log(
  `An event happened, on average, every ${averageTime.toFixed(2)} minutes`
);

// 4. Loop over 'gameEvents' and log each event with the time period (FIRST HALF or SECOND HALF)
console.log("Game Events with Time Period:");
gameEvents.forEach((event, minute) => {
  const timePeriod = minute <= 45 ? "FIRST HALF" : "SECOND HALF";
  console.log(`[${timePeriod}] ${minute}: ${event}`);
});
