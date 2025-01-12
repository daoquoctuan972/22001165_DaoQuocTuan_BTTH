// Step 1: Create the ES6 class 'CarCl'
class CarCl {
  constructor(make, speed) {
    this.make = make; // Car make (brand)
    this.speed = speed; // Car speed in km/h
  }

  // Step 2: Implement the 'accelerate' method (increase speed by 10 km/h)
  accelerate() {
    this.speed += 10; // Increase speed by 10 km/h
    console.log(`${this.make} is now going at ${this.speed} km/h`);
  }

  // Step 3: Implement the 'brake' method (decrease speed by 5 km/h)
  brake() {
    this.speed -= 5; // Decrease speed by 5 km/h
    console.log(`${this.make} is now going at ${this.speed} km/h`);
  }

  // Step 4: Create a getter for the speed in mi/h
  get speedUS() {
    return this.speed / 1.6; // Convert km/h to mi/h
  }

  // Step 5: Create a setter for the speed in mi/h
  set speedUS(speedInMi) {
    this.speed = speedInMi * 1.6; // Convert mi/h to km/h and set it
  }
}

// Step 6: Create a new 'CarCl' object (Ford) and test the methods
const car1 = new CarCl("Ford", 120);

// Test the accelerate and brake methods
car1.accelerate(); // Increase speed by 10 km/h
car1.accelerate(); // Increase speed by 10 km/h
car1.brake(); // Decrease speed by 5 km/h

// Test the getter (speed in mi/h)
console.log(`Current speed in miles per hour: ${car1.speedUS} mi/h`);

// Test the setter (set speed in mi/h)
car1.speedUS = 80; // Set speed to 80 mi/h (this will convert to km/h)
console.log(`New speed in km/h: ${car1.speed}`); // Should log the speed in km/h after conversion
