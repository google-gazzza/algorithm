// https://leetcode.com/problems/insert-into-a-binary-search-tree
// Runtime: 108 ms, faster than 69.60% of JavaScript online submissions for Insert into a Binary Search Tree.
// Memory Usage: 42.1 MB, less than 8.33% of JavaScript online submissions for Insert into a Binary Search Tree.
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
const insertIntoBST = (root, val) => {
  let target = root
  while (true) {
    if (target.val < val) {
      if (target.right !== null) {
        target = target.right
      } else {
        target.right = new TreeNode(val)
        break
      }
    } else {
      if (target.left !== null) {
        target = target.left
      } else {
        target.left = new TreeNode(val)
        break
      }
    }
  }

  return root
}
