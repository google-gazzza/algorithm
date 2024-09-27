// [Medium] 129. Sum Root to Leaf Numbers
// 129_sum_root_to_leaf_numbers

// https://leetcode.com/problems/sum-root-to-leaf-numbers
// Runtime: 60 ms, faster than 99.80% of JavaScript online submissions for Sum Root to Leaf Numbers.
// Memory Usage: 39.9 MB, less than 67.98% of JavaScript online submissions for Sum Root to Leaf Numbers.

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
const sumNumbers = function (root) {
  let sum = 0
  const preOrderTraversal = (node, str = '') => {
    const newStr = str + node.val
    if (node.left == null && node.right == null) {
      sum += Number(newStr)
      return
    }
    if (node.left != null) {
      preOrderTraversal(node.left, newStr)
    }
    if (node.right != null) {
      preOrderTraversal(node.right, newStr)
    }
  }
  preOrderTraversal(root)
  return sum
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)

const root2 = new TreeNode(4)
root2.left = new TreeNode(9)
root2.right = new TreeNode(0)
root2.left.left = new TreeNode(5)
root2.left.right = new TreeNode(1)

sumNumbers(root) //?
sumNumbers(root2) //?
