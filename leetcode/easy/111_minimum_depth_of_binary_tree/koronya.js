// [Easy] 111. Minimum Depth of Binary Tree
// 111_minimum_depth_of_binary_tree

// https://leetcode.com/problems/minimum-depth-of-binary-tree
// Runtime: 252 ms, faster than 81.60% of JavaScript online submissions for Minimum Depth of Binary Tree.
// Memory Usage: 75.5 MB, less than 13.43% of JavaScript online submissions for Minimum Depth of Binary Tree.

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
 * @return {number}
 */
const minDepth = function (root) {
  if (root === null) {
    return 0
  }
  const depthSet = new Set()
  const preOrderTraversal = (node, level) => {
    if (node !== null) {
      if (node.left === null && node.right === null) {
        depthSet.add(level)
      } else {
        preOrderTraversal(node.left, level + 1)
        preOrderTraversal(node.right, level + 1)
      }
    }
  }
  preOrderTraversal(root, 1)
  return [...depthSet].sort((a, b) => a - b)[0]
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

minDepth(root) //?
