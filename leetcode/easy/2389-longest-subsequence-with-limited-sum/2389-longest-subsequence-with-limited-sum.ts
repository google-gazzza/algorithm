/*
2389-longest-subsequence-with-limited-sum
leetcode/easy/2389. Longest Subsequence With Limited Sum
URL: https://leetcode.com/problems/longest-subsequence-with-limited-sum/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function answerQueries(nums: number[], queries: number[]): number[] {
  nums.sort((a, b) => a - b);
  nums.push(0);

  const result: number[] = [];

  for (let i = 0; i < queries.length; i += 1) {
    let sum = 0;
    let count = 0;
    const numsCopy = [...nums];
    while (sum <= queries[i] && numsCopy.length) {
      sum += numsCopy.shift();
      count += 1;
    }
    result.push(count - 1);
  }

  return result;
}

let nums = [4, 5, 2, 1];
let queries = [3, 10, 21];
console.log(answerQueries(nums, queries));
// Output: [2, 3, 4];

nums = [2, 3, 4, 5];
queries = [1];
console.log(answerQueries(nums, queries));
// Output: [0];

nums = [736411, 184882, 914641, 37925, 214915];
queries = [331244, 273144, 118983, 118252, 305688, 718089, 665450];
console.log(answerQueries(nums, queries));
