// 1. Function to print the forecast
function printForecast(arr) {
  let forecastString = ""; // To store the final result

  // Loop through the array and format each temperature
  for (let i = 0; i < arr.length; i++) {
    forecastString += `... ${arr[i]}°C in ${i + 1} days `;
  }

  // Print the final concatenated string
  console.log(forecastString + "...");
}

// 2. Test data
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// Test the function with both datasets
printForecast(data1);
printForecast(data2);
