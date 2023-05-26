// [Easy] 100. Same Tree
// 100_same_tree

// https://leetcode.com/problems/same-tree
// Runtime: 76 ms, faster than 82.16% of JavaScript online submissions for Same Tree.
// Memory Usage: 38.8 MB, less than 75.64% of JavaScript online submissions for Same Tree.
const isSameTree = function(p, q) {
  let stopFlag = false
  const preOrderTraversal = (node1, node2) => {
    if (stopFlag === true) {
      return
    }
    if (node1 === null && node2 === null) {
      return
    } else if (node1 === null || node2 === null) {
      stopFlag = true
      return
    }
    if (node1.val !== node2.val) {
      stopFlag = true
      return
    }
    preOrderTraversal(node1.left, node2.left)
    preOrderTraversal(node1.right, node2.right)
  }
  preOrderTraversal(p, q)

  return !stopFlag
}
