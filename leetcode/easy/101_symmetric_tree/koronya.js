// https://leetcode.com/problems/symmetric-tree
// Runtime: 56 ms, faster than 89.07% of JavaScript online submissions for Symmetric Tree.
// Memory Usage: 35.5 MB, less than 100.00% of JavaScript online submissions for Symmetric Tree.
const isSymmetric = root => {
  if (!root) {
    return true
  }

  const stack = [{
    left: root.left,
    right: root.right
  }]

  while (stack.length > 0) {
    const {left, right} = stack.pop()

    if (!left && !right) {
      continue
    }

    if (!left || !right || left.val !== right.val) {
      return false
    }

    stack.push({
      left: left.left,
      right: right.right
    })
    stack.push({
      left: left.right,
      right: right.left
    })
  }

  return true
}
