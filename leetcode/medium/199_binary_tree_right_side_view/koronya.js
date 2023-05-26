// [Medium] 199. Binary Tree Right Side View
// 199_binary_tree_right_side_view

// https://leetcode.com/problems/binary-tree-right-side-view
// Runtime: 90 ms, faster than 53.42% of JavaScript online submissions for Binary Tree Right Side View.
// Memory Usage: 44 MB, less than 23.99% of JavaScript online submissions for Binary Tree Right Side View.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = function (root) {
  const levelMap = new Map()
  const preOrderTraversal = (node, level) => {
    if (node == null) {
      return
    }
    const nodeVal = node.val
    if (levelMap.has(level) === false) {
      levelMap.set(level, [nodeVal])
    } else {
      levelMap.get(level).push(nodeVal)
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

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.right = new TreeNode(5)
root.right = new TreeNode(3)
root.right.right = new TreeNode(4)

rightSideView(root)
