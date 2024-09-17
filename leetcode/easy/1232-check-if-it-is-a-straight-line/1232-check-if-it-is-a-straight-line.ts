/*
# leetcode/easy/1232. Check If It Is a Straight Line
# 1232-check-if-it-is-a-straight-line
# URL: https://leetcode.com/problems/check-if-it-is-a-straight-line/description/?envType=study-plan-v2&id=programming-skills

NOTE: Description
NOTE: Constraints
NOTE: Explanatin
NOTE: Reference

*/

function checkStraightLine(coordinates: number[][]): boolean {
  const [x1, y1] = coordinates[0];
  const [x2, y2] = coordinates[1];
  const slope = (y2 - y1) / (x2 - x1);

  for (let i = 2; i < coordinates.length; i += 1) {
    const [x, y] = coordinates[i];
    let newSlope = (y - y1) / (x - x1);

    if (newSlope === -Infinity) {
      newSlope = Infinity;
    }

    if (newSlope !== slope) {
      return false;
    }
  }

  return true;
}

let coordinates = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]];
console.log(checkStraightLine(coordinates));
// Output: true

coordinates = [[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]];
console.log(checkStraightLine(coordinates));
// Output: false

coordinates = [[0, 0], [0, 1], [0, -1]];
console.log(checkStraightLine(coordinates));
// true

// Infinity === Infinity/**/;
