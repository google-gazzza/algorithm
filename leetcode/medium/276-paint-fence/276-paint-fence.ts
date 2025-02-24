// leetcode/medium/276. Paint Fence
// 276-paint-fence
// URL: https://leetcode.com/problems/paint-fence/description/?envType=study-plan-v2&envId=premium-algo-100


// constraints
// 1 <= n <= 50
// 1 <= k <= 105

function numWays(n: number, k: number): number {
  if (n === 1) {
    return k;
  }

  let sameColorCount = 0;
  let diffColorCombinationCount = k;
  let totalCombinationCount = sameColorCount + diffColorCombinationCount;

  for (let i = 1; i < n; i++) {
    sameColorCount = diffColorCombinationCount;
    diffColorCombinationCount = totalCombinationCount * (k - 1);
    totalCombinationCount = sameColorCount + diffColorCombinationCount;
  }

  return totalCombinationCount;
};

let n = 2;
let k = 3;
console.log(numWays(n, k));
// 9
