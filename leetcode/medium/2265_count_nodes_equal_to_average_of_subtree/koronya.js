// [Medium] 2265. Count Nodes Equal to Average of Subtree
// 2265_count_nodes_equal_to_average_of_subtree

// https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree
// Runtime: 90 ms, faster than 65.00% of JavaScript online submissions for Count Nodes Equal to Average of Subtree.
// Memory Usage: 47.1 MB, less than 32.00% of JavaScript online submissions for Count Nodes Equal to Average of Subtree.

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
const averageOfSubtree = function (root) {
  let result = 0
  const postOrderTraversal = (node) => {
    if (node == null) {
      return [0, 0]
    }
    const [leftSum, leftCount] = postOrderTraversal(node.left)
    const [rightSum, rightCount] = postOrderTraversal(node.right)
    const nodeVal = node.val
    const sum = leftSum + rightSum + nodeVal
    const count = leftCount + rightCount + 1
    if (Math.floor(sum / count) === nodeVal) {
      result += 1
    }
    return [leftSum + rightSum + node.val, leftCount + rightCount + 1]
  }
  postOrderTraversal(root)

  return result
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(4)
root.left = new TreeNode(8)
root.left.left = new TreeNode(0)
root.left.right = new TreeNode(1)
root.right = new TreeNode(5)
root.right.right = new TreeNode(6)

averageOfSubtree(root)
