// [Medium] 1973. Count Nodes Equal to Sum of Descendants
// 1973_count_nodes_equal_to_sum_of_descendants

// https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants
// Runtime: 401 ms, faster than 75.00% of JavaScript online submissions for Count Nodes Equal to Sum of Descendants.
// Memory Usage: 96.9 MB, less than 62.50% of JavaScript online submissions for Count Nodes Equal to Sum of Descendants.

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
const equalToDescendants = function (root) {
  let result = 0
  const postOrderTraversal = (node) => {
    if (!node) {
      return 0
    }
    const leftSum = postOrderTraversal(node.left)
    const rightSum = postOrderTraversal(node.right)
    if (node.val === leftSum + rightSum) {
      result += 1
    }
    return leftSum + rightSum + node.val
  }
  postOrderTraversal(root)

  return result
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(10)
root.left = new TreeNode(3)
root.right = new TreeNode(4)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(1)

equalToDescendants(root)
