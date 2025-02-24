// leetcode/easy/1582. Special Positions in a Binary Matrix
// 1582-special-positions-in-a-binary-matrix
// URL: https://leetcode.com/problems/special-positions-in-a-binary-matrix/description/

function numSpecial(matrix: number[][]): number {
  let count = 0;

  for (let i = 0; i < matrix.length; i += 1) {
    const row = matrix[i];
    const rowSum = row.reduce((acc, curr) => acc + curr, 0);

    if (rowSum === 1) {
      const targetColumnIndex = row.indexOf(1);
      const col = matrix.map((_row) => _row[targetColumnIndex]);
      const colSum = col.reduce((acc, curr) => acc + curr, 0);

      if (colSum === 1) {
        count += 1;
      }
    }
  }

  return count;
}

mat = [[1, 0, 0], [0, 0, 1], [1, 0, 0]];
console.log(numSpecial(mat));
// Output: 1
mat = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
console.log(numSpecial(mat));

// Output: 3
