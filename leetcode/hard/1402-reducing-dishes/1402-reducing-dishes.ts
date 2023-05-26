/*
leetcode/hard/1402. Reducing Dishes
1402-reducing-dishes
uRL: https://leetcode.com/problems/reducing-dishes/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function accumulateToArray(peviousCandidate: number[], newCandidate: number[]): number[] {
  for (let i = 0; i < peviousCandidate.length; i += 1) {
    newCandidate[i] += peviousCandidate[i];
  }

  return newCandidate;
}

function maxSatisfaction(satisfaction: number[]): number {
  let maximumCandidates: number[] = [];
  let maxSum = 0;

  satisfaction.sort((a, b) => b - a);

  for (let i = 0; i < satisfaction.length; i += 1) {
    maximumCandidates = accumulateToArray(maximumCandidates, satisfaction.slice(0, i + 1));
    const currentSum = maximumCandidates.reduce((a, b) => a + b, 0);

    if (currentSum > maxSum) {
      maxSum = currentSum;
    } else {
      break;
    }
  }

  return maxSum;
}

let satisfaction = [-1, -8, 0, 5, -9];
maxSatisfaction(satisfaction);
//?
// Output: 14

satisfaction = [4, 3, 2];
maxSatisfaction(satisfaction);
// Output: 20

satisfaction = [-1, -4, -5];
maxSatisfaction(satisfaction);
// Output: 0
