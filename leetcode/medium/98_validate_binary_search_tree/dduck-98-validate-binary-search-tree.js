/*
98-validate-binary-search-tree

# leetcode/medium/98. Validate Binary Search Tree98. Validate Binary Search Tree
Difficulty: medium
URL: https://leetcode.com/problems/validate-binary-search-tree/

## Approach

### en
Use pre-order traversal

### kr
pre-order탐색을 이용합니다.

## Solution
### JavaScript

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} node
 * @return {boolean}
 */
const isValidBST = (
  node,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
) => {
  if (node === null) {
    return true;
  }
  
  if (min < node.val && node.val < max) {
    return isValidBST(node.left, min, node.val)
      && isValidBST(node.right, node.val, max);
  }
  
  return false;
};

// test
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

isValidBST(new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6))));
//?
// false

isValidBST(new TreeNode(2, new TreeNode(1), new TreeNode(3)));
//?
// true

isValidBST(new TreeNode(0));
//?
// true

isValidBST(new TreeNode(5,
  new TreeNode(4), new TreeNode(6,
    new TreeNode(3), new TreeNode(7)),
  ),
);
// ?
// false
