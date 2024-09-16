// [Easy] 543. Diameter of Binary Tree
// 543_diameter_of_binary_tree

// https://leetcode.com/problems/diameter-of-binary-tree
// Runtime: 92 ms, faster than 80.56% of TypeScript online submissions for Diameter of Binary Tree.
// Memory Usage: 42.7 MB, less than 100.00% of TypeScript online submissions for Diameter of Binary Tree.

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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let max: number = 0
  const dfs = (node: TreeNode | null): number => {
    if (node === null) {
      return 0
    }
    const left: number = dfs(node.left)
    const right: number = dfs(node.right)
    max = Math.max(max, left + right)
    return 1 + Math.max(left, right)
  }
  dfs(root)

  return max
}

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right = new TreeNode(3)

const root2 = new TreeNode(2)
root2.left = new TreeNode(3)
root2.left.left = new TreeNode(1)

const root3 = new TreeNode(4)
root3.left = new TreeNode(-7)
root3.right = new TreeNode(-3)
root3.right.left = new TreeNode(-9)
root3.right.right = new TreeNode(-3)

// diameterOfBinaryTree(root) //?
// diameterOfBinaryTree(root2) //?
diameterOfBinaryTree(root3) //?
