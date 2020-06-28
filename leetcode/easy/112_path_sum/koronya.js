// [Easy] 112. Path Sum
// 112_path_sum

// https://leetcode.com/problems/path-sum
// Runtime: 76 ms, faster than 61.34% of JavaScript online submissions for Path Sum.
// Memory Usage: 39.4 MB, less than 8.08% of JavaScript online submissions for Path Sum.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = (root, sum) => {
  let returnFlag = false
  const dfs = (accSum, node) => {
    if (node === null) {
      return
    }
    const newSum = accSum + node.val
    if (newSum === sum && node.left === null && node.right === null) {
      returnFlag = true
      return
    }
    dfs(newSum, node.left)
    dfs(newSum, node.right)
  }
  dfs(0, root)

  return returnFlag
}
