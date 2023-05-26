// [Easy] 606. Construct String from Binary Tree
// 606_construct_string_from_binary_tree

// https://leetcode.com/problems/construct-string-from-binary-tree
// Runtime: 84 ms, faster than 98.46% of JavaScript online submissions for Construct String from Binary Tree.
// Memory Usage: 44 MB, less than 48.46% of JavaScript online submissions for Construct String from Binary Tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
const tree2str = function (t) {
  let resultStr = ''
  const preOrderTraversal = (node) => {
    if (node === null) {
      return null
    }
    resultStr += `(${node.val}`
    const invalidLeftChild = node.left === null
    const invalidRightChild = node.right === null
    if (invalidLeftChild === true && invalidRightChild === false) {
      resultStr += '()'
    }
    preOrderTraversal(node.left)
    preOrderTraversal(node.right)
    resultStr += ')'
  }
  preOrderTraversal(t)

  return resultStr.substring(1, resultStr.length - 1)
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(4)
root.right = new TreeNode(3)

const root2 = new TreeNode(1)
root2.left = new TreeNode(2)
root2.left.right = new TreeNode(4)
root2.right = new TreeNode(3)

tree2str(root) //?
tree2str(root2) //?
