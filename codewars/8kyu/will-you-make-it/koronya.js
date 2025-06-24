// [JS][8kyu] Will you make it?
// will-you-make-it
// https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump <= mpg * fuelLeft

zeroFuel(50, 25, 2) === true
zeroFuel(100, 50, 1) === false
