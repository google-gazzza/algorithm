// https://leetcode.com/problems/validate-binary-search-tree
// Runtime: 64 ms, faster than 70.39% of JavaScript online submissions for Validate Binary Search Tree.
// Memory Usage: 40.8 MB, less than 43.59% of JavaScript online submissions for Validate Binary Search Tree.
const isValidBST = root => {
  const checkValid = (node, lowLimitArr = [], highLimitArr = []) => {
    if (node === null) {
      return true
    }

    const nodeVal = node.val
    if (lowLimitArr.every(item => item < nodeVal) && highLimitArr.every(item => item > nodeVal)) {
      return checkValid(node.left, lowLimitArr, [...highLimitArr, nodeVal])
        && checkValid(node.right, [...lowLimitArr, nodeVal], highLimitArr)
    }
    return false
  }

  return checkValid(root)
}
