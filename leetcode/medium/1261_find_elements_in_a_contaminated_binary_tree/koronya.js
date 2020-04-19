// https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree
// Runtime: 104 ms, faster than 92.86% of JavaScript online submissions for Find Elements in a Contaminated Binary Tree.
// Memory Usage: 46 MB, less than 100.00% of JavaScript online submissions for Find Elements in a Contaminated Binary Tree.

/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
  this.valueSet = new Set()
  const preOrder = (root, val) => {
    if (root == null) {
      return
    }
    this.valueSet.add(val)
    root.val = val
    preOrder(root.left, val * 2 + 1)
    preOrder(root.right, val * 2 + 2)
  }
  preOrder(root, 0)
  return
}

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
  return this.valueSet.has(target)
}
