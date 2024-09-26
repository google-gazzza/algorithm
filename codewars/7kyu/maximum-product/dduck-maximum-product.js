// maximum-product
// Maximum Product
// difficulty: 7kyu
// https://www.codewars.com/kata/5a4138acf28b82aa43000117

const adjacentElementsProduct = (array) => Math.max(
  ...(array.map((e, i, arr) => e * arr[i + 1]).slice(0, -1))
);



console.log(adjacentElementsProduct([5, 8]), 40);
console.log(adjacentElementsProduct([1, 2, 3]), 6);
console.log(adjacentElementsProduct([1, 5, 10, 9]), 90);
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
console.log(adjacentElementsProduct([-1, -2, -3]), 6);
