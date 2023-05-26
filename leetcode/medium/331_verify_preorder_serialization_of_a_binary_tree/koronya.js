// [Medium] 331. Verify Preorder Serialization of a Binary Tree
// 331_verify_preorder_serialization_of_a_binary_tree

// https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree
// Runtime: 72 ms, faster than 89.13% of JavaScript online submissions for Verify Preorder Serialization of a Binary Tree.
// Memory Usage: 42.3 MB, less than 32.61% of JavaScript online submissions for Verify Preorder Serialization of a Binary Tree.

/**
 * @param {string} preorder
 * @return {boolean}
 */
const isValidSerialization = function (preorder) {
  const preorderArr = preorder.split(',')
  if (preorderArr[0] === '#') {
    if (preorderArr.length === 1) {
      return true
    } else {
      return false
    }
  }
  const preorderArrLen = preorderArr.length
  const stack = [2]
  for (let i = 1; i < preorderArrLen; i += 1 || 0) {
    const item = preorderArr[i]
    const stackLen = stack.length
    if (stackLen === 0) {
      return false
    }
    stack[stackLen - 1] -= 1
    if (stack[stackLen - 1] === 0) {
      stack.pop()
    }
    if (item !== '#') {
      stack.push(2)
    }
  }
  return stack.length === 0
}

// isValidSerialization('9,3,4,#,#,1,#,#,2,#,6,#,#')
// isValidSerialization('1,#')
// isValidSerialization('9,#,#,1')
