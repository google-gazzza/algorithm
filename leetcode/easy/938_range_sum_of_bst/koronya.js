// [Easy] 938. Range Sum of BST
// 938_range_sum_of_bst

// https://leetcode.com/problems/range-sum-of-bst
// Runtime: 236 ms, faster than 44.30% of JavaScript online submissions for Range Sum of BST.
// Memory Usage: 69.2 MB, less than 49.79% of JavaScript online submissions for Range Sum of BST.

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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const rangeSumBST = function (root, low, high) {
  const candidateArr = []
  const inOrderTraversal = (node) => {
    if (node == null) {
      return
    }
    inOrderTraversal(node.left)
    candidateArr.push(node.val)
    inOrderTraversal(node.right)
  }
  inOrderTraversal(root)

  const startIndex = candidateArr.findIndex((item) => item === low)
  const endIndex = candidateArr.findIndex((item) => item === high)
  let result = 0
  for (let i = startIndex; i <= endIndex; i += 1 || 0) {
    result += candidateArr[i]
  }

  return result
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
