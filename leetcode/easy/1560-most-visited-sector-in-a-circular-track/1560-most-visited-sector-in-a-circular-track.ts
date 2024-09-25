/*
1560-most-visited-sector-in-a-circular-track
leetcode/easy/1560. Most Visited Sector in a Circular Track
URL: https://leetcode.com/problems/most-visited-sector-in-a-circular-track/

NOTE: Description

NOTE: Constraints
  - 2 <= n <= 100
  - 1 <= m <= 100
  - rounds.length == m + 1
  - 1 <= rounds[i] <= n
  - rounds[i] != rounds[i + 1] for 0 <= i < m

NOTE: Explanation
*/

function mostVisited(n: number, rounds: number[]): number[] {
  const visitedMap = new Map<number, number>();

  for (let i = 1; i <= n; i += 1) {
    visitedMap.set(i, 0);
  }

  visitedMap.set(rounds[0], 1);

  for (let i = 1; i < rounds.length; i += 1) {
    const cur = rounds[i - 1] + 1;
    const next = rounds[i];

    if (cur < next) {
      for (let j = cur; j <= next; j += 1) {
        visitedMap.set(j, visitedMap.get(j) + 1);
      }
    } else {
      for (let j = cur; j <= n; j += 1) {
        visitedMap.set(j, visitedMap.get(j) + 1);
      }
      for (let j = 1; j <= next; j += 1) {
        visitedMap.set(j, visitedMap.get(j) + 1);
      }
    }
  }

  return Array.from(visitedMap).sort((a, b) => b[1] - a[1])
    .filter(([, value], _, arr) => value >= arr[0][1])
    .map(([key]) => key);
}

let n = 4;
let rounds = [1, 3, 1, 2];
console.log(mostVisited(n, rounds));
// Output: [1,2]
// Example 2:

n = 2;
rounds = [2, 1, 2, 1, 2, 1, 2, 1, 2];
console.log(mostVisited(n, rounds));
// Output: [2]
// Example 3:

n = 7;
rounds = [1, 3, 5, 7];
console.log(mostVisited(n, rounds));
// Output: [1,2,3,4,5,6,7]
