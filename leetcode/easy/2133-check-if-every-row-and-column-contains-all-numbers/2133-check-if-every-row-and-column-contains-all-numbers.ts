/*
2133-check-if-every-row-and-column-contains-all-numbers
leetcode/easy/2133. Check if Every Row and Column Contains All Numbers
URL: https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function checkValid(matrix: number[][]): boolean {
  const set: Set<number> = new Set();

  for (let i = 0; i < matrix.length; i += 1) {
    set.add(i + 1);
  }

  for (let i = 0; i < matrix.length; i += 1) {
    const rowSet = new Set(matrix[i]);

    const columnSet = new Set();
    for (let j = 0; j < matrix[i].length; j += 1) {
      columnSet.add(matrix[j][i]);
    }

    let result = true;
    set.forEach((num) => {
      if (!rowSet.has(num) || !columnSet.has(num)) {
        result = false;
      }
    });

    if (!result) {
      return false;
    }
  }

  return true;
}

let matrix = [[1, 2, 3], [3, 1, 2], [2, 3, 1]];
console.log(checkValid(matrix));
// Output: true

matrix = [[1, 1, 1], [1, 2, 3], [1, 2, 3]];
console.log(checkValid(matrix));
// Output: false
