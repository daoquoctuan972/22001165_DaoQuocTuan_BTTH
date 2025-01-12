// Step 1: Create the CarCl (Car) class with methods that support chaining
class CarCl {
  constructor(make, speed) {
    this.make = make; // Car make (brand)
    this.speed = speed; // Speed in km/h
  }

  // Method to accelerate the car (increases speed)
  accelerate() {
    this.speed += 10; // Increase speed by 10 km/h
    console.log(`${this.make} is now going at ${this.speed} km/h`);
    return this; // Enable chaining
  }

  // Method to brake the car (decreases speed)
  brake() {
    this.speed -= 5; // Decrease speed by 5 km/h
    console.log(`${this.make} is now going at ${this.speed} km/h`);
    return this; // Enable chaining
  }

  // Getter for speed in miles per hour (mi/h)
  get speedUS() {
    return this.speed / 1.6;
  }

  // Setter for speed in miles per hour (mi/h)
  set speedUS(speedInMiles) {
    this.speed = speedInMiles * 1.6;
  }
}

// Step 2: Create the EVCl (Electric Car) class that extends CarCl
class EVCl extends CarCl {
  // Private property for charge (battery level)
  #charge;

  constructor(make, speed, charge) {
    super(make, speed); // Call the CarCl constructor
    this.#charge = charge; // Initialize the charge (battery level)
  }

  // Method to charge the battery
  chargeBattery(chargeTo) {
    this.#charge = chargeTo; // Set the charge level
    console.log(`${this.make}'s battery is now at ${this.#charge}%`);
    return this; // Enable chaining
  }

  // Overriding accelerate to decrease the charge by 1% with each acceleration
  accelerate() {
    this.speed += 20; // Increase speed by 20 km/h
    this.#charge -= 1; // Decrease charge by 1%
    console.log(
      `${this.make} is now going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this; // Enable chaining
  }
}

// Step 3: Create an EVCl object (Rivian) and experiment with chaining
const myEV = new EVCl("Rivian", 120, 23);

// Chain calls to accelerate, brake, and chargeBattery methods
myEV.accelerate().accelerate().brake().chargeBattery(90).accelerate();
