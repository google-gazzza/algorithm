/*
404-sum-of-left-leaves
leetcode/medium/404. Sum of Left Leaves
Difficulty: easy
URL: https://leetcode.com/problems/sum-of-left-leaves/

NOTE: Description
  Given the root of a binary tree, return the sum of all left leaves.

NOTE: Constraints
  The number of nodes in the tree is in the range [1, 1000].
  -1000 <= Node.val <= 1000

NOTE: Explanation
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

 function sumOfLeftLeaves(root: TreeNode | null): number {
  let sum = 0;

  const preOrderTraversal = (node: TreeNode) => {
    if (!node) {
      return;
    }

    if (node.left) {
      if (!node.left.left && !node.left.right) {
        sum += node.left.val;
      }
    }

    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  };

  preOrderTraversal(root);

  return sum;
};
