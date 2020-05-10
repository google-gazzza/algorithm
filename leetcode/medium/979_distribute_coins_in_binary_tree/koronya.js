// https://leetcode.com/problems/distribute-coins-in-binary-tree
// Runtime: 56 ms, faster than 95.16% of JavaScript online submissions for Distribute Coins in Binary Tree.
// Memory Usage: 36.2 MB, less than 100.00% of JavaScript online submissions for Distribute Coins in Binary Tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const distributeCoins = root => {
  const postOrder = node => {
    if (node !== null) {
      const {count: count1, diff: diff1} = postOrder(node.left)
      const {count: count2, diff: diff2} = postOrder(node.right)
      const diff = 1 - node.val + diff1 + diff2
      const count = Math.abs(diff) + count1 + count2
      return {count, diff}
    }
    return {count: 0, diff: 0}
  }

  return postOrder(root).count
}
