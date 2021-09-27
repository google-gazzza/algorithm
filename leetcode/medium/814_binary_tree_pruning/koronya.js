// https://leetcode.com/problems/binary-tree-pruning
// Runtime: 44 ms, faster than 99.01% of JavaScript online submissions for Binary Tree Pruning.
// Memory Usage: 33.9 MB, less than 50.00% of JavaScript online submissions for Binary Tree Pruning.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const pruneTree7 = root => {
  if (root === null) {
    return null
  }
  root.left = pruneTree7(root.left)
  root.right = pruneTree7(root.right)
  return (root.left === null && root.right === null && root.val === 0)
    ? null
    : root
}
