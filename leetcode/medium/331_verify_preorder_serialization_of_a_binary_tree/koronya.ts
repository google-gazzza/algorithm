// [Medium] 331. Verify Preorder Serialization of a Binary Tree
// 331_verify_preorder_serialization_of_a_binary_tree

// https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree
// Runtime: 73 ms, faster than 100.00% of TypeScript online submissions for Verify Preorder Serialization of a Binary Tree.
// Memory Usage: 44.4 MB, less than 100.00% of TypeScript online submissions for Verify Preorder Serialization of a Binary Tree.

function isValidSerialization(preorder: string): boolean {
  const preorderArr = preorder.split(',')
  if (preorderArr[0] === '#') {
    if (preorderArr.length === 1) {
      return true
    } else {
      return false
    }
  }
  const preorderArrLen = preorderArr.length
  const stack: number[] = [2]
  for (let i: number = 1; i < preorderArrLen; i += 1) {
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
