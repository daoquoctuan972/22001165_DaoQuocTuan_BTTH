function whereAmI(lat, lng) {
  // Step 1: Use the geocode.xyz API to reverse geocode the coordinates.
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      // Step 4: Check if we have an error with the response.
      if (!response.ok) {
        throw new Error("Unable to get location data");
      }
      return response.json();
    })
    .then((data) => {
      // Step 3: Get the city and country from the geocode response and log it.
      if (!data.city || !data.country) {
        throw new Error("Invalid data received");
      }
      const city = data.city;
      const country = data.country;
      console.log(`You are in ${city}, ${country}`);

      // Step 6: Use the countries API to get more details about the country
      return fetch(`https://restcountries.com/v3.1/name/${country}`);
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Unable to get country information");
      }
      return response.json();
    })
    .then((countryData) => {
      // Step 7: Render the country information.
      const countryInfo = countryData[0];
      console.log(
        `Country info: ${countryInfo.name.common}, Population: ${countryInfo.population}`
      );
    })
    .catch((err) => {
      // Step 4 & 5: Handle any errors by logging them.
      console.error("Error:", err.message);
    });
}

// Test data
whereAmI(52.508, 13.381); // Example coordinates for Berlin, Germany
whereAmI(19.037, 72.873); // Example coordinates for Mumbai, India
whereAmI(-33.933, 18.474); // Example coordinates for Cape Town, South Africa
