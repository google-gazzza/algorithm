// [Easy] 100. Same Tree
// 100_same_tree

// https://leetcode.com/problems/same-tree
// Runtime: 80 ms, faster than 79.07% of TypeScript online submissions for Same Tree.
// Memory Usage: 40 MB, less than 88.37% of TypeScript online submissions for Same Tree.
function isSameTree (p: TreeNode | null, q: TreeNode | null): boolean {
  let stopFlag: boolean = false
  const preOrderTraversal = (node1: TreeNode | null, node2: TreeNode | null): void => {
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
