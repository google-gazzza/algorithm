// https://www.codewars.com/kata/5a91a7c5fd8c061367000002/

const minimumSteps = (numbers, v) => numbers.sort((a, b) => a - b)
  .reduce((a, c, i, arr) => {
    const sum = a + c;
    if (sum >= v) {
      arr.splice(1);
      return i;
    }
    return a + c;
  }, 0);

console.log(minimumSteps([4, 6, 3], 7), 1);
console.log(minimumSteps([10, 9, 9, 8], 17), 1);
console.log(minimumSteps([8, 9, 10, 4, 2], 23), 3);
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464), 8);
console.log(minimumSteps([4, 6, 3], 2), 0);
