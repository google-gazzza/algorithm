// [Easy] 2236. Root Equals Sum of Children
// 2236_root_equals_sum_of_children

// https://leetcode.com/problems/root-equals-sum-of-children
// Runtime: 113 ms, faster than 100.00% of TypeScript online submissions for Root Equals Sum of Children.
// Memory Usage: 44.6 MB, less than 100.00% of TypeScript online submissions for Root Equals Sum of Children.

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

function checkTree(root: TreeNode | null): boolean {
  return root.val === root.left.val + root.right.val
}
