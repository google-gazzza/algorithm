// leetcode/medium/96. Unique Binary Search Trees
// 96-unique-binary-search-trees
// URL: https://leetcode.com/problems/unique-binary-search-trees/description/?envType=study-plan-v2&envId=dynamic-programming

// Approach: 
// Time Complexity: 
// Space Complexity: 
// Q: is there another approach?
// Q: is there a way to optimize the solution?
// Q: is there a way to optimize the space complexity?

const memo = {};

function numTrees(n: number): number {
  if (n <= 1) {
    return 1;
  }

  if (memo[n]) {
    return memo[n];
  }

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += numTrees(i - 1) * numTrees(n - i);
  }

  memo[n] = sum;

  return sum;
}

// console.log(numTrees(2));
console.log(numTrees(3));
console.log(numTrees(5));
// 1=1
// 2=2
// 3=5
// 4=14
// 5=42
// 6=132 (126
