/*
997-find-the-town-judge
leetcode/easy/997. Find the Town Judge
URL: https://leetcode.com/problems/find-the-town-judge/

NOTE: Description

NOTE: Constraints
  - 1 <= n <= 1000
  - 0 <= trust.length <= 104
  - trust[i].length == 2
  - All the pairs of trust are unique.
  - ai != bi
  - 1 <= ai, bi <= n

NOTE: Explanation
*/

function findJudge(n: number, trust: number[][]): number {
  if (trust.length === 0) {
    if (n === 1) {
      return 1;
    }
    return -1
  }

  const trustMap = new Map<number, number>();
  const trustSet = new Set<number>();

  trust.forEach(([a, b]) => {
    trustMap.set(b, (trustMap.get(b) || 0) + 1);
    trustSet.add(a);
  });

  const trustArray = Array.from(trustMap);
  trustArray.sort((a, b) => b[1] - a[1]);

  const [maxTrustN, maxTrustCount] = trustArray[0];

  if (maxTrustCount === n - 1 && !trustSet.has(maxTrustN)) {
    return trustArray[0][0];
  }

  return -1;
}

// Example 1:
//
let n = 2;
let trust = [[1, 2]];
console.log(findJudge(n, trust));
// Output: 2
// Example 2:

n = 3;
trust = [[1, 3], [2, 3]];
console.log(findJudge(n, trust));
// Output: 3
// Example 3:
//
n = 3;
trust = [[1, 3], [2, 3], [3, 1]];
console.log(findJudge(n, trust));
// Output: -1

n = 3;
trust = [[1, 2], [2, 3]];
console.log(findJudge(n, trust));
