// Step 1: Define the Car constructor function
function Car(make, speed) {
  this.make = make; // The make of the car
  this.speed = speed; // The current speed of the car in km/h
}

// Step 2: Implement the 'accelerate' method
Car.prototype.accelerate = function () {
  this.speed += 10; // Increase the speed by 10 km/h
  console.log(`${this.make} is now going at ${this.speed} km/h`);
};

// Step 3: Implement the 'brake' method
Car.prototype.brake = function () {
  this.speed -= 5; // Decrease the speed by 5 km/h
  console.log(`${this.make} is now going at ${this.speed} km/h`);
};

// Step 4: Create two car objects and experiment with 'accelerate' and 'brake' methods
const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

// Test car 1: Accelerate 3 times and brake 2 times
car1.accelerate(); // Increase speed by 10
car1.accelerate(); // Increase speed by 10
car1.accelerate(); // Increase speed by 10
car1.brake(); // Decrease speed by 5
car1.brake(); // Decrease speed by 5

// Test car 2: Accelerate 2 times and brake 3 times
car2.accelerate(); // Increase speed by 10
car2.accelerate(); // Increase speed by 10
car2.brake(); // Decrease speed by 5
car2.brake(); // Decrease speed by 5
car2.brake(); // Decrease speed by 5
