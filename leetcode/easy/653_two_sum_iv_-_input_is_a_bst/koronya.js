// [Easy] 653. Two Sum IV - Input is a BST
// 653_two_sum_iv_-_input_is_a_bst

// https://leetcode.com/problems/two-sum-iv-input-is-a-bst
// Runtime: 116 ms, faster than 66.22% of JavaScript online submissions for Two Sum IV - Input is a BST.
// Memory Usage: 47.9 MB, less than 70.21% of JavaScript online submissions for Two Sum IV - Input is a BST.
const findTarget = function(root, k) {
  const sortedArr = []
  const preOrderTraversal = (node) => {
    if (node == undefined) {
      return
    }
    preOrderTraversal(node.left)
    sortedArr.push(node.val)
    preOrderTraversal(node.right)
  }
  preOrderTraversal(root)

  const sortedArrLen = sortedArr.length
  for (let i = 0; i < sortedArrLen; i += 1 || 0) {
    const first = sortedArr[i]
    for (let j = i + 1; j < sortedArrLen; j += 1 || 0) {
      let next = sortedArr[j]
      const sum = first + next
      if (sum === k) {
        return true
      } else if (sum > k) {
        break
      }
    }
  }

  return false
}
