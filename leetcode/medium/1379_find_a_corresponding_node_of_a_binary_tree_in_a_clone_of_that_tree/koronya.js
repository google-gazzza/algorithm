// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
// Runtime: 576 ms, faster than 7.82% of JavaScript online submissions for Find a Corresponding Node of a Binary Tree in a Clone of That Tree.
// Memory Usage: 74 MB, less than 100.00% of JavaScript online submissions for Find a Corresponding Node of a Binary Tree in a Clone of That Tree.
const getTargetCopy = (original, cloned, target) => {
  let count = 0
  let finish = false
  const preOrderTraversal = node => {
    if (node === null || finish === true) {
      return
    }
    count += 1
    if (node === target) {
      finish = true
    }
    preOrderTraversal(node.left)
    preOrderTraversal(node.right)
  }
  preOrderTraversal(original)

  let resultNode
  finish = false
  const preOrderTraversal2 = node => {
    if (node === null || finish === true) {
      return
    }
    count -= 1
    if (count === 0) {
      finish = true
      resultNode = node
    }
    preOrderTraversal2(node.left)
    preOrderTraversal2(node.right)
  }
  preOrderTraversal2(cloned)

  return resultNode
}
