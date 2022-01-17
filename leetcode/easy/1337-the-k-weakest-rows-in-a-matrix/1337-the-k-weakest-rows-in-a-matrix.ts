/*
1337-the-k-weakest-rows-in-a-matrix
leetcode/easy/1337. The K Weakest Rows in a Matrix
Difficulty: easy
URL: https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
*/


/*

Constraints:

m == mat.length
n == mat[i].length
2 <= n, m <= 100
1 <= k <= m
matrix[i][j] is either 0 or 1.

 */
function kWeakestRows(mat: number[][], k: number): number[] {
    return mat.map((e, index) => {
      return [e.reduce((acc, cur) => acc + cur, 0), index];
    }).sort((a, b) => a[0] - b[0])
      .slice(0, k)
      .map(e => e[1]);
  };
  
  
  let mat = [[1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]];
  let k = 3;
  
  console.log(kWeakestRows(mat, k));
  // Output: [2, 0, 3];
  
  
  mat = [[1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0]];
  k = 2;
  
  console.log(kWeakestRows(mat, k));
  // Output: [0, 2];
  