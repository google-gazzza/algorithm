// https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump <= (mpg * fuelLeft);


console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);
