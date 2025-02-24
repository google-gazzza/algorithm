// [Easy] 572. Subtree of Another Tree
// 572_subtree_of_another_tree

// https://leetcode.com/problems/subtree-of-another-tree
// Runtime: 100 ms, faster than 66.27% of JavaScript online submissions for Subtree of Another Tree.
// Memory Usage: 45.4 MB, less than 87.97% of JavaScript online submissions for Subtree of Another Tree.

const isIdentical = (a, b) => {
  if (a == null && b == null) {
    return true
  }
  if (a == null || b == null) {
    return false
  }
  return a.val === b.val && isIdentical(a.left, b.left) && isIdentical(a.right, b.right)
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const isSubtree = function (s, t) {
  const targetVal = t.val
  let flag = false

  const preOrderTraversal = (node) => {
    if (flag === true || node == null) {
      return
    }
    if (node.val === targetVal) {
      if (isIdentical(node, t) === true) {
        flag = true
      }
    }
    preOrderTraversal(node.left)
    preOrderTraversal(node.right)
  }
  preOrderTraversal(s)

  return flag
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// const s = new TreeNode(3)
// s.left = new TreeNode(4)
// s.left.left = new TreeNode(1)
// s.left.right = new TreeNode(2)
// s.right = new TreeNode(5)

// const t = new TreeNode(4)
// t.left = new TreeNode(1)
// t.right = new TreeNode(2)

// isSubtree(s, t) //?

const s = new TreeNode(3)
s.left = new TreeNode(4)
s.left.left = new TreeNode(1)
s.left.right = new TreeNode(2)
s.left.right.left = new TreeNode(0)
s.right = new TreeNode(5)

const t = new TreeNode(4)
t.left = new TreeNode(1)
t.right = new TreeNode(2)

isSubtree(s, t) //?
