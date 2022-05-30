// [Easy] 110. Balanced Binary Tree
// 110_balanced_binary_tree

// https://leetcode.com/problems/balanced-binary-tree
// Runtime: 83 ms, faster than 84.46% of TypeScript online submissions for Balanced Binary Tree.
// Memory Usage: 47.7 MB, less than 88.51% of TypeScript online submissions for Balanced Binary Tree.

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

type TypeTreeNodeOrNull = TreeNode | null

function isBalanced(root: TypeTreeNodeOrNull): boolean {
  let continueFlag = true
  let result = true
  const postOrderTraversal = (node: TypeTreeNodeOrNull, height: number): number => {
    if (continueFlag === false) {
      return -1
    }
    if (!node) {
      return height - 1
    }
    const left = postOrderTraversal(node.left, height + 1)
    const right = postOrderTraversal(node.right, height + 1)
    if (Math.abs(left - right) > 1) {
      continueFlag = false
      result = false
    }
    return Math.max(...[left, right, height])
  }
  postOrderTraversal(root, 0)

  return result
}
