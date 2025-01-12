// Step 1: Create the base Car constructor function
function Car(make, speed) {
  this.make = make; // Car make (brand)
  this.speed = speed; // Car speed in km/h
}

// Methods for Car
Car.prototype.accelerate = function () {
  this.speed += 10; // Increase speed by 10 km/h
  console.log(`${this.make} is now going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5; // Decrease speed by 5 km/h
  console.log(`${this.make} is now going at ${this.speed} km/h`);
};

// Step 2: Create the Electric Car (EV) constructor function that extends Car
function EV(make, speed, charge) {
  Car.call(this, make, speed); // Inherit properties from the Car constructor
  this.charge = charge; // Battery charge in percentage
}

// Inherit methods from Car
EV.prototype = Object.create(Car.prototype);

// Step 3: Add the chargeBattery method to the EV class
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo; // Set the battery charge
  console.log(`${this.make}'s battery is now at ${this.charge}%`);
};

// Step 4: Override the accelerate method for EV to decrease charge and increase speed
EV.prototype.accelerate = function () {
  this.speed += 20; // Increase speed by 20 km/h
  this.charge -= 1; // Decrease charge by 1%
  console.log(
    `${this.make} is now going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

// Step 5: Create an EV object (Tesla) and experiment with calling methods
const myEV = new EV("Tesla", 120, 23);

// Test the accelerate method (which decreases charge)
myEV.accelerate(); // Tesla going at 140 km/h, with a charge of 22%

// Test the brake method from the Car class
myEV.brake(); // Tesla is now going at 135 km/h

// Test the chargeBattery method
myEV.chargeBattery(90); // Tesla's battery is now at 90%
myEV.accelerate(); // Tesla going at 155 km/h, with a charge of 89%
