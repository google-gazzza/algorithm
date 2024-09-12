// [Easy] 938. Range Sum of BST
// 938_range_sum_of_bst

// https://leetcode.com/problems/range-sum-of-bst
// Runtime: 224 ms, faster than 70.10% of TypeScript online submissions for Range Sum of BST.
// Memory Usage: 66.4 MB, less than 92.78% of TypeScript online submissions for Range Sum of BST.

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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  const candidateArr = []
  const inOrderTraversal = (node: TreeNode | null) => {
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
  for (let i: number = startIndex; i <= endIndex; i += 1) {
    result += candidateArr[i]
  }

  return result
}
