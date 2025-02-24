// 1228-missing-number-in-arithmetic-progression
// URL: https://leetcode.com/problems/missing-number-in-arithmetic-progression/description/?envType=study-plan-v2&envId=premium-algo-100

function missingNumber(arr: number[]): number {
    const diff = (arr[arr.length - 1] - arr[0]) / arr.length;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] + diff !== arr[i + 1]) {
        return arr[i] + diff;
      }
    }
  
    return arr[arr.length - 1] + diff;
  };
  