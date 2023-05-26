// [Medium] 199. Binary Tree Right Side View
// 199_binary_tree_right_side_view

// https://leetcode.com/problems/binary-tree-right-side-view
// Runtime: 82 ms, faster than 60.19% of TypeScript online submissions for Binary Tree Right Side View.
// Memory Usage: 44.6 MB, less than 64.08% of TypeScript online submissions for Binary Tree Right Side View.

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

function rightSideView(root: TreeNode | null): number[] {
  const levelMap = new Map<number, number[]>()
  const preOrderTraversal = (node: TreeNode | null, level: number) => {
    if (node == null) {
      return
    }
    const nodeVal = node.val
    if (levelMap.has(level) === false) {
      levelMap.set(level, [nodeVal])
    } else {
      levelMap.get(level)!.push(nodeVal)
    }
    preOrderTraversal(node.left, level + 1)
    preOrderTraversal(node.right, level + 1)
  }
  preOrderTraversal(root, 0)

  return [...levelMap].map((item) => {
    const nodeLen = item[1].length
    return item[1][nodeLen - 1]
  })
}
