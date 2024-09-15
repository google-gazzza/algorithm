/*
1854-maximum-population-year
leetcode/easy/1854. Maximum Population Year
Difficulty: easy
URL: https://leetcode.com/problems/maximum-population-year/

NOTE: Description

NOTE: Constraints
  - 1 <= logs.length <= 100
  - 1950 <= birthi < deathi <= 2050

NOTE: Explanation
*/

function maximumPopulation(logs: number[][]): number {
  const count: { [key: number]: number } = {};
  let max = 0;

  logs.forEach(([birth, death]) => {
    for (let i = birth; i < death; i += 1) {
      count[i] = (count[i] || 0) + 1;
      max = Math.max(max, count[i]);
    }
  });

  const countArray: number[][] = Array.from(
    Object.entries(count)
      .map(([key, value]) => [Number(key), value]),
  ).filter(([, value]) => value === max);

  countArray.sort(([a], [b]) => a - b);

  return countArray[0][0];
}


let logs = [[1993, 1999], [2000, 2010]];
console.log(maximumPopulation(logs));
// Output: 1993
// Explanation: The maximum population is 1, and 1993 is the earliest year with this population.

logs = [[1950, 1961], [1960, 1971], [1970, 1981]];
console.log(maximumPopulation(logs));
// Output: 1960
// Explanation:
//   The maximum population is 2, and it had happened in years 1960 and 1970.
// The earlier year between them is 1960.
