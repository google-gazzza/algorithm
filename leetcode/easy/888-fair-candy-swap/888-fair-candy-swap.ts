/*
888-fair-candy-swap
leetcode/easy/888. Fair Candy Swap
URL: https://leetcode.com/problems/fair-candy-swap/

NOTE: Description

NOTE: Constraints
  - 1 <= aliceSizes.length, bobSizes.length <= 104
  - 1 <= aliceSizes[i], bobSizes[j] <= 105
  - Alice and Bob have a different total number of candies.
  - There will be at least one valid answer for the given input.

NOTE: Explanation
*/

function fairCandySwap(aSizes: number[], bSizes: number[], aSum = 0, bSum = 0): number[] {
  aSum = aSum || aSizes.reduce((a, b) => a + b, 0);
  bSum = bSum || bSizes.reduce((a, b) => a + b, 0);
  const isAGraterThanB = aSum > bSum;

  if (isAGraterThanB) {
    const [a, b] = fairCandySwap(bSizes, aSizes, bSum, aSum);
    return [b, a];
  }

  const diff = (bSum - aSum) / 2;
  const bSet = new Set(bSizes);

  for (let i = 0; i < aSizes.length; i += 1) {
    const a = aSizes[i];
    const b = a + diff;
    if (bSet.has(b)) {
      return [a, b];
    }
  }
}

let aliceSizes = [1, 1];
let bobSizes = [2, 2];
console.log(fairCandySwap(aliceSizes, bobSizes));
// Output: [1,2]

aliceSizes = [1, 2];
bobSizes = [2, 3];
console.log(fairCandySwap(aliceSizes, bobSizes));
// Output: [1,2]

aliceSizes = [2];
bobSizes = [1, 3];
console.log(fairCandySwap(aliceSizes, bobSizes));
// Output: [2,3]

aliceSizes = [1, 2, 5];
bobSizes = [2, 4];
console.log(fairCandySwap(aliceSizes, bobSizes));
// Output [1,2]
// Expected [5,4]

aliceSizes = [32, 38, 8, 1, 9];
bobSizes = [68, 92];
console.log(fairCandySwap(aliceSizes, bobSizes));
// Output [1,68]
// Expected [32,68]k