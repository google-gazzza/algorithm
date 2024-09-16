// Two Sum
// https://www.codewars.com/kata/52c31f8e6605bcc646000082

const twoSum = (numbers, target) => {
  let copiedNumbers = numbers.filter((v) => v <= target).sort((a, b) => a - b);
  let leftIndex = 0;
  let rightIndex = copiedNumbers.length - 1;
  let sum = 0;
  
  while (leftIndex < rightIndex) {
    sum = copiedNumbers[leftIndex] + copiedNumbers[rightIndex];
    if (sum === target) {
      break;
    }
    if (sum < target) {
      leftIndex += 1;
    } else {
      rightIndex -= 1;
    }
  }
  
  return [numbers.indexOf(copiedNumbers[leftIndex]), numbers.lastIndexOf(copiedNumbers[rightIndex])];
};

console.log(twoSum([1, 2, 3], 4), [0, 2]);
console.log(twoSum([1234, 5678, 9012], 14690), [1, 2]);
console.log(twoSum([2, 2, 3], 4), [0, 1]);
console.log(twoSum([42, 769, 396, 74, 706, 736, 967, 201, 974, 801], 875));
