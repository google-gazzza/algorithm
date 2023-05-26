/*
270-closest-binary-search-tree-value
leetcode/easy/270. Closest Binary Search Tree Value
Difficulty: easy
URL: https://leetcode.com/problems/closest-binary-search-tree-value/
*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/*
Constraints:

The number of nodes in the tree is in the range [1, 104].
0 <= Node.val <= 109
-109 <= target <= 109
 */

function getClosestValue(target, a, b) {
    if (Math.abs(target - a) < Math.abs(target - b)) {
      return a;
    } else {
      return b;
    }
  }
  
  
  function closestValue(root: TreeNode | null, target: number): number {
    const result = [];
  
    const preOrderTraversal = (node: TreeNode) => {
      if (node === null) {
        return;
      }
      result.push(node.val);
      preOrderTraversal(node.left);
      preOrderTraversal(node.right);
    };
  
    preOrderTraversal(root);
  
    result.sort((a, b) => a - b);
  
    if (result.length === 0) {
      return null;
    }
  
    if (result.length === 1) {
      return result.pop();
    }
  
    if (result.indexOf(target) !== -1) {
      return target;
    }
  
    let minIndex = 0;
    let minimumDifference = Number.MAX_SAFE_INTEGER;
  
    result.forEach((e, i) => {
      let difference = Math.abs(target - e);
      if (difference < minimumDifference) {
        minimumDifference = difference;
        minIndex = i;
      }
    })
  
    return result[minIndex];
  };
  