// https://leetcode.com/problems/binary-tree-preorder-traversal
// Runtime: 44 ms, faster than 98.50% of JavaScript online submissions for Binary Tree Preorder Traversal.
// Memory Usage: 33.5 MB, less than 100.00% of JavaScript online submissions for Binary Tree Preorder Traversal.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 문제에서는 recursive말고, iteratively라고 풀라고 함.
const preorderTraversal = root => {
  const resultArr = []
  const queue = [root]
  let target
  while (queue.length > 0) {
    target = queue.shift()
    if (target !== null) {
      resultArr.push(target.val)
      queue.unshift(target.right)
      queue.unshift(target.left)
    }
  }

  return resultArr
}

// recursive solution
// Runtime: 44 ms, faster than 98.50% of JavaScript online submissions for Binary Tree Preorder Traversal.
// Memory Usage: 33.7 MB, less than 96.55% of JavaScript online submissions for Binary Tree Preorder Traversal.
const preorderTraversal2 = root => {
  const resultArr = []
  const preOrder = root => {
    if (root == null) {
      return
    }
    resultArr.push(root.val)
    preOrder(root.left)
    preOrder(root.right)
  }
  preOrder(root)

  return resultArr
}
