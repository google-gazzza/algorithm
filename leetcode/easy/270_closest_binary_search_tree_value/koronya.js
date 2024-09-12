// [Easy] 270. Closest Binary Search Tree Value
// 270_closest_binary_search_tree_value

// https://leetcode.com/problems/closest-binary-search-tree-value
// Runtime: 67 ms, faster than 92.48% of JavaScript online submissions for Closest Binary Search Tree Value.
// Memory Usage: 45.8 MB, less than 33.58% of JavaScript online submissions for Closest Binary Search Tree Value.

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
 * @param {number} target
 * @return {number}
 */
const closestValue = function (root, target) {
  let candidateDiff = Number.MAX_SAFE_INTEGER
  let candidateNumber = -1
  let nextItem = root
  while (nextItem) {
    const num = nextItem.val
    const diff = Math.abs(num - target)
    if (candidateDiff > diff) {
      candidateDiff = diff
      candidateNumber = num
    }
    if (num < target) {
      nextItem = nextItem.right
    } else if (num > target) {
      nextItem = nextItem.left
    } else {
      break
    }
  }

  return candidateNumber
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(4)
root.left = new TreeNode(2)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
root.right = new TreeNode(5)

closestValue(root, 3.7)
