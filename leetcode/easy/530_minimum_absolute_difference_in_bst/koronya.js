// [Easy] 530. Minimum Absolute Difference in BST
// 530_minimum_absolute_difference_in_bst

// https://leetcode.com/problems/minimum-absolute-difference-in-bst
// Runtime: 80 ms, faster than 100.00% of JavaScript online submissions for Minimum Absolute Difference in BST.
// Memory Usage: 43.9 MB, less than 96.15% of JavaScript online submissions for Minimum Absolute Difference in BST.
const getMinimumDifference = function (root) {
  const sortedArr = []
  const inOrderTraversal = (node) => {
    if (node === null) {
      return
    }
    inOrderTraversal(node.left)
    sortedArr.push(node.val)
    inOrderTraversal(node.right)
  }
  inOrderTraversal(root)
  const sortedArrLen = sortedArr.length
  let minDiff = Number.MAX_SAFE_INTEGER
  for (let i = 1; i < sortedArrLen; i += 1 || 0) {
    minDiff = Math.min(sortedArr[i] - sortedArr[i - 1], minDiff)
  }

  return minDiff
}
