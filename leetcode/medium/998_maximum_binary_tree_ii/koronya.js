// https://leetcode.com/problems/maximum-binary-tree-ii
// Runtime: 52 ms, faster than 95.83% of JavaScript online submissions for Maximum Binary Tree II.
// Memory Usage: 34.7 MB, less than 100.00% of JavaScript online submissions for Maximum Binary Tree II.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoMaxTree = (root, val) => {
  if (root === null) {
    return new TreeNode(val)
  }
  
  if (root.val < val) {
    const node = new TreeNode(val)
    node.left = root
    return node
  }

  root.right = insertIntoMaxTree(root.right, val)
  return root
}
