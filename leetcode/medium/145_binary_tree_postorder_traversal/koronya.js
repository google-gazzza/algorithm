// [Medium] 145. Binary Tree Postorder Traversal
// 145_binary_tree_postorder_traversal

// https://leetcode.com/problems/binary-tree-postorder-traversal
// Runtime: 80 ms, faster than 56.91% of JavaScript online submissions for Binary Tree Postorder Traversal.
// Memory Usage: 38.7 MB, less than 64.75% of JavaScript online submissions for Binary Tree Postorder Traversal.

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
const postorderTraversal = function (root) {
  let resultArr = []
  const postTraversal = (node) => {
    if (node !== null) {
      postTraversal(node.left)
      postTraversal(node.right)
      resultArr.push(node.val)
    }
  }
  postTraversal(root)

  return resultArr
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)

postorderTraversal(root) //?
