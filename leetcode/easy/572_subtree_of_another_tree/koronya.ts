// [Easy] 572. Subtree of Another Tree
// 572_subtree_of_another_tree

// https://leetcode.com/problems/subtree-of-another-tree
// Runtime: 104 ms, faster than 65.22% of TypeScript online submissions for Subtree of Another Tree.
// Memory Usage: 46 MB, less than 63.04% of TypeScript online submissions for Subtree of Another Tree.

type TreeNodeOrNull = TreeNode | null

const isIdentical = (a: TreeNodeOrNull, b: TreeNodeOrNull): boolean => {
  if (a == null && b == null) {
    return true
  }
  if (a == null || b == null) {
    return false
  }
  return a.val === b.val && isIdentical(a.left, b.left) && isIdentical(a.right, b.right)
}

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

function isSubtree(root: TreeNodeOrNull, subRoot: TreeNodeOrNull): boolean {
  const targetVal = subRoot?.val
  let flag = false

  const preOrderTraversal = (node: TreeNodeOrNull) => {
    if (flag === true || node == null) {
      return
    }
    if (node.val === targetVal) {
      if (isIdentical(node, subRoot) === true) {
        flag = true
      }
    }
    preOrderTraversal(node.left)
    preOrderTraversal(node.right)
  }
  preOrderTraversal(root)

  return flag
}
