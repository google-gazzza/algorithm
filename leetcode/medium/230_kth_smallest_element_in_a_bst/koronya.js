// [Medium] 230. Kth Smallest Element in a BST
// 230_kth_smallest_element_in_a_bst

// https://leetcode.com/problems/kth-smallest-element-in-a-bst
// Runtime: 88 ms, faster than 87.74% of JavaScript online submissions for Kth Smallest Element in a BST.
// Memory Usage: 44.7 MB, less than 46.71% of JavaScript online submissions for Kth Smallest Element in a BST.

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
 * @param {number} k
 * @return {number}
 */

const kthSmallest = function (root, k) {
  const resultArr = []
  const inOrderTraversal = (node) => {
    if (node !== null && resultArr.length !== k) {
      inOrderTraversal(node.left)
      resultArr.push(node.val)
      inOrderTraversal(node.right)
    }
  }

  inOrderTraversal(root)
  return resultArr[k - 1]
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(3)
root.left = new TreeNode(1)
root.left.right = new TreeNode(2)
root.right = new TreeNode(4)

kthSmallest(root, 1) //?

const root2 = new TreeNode(5)
root2.left = new TreeNode(3)
root2.left.left = new TreeNode(2)
root2.left.right = new TreeNode(4)
root2.left.left.left = new TreeNode(1)
root2.right = new TreeNode(6)

kthSmallest(root2, 3) //?
