/*
fun-with-trees-max-sum

# codewars/6kyu/Fun with trees: max sum
Difficulty: 6kyu
URL: https://www.codewars.com/kata/57e5279b7cf1aea5cf000359/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

// var TreeNode = function (value, left, right) {
//   this.value = value;
//   this.left = left;
//   this.right = right;
// };

function maxSum(node) {
  if (!node) {
    return 0;
  }
  
  return node.value + Math.max(maxSum(node.left), maxSum(node.right));
}
