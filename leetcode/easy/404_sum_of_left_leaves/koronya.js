// [Easy] 404. Sum of Left Leaves
// 404_sum_of_left_leaves

// https://leetcode.com/problems/sum-of-left-leaves
// Runtime: 76 ms, faster than 95.65% of JavaScript online submissions for Sum of Left Leaves.
// Memory Usage: 40.1 MB, less than 66.30% of JavaScript online submissions for Sum of Left Leaves.

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
const sumOfLeftLeaves = function (root) {
  let sum = 0
  const traversal = (node, isLeftChild = false) => {
    if (node === null) {
      return
    }
    const nodeVal = node.val
    if (node.left === null && node.right === null && isLeftChild === true) {
      sum += nodeVal
    }
    traversal(node.left, true)
    traversal(node.right)
  }
  traversal(root)

  return sum
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

sumOfLeftLeaves(root) //?
