// [Easy] 270. Closest Binary Search Tree Value
// 270_closest_binary_search_tree_value

// https://leetcode.com/problems/closest-binary-search-tree-value
// Runtime: 93 ms, faster than 62.96% of TypeScript online submissions for Closest Binary Search Tree Value.
// Memory Usage: 47.2 MB, less than 22.22% of TypeScript online submissions for Closest Binary Search Tree Value.

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

function closestValue(root: TreeNode | null, target: number): number {
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
