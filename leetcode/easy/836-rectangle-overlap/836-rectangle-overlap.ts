/*
836-rectangle-overlap
leetcode/easy/836. Rectangle Overlap
Difficulty: easy
URL: https://leetcode.com/problems/rectangle-overlap/

NOTE: Description

NOTE: Constraints
  - rect1.length == 4
  - rect2.length == 4
  - -109 <= rec1[i], rec2[i] <= 109
  - rec1 and rec2 represent a valid rectangle with a non-zero area. 

NOTE: Explanation
*/

function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
  if (rec1[0] > rec2[0]) {
    [rec2, rec1] = [rec1, rec2];
  }

  const [rec1_x1, rec1_y1, rec1_x2, rec1_y2] = rec1;
  const [rec2_x1, rec2_y1, rec2_x2, rec2_y2] = rec2;

  if ((rec1_x1 <= rec2_x1 && rec2_x1 < rec1_x2)) {
    if (rec1_y1 <= rec2_y1 && rec2_y1 <= rec1_y2) {
      return true;
    }
    if (rec1_y1 <= rec2_y2 && rec2_y2 <= rec1_y2) {
      return true;
    }
    if (rec2_y1 < rec1_y1 && rec2_y2 > rec1_y2) {
      return true;
    }
  }

  return false;
}

// Example 1:
let rec1 = [0, 0, 2, 2];
let rec2 = [1, 1, 3, 3];
console.log(isRectangleOverlap(rec1, rec2)); // true
// Output: true

// Example 2:
rec1 = [0, 0, 1, 1];
rec2 = [1, 0, 2, 1];
console.log(isRectangleOverlap(rec1, rec2)); //false
// Output: false

// Example 3:
rec1 = [0, 0, 1, 1];
rec2 = [2, 2, 3, 3];
console.log(isRectangleOverlap(rec1, rec2)); //false
// Output: false

rec1 = [7, 8, 13, 15];
rec2 = [10, 8, 12, 20];
console.log(isRectangleOverlap(rec1, rec2)); // true

rec1 = [5, 15, 8, 18];
rec2 = [0, 3, 7, 9];
console.log(isRectangleOverlap(rec1, rec2)); //False

rec1 = [2, 17, 6, 20];
rec2 = [3, 8, 6, 20];
console.log(isRectangleOverlap(rec1, rec2)); // true

