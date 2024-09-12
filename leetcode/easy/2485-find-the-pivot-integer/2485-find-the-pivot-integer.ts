/*
2485-find-the-pivot-integer
leetcode/easy/2485. Find the Pivot Integer
URL: https://leetcode.com/problems/find-the-pivot-integer/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/
function calculateSumTillN(n: number): number {
    return ((n + 1) * n) / 2;
  }
  
  function pivotInteger(n: number): number {
    if (n === 1) {
      return 1;
    }
  
    const middle = (n + 1) * n / 4;
    let sum = 0;
  
    for (let i = 1; i < n; i += 1) {
      if (sum + i >= middle) {
        const leftSum = calculateSumTillN(i - 1);
        const totalSum = calculateSumTillN(n);
        const rightSum = totalSum - leftSum - i;
  
        if (leftSum === rightSum) {
          return i;
        }
        return -1;
      }
      sum += i;
    }
  
    return -1;
  }
  
  let n = 8;
  console.log(pivotInteger(n));
  // Output: 6
  //
  n = 1;
  console.log(pivotInteger(n));
  // Output: 1
  //
  n = 4;
  console.log(pivotInteger(n));
  // Output: -1
  