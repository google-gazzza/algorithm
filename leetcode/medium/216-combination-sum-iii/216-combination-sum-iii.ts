// leetcode/medium/216. Combination Sum III
// 216-combination-sum-iii
// URL: https://leetcode.com/problems/combination-sum-iii/description/

function combinationSum3(k: number, n: number): number[][] {
  const combinations: number[][] = [];

  function dfs(start: number, sum: number, combination: number[]) {
    if (sum > n || combination.length > k) {
      return;
    }

    if (sum === n && combination.length === k) {
      combinations.push(combination.slice());
      return;
    }

    for (let i = start; i <= 9; i++) {
      combination.push(i);
      dfs(i + 1, sum + i, combination);
      combination.pop();
    }
  }

  dfs(1, 0, []);

  return combinations;
}

let k = 3;
n = 9;
console.log(combinationSum3(k, n));
// Output: [[1,2,6],[1,3,5],[2,3,4]]
