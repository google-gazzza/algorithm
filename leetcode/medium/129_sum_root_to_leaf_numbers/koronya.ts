// [Medium] 129. Sum Root to Leaf Numbers
// 129_sum_root_to_leaf_numbers

// https://leetcode.com/problems/sum-root-to-leaf-numbers
// Runtime: 72 ms, faster than 94.59% of TypeScript online submissions for Sum Root to Leaf Numbers.
// Memory Usage: 40.8 MB, less than 40.54% of TypeScript online submissions for Sum Root to Leaf Numbers.

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
function sumNumbers(root: TreeNode | null): number {
  let sum: number = 0
  const preOrderTraversal = (node: TreeNode, str: string = '') => {
    const newStr = str + node.val
    if (node.left == null && node.right == null) {
      sum += Number(newStr)
      return
    }
    if (node.left != null) {
      preOrderTraversal(node.left, newStr)
    }
    if (node.right != null) {
      preOrderTraversal(node.right, newStr)
    }
  }
  preOrderTraversal(root as TreeNode)
  return sum
}

sumNumbers(root) //?
sumNumbers(root2) //?
