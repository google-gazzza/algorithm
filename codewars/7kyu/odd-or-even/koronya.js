// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
// [JS][7kyu] Odd or Even?
// odd-or-even

const oddOrEven = (array) =>
  array.filter((num) => num % 2 !== 0).length % 2 === 0 ? "even" : "odd";

oddOrEven([0]) === "even";
oddOrEven([1]) === "odd";
oddOrEven([]) === "even";
