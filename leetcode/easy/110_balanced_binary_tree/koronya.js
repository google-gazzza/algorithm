// [Easy] 110. Balanced Binary Tree
// 110_balanced_binary_tree

// https://leetcode.com/problems/balanced-binary-tree
// Runtime: 76 ms, faster than 90.77% of JavaScript online submissions for Balanced Binary Tree.
// Memory Usage: 47.5 MB, less than 41.10% of JavaScript online submissions for Balanced Binary Tree.

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
 * @return {boolean}
 */
const isBalanced = function (root) {
  let continueFlag = true
  let result = true
  const postOrderTraversal = (node, height) => {
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

const root2 = new TreeNode(1)
root2.right = new TreeNode(2)
root2.left = new TreeNode(2)
root2.left.right = new TreeNode(3)
root2.left.left = new TreeNode(3)
root2.left.left.right = new TreeNode(4)
root2.left.left.left = new TreeNode(4)

const root3 = new TreeNode()

const root4 = new TreeNode(1)
root4.left = new TreeNode(2)

isBalanced(root)
isBalanced(root2)
isBalanced(root3)
isBalanced(root4)
