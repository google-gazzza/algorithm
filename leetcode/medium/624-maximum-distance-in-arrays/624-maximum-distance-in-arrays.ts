// leetcode/medium/624. Maximum Distance in Arrays
// 624-maximum-distance-in-arrays
// URL: https://leetcode.com/problems/maximum-distance-in-arrays/description/?envType=study-plan-v2&envId=premium-algo-100

function maxDistance(arrays: number[][]): number {
  const maxCandidates = [];
  const minCandidates = [];

  for (let i = 0; i < arrays.length; i++) {
    maxCandidates.push([arrays[i][arrays[i].length - 1], i]);
    minCandidates.push([arrays[i][0], i]);
  }

  maxCandidates.sort((a, b) => b[0] - a[0]);
  minCandidates.sort((a, b) => a[0] - b[0]);

  if (maxCandidates[0][1] !== minCandidates[0][1]) {
    return Math.abs(maxCandidates[0][0] - minCandidates[0][0]);
  } else {
    return Math.max(
      Math.abs(maxCandidates[0][0] - minCandidates[1][0]),
      Math.abs(maxCandidates[1][0] - minCandidates[0][0]));
  }
}


let arr = [[-10, -9, -9, -3, -1, -1, 0], [-5], [4], [-8], [-9, -6, -5, -4, -2, 2, 3], [-3, -3, -2, -1, 0]];
// console.log(maxDistance(arr));

arr = [[-1, 1], [-3, 1, 4], [-2, -1, 0, 2]];
console.log(maxDistance(arr));
