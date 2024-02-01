// Maximum subarray sum
// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

// logic
// increase middle index
//    decrease left index and travel every right side sum
//    if sum is bigger than max, replace max and record left, right index
//    increase right index and travel every left side sum
//    if sum is bigger than max, replace max and record left, right index

const maxSequence = (arr, middleIndex = 0, max = Math.max(...arr), maxLeftIndex = null, maxRightIndex = null) => {
  if (middleIndex === arr.length) {
    const maxSum = arr.slice(maxLeftIndex, maxRightIndex).reduce((a, b) => a + b, 0);
    return maxSum > max ? maxSum : max;
  }
  let leftIndex = (middleIndex - 1) || 0;
  let rightIndex = middleIndex + 1;
  let curMax = max;
  
  while (leftIndex >= 0) {
    while (rightIndex <= arr.length) {
      const sum = arr.slice(leftIndex, rightIndex)
        .reduce((a, b) => a + b, 0);
      if (sum > curMax) {
        curMax = sum;
        maxLeftIndex = leftIndex;
        maxRightIndex = rightIndex;
      }
      rightIndex += 1;
    }
    leftIndex -= 1;
  }
  
  leftIndex = (middleIndex - 1) || 0;
  rightIndex = middleIndex + 1;
  
  while (rightIndex <= arr.length) {
    while (leftIndex >= 0) {
      const sum = arr.slice(leftIndex, rightIndex)
        .reduce((a, b) => a + b, 0);
      if (sum > curMax) {
        curMax = sum;
        maxLeftIndex = leftIndex;
        maxRightIndex = rightIndex;
      }
      leftIndex -= 1;
    }
    rightIndex += 1;
  }
  
  return maxSequence(arr, middleIndex + 1, curMax, maxLeftIndex, maxRightIndex);
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
console.log(maxSequence([]), 0);
console.log(maxSequence([-48, -41, 23, -28, 38, -43, -16]), 38);
console.log(maxSequence([45, 1, -25, -33, 42, 20, 26]), 88);
console.log(maxSequence([-32, 32, 42]), 74);
console.log(maxSequence([20, 27, -31, 39, 44, 17, 33, 37, -39, -45, -34, 4, -25, -25, 12,
  36, 43, 46, -3, -24, -9, 27, 16, 34, -5, -22, -45, 31, -15, 4, 44, 49]), 241);
