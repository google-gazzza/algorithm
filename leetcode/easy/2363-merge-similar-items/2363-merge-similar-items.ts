/*
2363-merge-similar-items
leetcode/easy/2363. Merge Similar Items
URL: https://leetcode.com/problems/merge-similar-items/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
  let result: number[][] = [];
  items1.sort((a, b) => a[0] - b[0]);
  items2.sort((a, b) => a[0] - b[0]);

  while (items1.length > 0 && items2.length > 0) {
    if (items1[0][0] === items2[0][0]) {
      const [lKey, lValue] = items1.shift();
      const [, rValue] = items2.shift();
      result.push([lKey, lValue + rValue]);
    } else if (items1[0][0] < items2[0][0]) {
      result.push(items1.shift());
    } else {
      result.push(items2.shift());
    }
  }

  result = result.concat(items1).concat(items2);
  result.sort((a, b) => a[0] - b[0]);

  return result;
}

let items1 = [[1, 1], [4, 5], [3, 8]];
let items2 = [[3, 1], [1, 5]];
mergeSimilarItems(items1, items2);

// Output: [[1,6],[3,9],[4,5]]
// Explanation:

items1 = [[1, 1], [3, 2], [2, 3]];
items2 = [[2, 1], [3, 2], [1, 3]];
mergeSimilarItems(items1, items2);

// Output: [[1,4],[2,4],[3,4]]
// Explanation:
//   The item with value = 1 occurs in items1 with weight = 1 and in items2 with weight = 3, total weight = 1 + 3 = 4.
// The item with value = 2 occurs in items1 with weight = 3 and in items2 with weight = 1, total weight = 3 + 1 = 4.
// The item with value = 3 occurs in items1 with weight = 2 and in items2 with weight = 2, total weight = 2 + 2 = 4.
// Therefore, we return [[1,4],[2,4],[3,4]].
//   Example 3:

items1 = [[1, 3], [2, 2]];
items2 = [[7, 1], [2, 2], [1, 4]];
mergeSimilarItems(items1, items2);
// Output: [[1,7],[2,4],[7,1]]
// Explanation:
//   The item with value = 1 occurs in items1 with weight = 3 and in items2 with weight = 4, total weight = 3 + 4 = 7.
// The item with value = 2 occurs in items1 with weight = 2 and in items2 with weight = 2, total weight = 2 + 2 = 4.
// The item with value = 7 occurs in items2 with weight = 1, total weight = 1.
// Therefore, we return [[1,7],[2,4],[7,1]].
