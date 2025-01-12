// 1. Create objects for Mark and John
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  // 2. BMI calculation method
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  // 2. BMI calculation method
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

// 3. Calculate BMIs for both Mark and John
mark.calcBMI();
john.calcBMI();

// Compare the BMIs and log the result
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi.toFixed(2)}) is higher than ${
      john.fullName
    }'s (${john.bmi.toFixed(2)})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi.toFixed(2)}) is higher than ${
      mark.fullName
    }'s (${mark.bmi.toFixed(2)})!`
  );
} else {
  console.log(
    `Both ${mark.fullName} and ${
      john.fullName
    } have the same BMI of ${mark.bmi.toFixed(2)}!`
  );
}
