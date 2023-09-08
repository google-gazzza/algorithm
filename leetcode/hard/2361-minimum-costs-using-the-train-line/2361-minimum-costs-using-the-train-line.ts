// leetcode/hard/2361. Minimum Costs Using the Train Line
// 2361-minimum-costs-using-the-train-line
// URL: https://leetcode.com/problems/minimum-costs-using-the-train-line/

function minimumCosts(regular: number[], express: number[], expressCost: number): number[] {
  const aboveLine = [0];
  const belowLine = [expressCost];

  for (let i = 0; i < regular.length; i += 1) {
    const bellowCandidate = belowLine[i] + express[i];
    const aboveCandidate = aboveLine[i] + regular[i];
    const belowTransitCandidate = belowLine[i] + regular[i];
    const aboveTransitCandidate = aboveLine[i] + expressCost + express[i];
    aboveLine.push(Math.min(aboveCandidate, bellowCandidate, belowTransitCandidate));
    belowLine.push(Math.min(bellowCandidate, aboveTransitCandidate));
  }

  const result: number[] = [];

  for (let i = 1; i < aboveLine.length; i += 1) {
    result.push(Math.min(aboveLine[i], belowLine[i]));
  }

  return result;
}

let regular = [1, 6, 9, 5];
let express = [5, 2, 3, 10];
let expressCost = 8;
console.log(minimumCosts(regular, express, expressCost));
// Output: [1,7,14,19]

regular = [11, 5, 13];
express = [7, 10, 6];
expressCost = 3;
console.log(minimumCosts(regular, express, expressCost));
// Output: [10,15,24]

// Constraints:
//
//   n == regular.length == express.length
// 1 <= n <= 105
// 1 <= regular[i], express[i], expressCost <= 105

regular = [5, 21, 9, 25, 13, 15, 28, 5, 1, 10];
express = [15, 18, 23, 21, 22, 17, 9, 20, 14, 33];
//         [5, 26, 35, 60, 73, 88, 108, 115, 116, 126]
// exprect [5, 26, 35, 60, 73, 88, 108, 113, 114, 124]

expressCost = 11;
console.log(minimumCosts(regular, express, expressCost));

