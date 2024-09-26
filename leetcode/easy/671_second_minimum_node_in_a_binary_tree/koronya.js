// [Easy] 671. Second Minimum Node In a Binary Tree
// 671_second_minimum_node_in_a_binary_tree

// https://leetcode.com/problems/second-minimum-node-in-a-binary-tree
// Runtime: 76 ms, faster than 68.91% of JavaScript online submissions for Second Minimum Node In a Binary Tree.
// Memory Usage: 38.5 MB, less than 64.29% of JavaScript online submissions for Second Minimum Node In a Binary Tree.

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
const findSecondMinimumValue = function (root) {
  const candidateSet = new Set()
  const postOrderTraversal = (node) => {
    if (node === null) {
      return
    }
    postOrderTraversal(node.left)
    postOrderTraversal(node.right)
    const val = node.val
    if (candidateSet.has(val) === false) {
      candidateSet.add(val)
    }
  }
  postOrderTraversal(root)

  const arr = [...candidateSet].sort((a, b) => a - b)
  return arr.length === 1 ? -1 : arr[1]
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// const root = new TreeNode(2)
// root.left = new TreeNode(2)
// root.right = new TreeNode(5)
// root.right.left = new TreeNode(5)
// root.right.right = new TreeNode(7)

// findSecondMinimumValue(root) //?

// const root = new TreeNode(2)
// root.left = new TreeNode(2)
// root.right = new TreeNode(2)

// findSecondMinimumValue(root) //?
