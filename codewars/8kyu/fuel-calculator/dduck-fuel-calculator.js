// fuel-calculator
// Fuel Calculator
// https://www.codewars.com/kata/57b58827d2a31c57720012e8

const fuelPrice = (litres, pricePerLiter) => Number(
  ((litres * pricePerLiter) - (litres * Math.min(Math.floor(litres / 2) * 0.05, 0.25)))
    .toFixed(2)
);


console.log(fuelPrice(5, 1.23), 5.65);
console.log(fuelPrice(8, 2.5), 18.40);
console.log(fuelPrice(5, 5.6), 27.50);
