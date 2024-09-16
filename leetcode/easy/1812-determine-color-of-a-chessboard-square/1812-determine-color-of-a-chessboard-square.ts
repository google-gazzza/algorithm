/*
1812-determine-color-of-a-chessboard-square
leetcode/easy/1812. Determine Color of a Chessboard Square
URL: https://leetcode.com/problems/determine-color-of-a-chessboard-square/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function squareIsWhite(coordinates: string): boolean {
  const column: { [key: string]: number } = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };

  const [inputColumn, inputRow] = coordinates.split('');
  const columnNumber: number = column[inputColumn];
  const rowNumber = Number(inputRow);

  let result = columnNumber % 2 === 0;
  if (rowNumber % 2 !== 1) {
    result = !result;
  }

  return result;
}


let coordinates = "a1"
console.log(squareIsWhite(coordinates));
// Output: false
// Explanation: From the chessboard above, the square with coordinates "a1" is black, so return false.
//   Example 2:

coordinates = "h3"
console.log(squareIsWhite(coordinates));
// Output: true
// Explanation: From the chessboard above, the square with coordinates "h3" is white, so return true.
//   Example 3:

coordinates = "c7"
console.log(squareIsWhite(coordinates));
// Output: false
