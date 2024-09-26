// [Medium] 1973. Count Nodes Equal to Sum of Descendants
// 1973_count_nodes_equal_to_sum_of_descendants

// https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants
// Runtime: 632 ms, faster than 100.00% of TypeScript online submissions for Count Nodes Equal to Sum of Descendants.
// Memory Usage: 127.2 MB, less than 100.00% of TypeScript online submissions for Count Nodes Equal to Sum of Descendants.

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

function equalToDescendants(root: TreeNode | null): number {
  let result = 0
  const postOrderTraversal = (node: TreeNode | null): number => {
    if (!node) {
      return 0
    }
    const leftSum = postOrderTraversal(node.left)
    const rightSum = postOrderTraversal(node.right)
    if (node.val === leftSum + rightSum) {
      result += 1
    }
    return leftSum + rightSum + node.val
  }
  postOrderTraversal(root)

  return result
}
