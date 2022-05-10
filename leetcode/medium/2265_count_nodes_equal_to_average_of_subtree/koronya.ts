// [Medium] 2265. Count Nodes Equal to Average of Subtree
// 2265_count_nodes_equal_to_average_of_subtree

// https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree
// Runtime: 81 ms, faster than 100.00% of TypeScript online submissions for Count Nodes Equal to Average of Subtree.
// Memory Usage: 47.3 MB, less than 100.00% of TypeScript online submissions for Count Nodes Equal to Average of Subtree.

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

function averageOfSubtree(root: TreeNode | null): number {
  let result = 0
  const postOrderTraversal = (node: TreeNode | null): [number, number] => {
    if (node == null) {
      return [0, 0]
    }
    const [leftSum, leftCount] = postOrderTraversal(node.left)
    const [rightSum, rightCount] = postOrderTraversal(node.right)
    const nodeVal = node.val
    const sum = leftSum + rightSum + nodeVal
    const count = leftCount + rightCount + 1
    if (Math.floor(sum / count) === nodeVal) {
      result += 1
    }
    return [leftSum + rightSum + node.val, leftCount + rightCount + 1]
  }
  postOrderTraversal(root)

  return result
}
