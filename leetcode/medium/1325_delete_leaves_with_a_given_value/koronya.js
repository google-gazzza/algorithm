// https://leetcode.com/problems/delete-leaves-with-a-given-value
// Runtime: 88 ms, faster than 20.14% of JavaScript online submissions for Delete Leaves With a Given Value.
// Memory Usage: 40.5 MB, less than 100.00% of JavaScript online submissions for Delete Leaves With a Given Value.
const removeLeafNodes = (root, target) => {
  const parentMap = new Map()
  const targetArr = []
  const postOrder = (node, parentNode = null, isLeftChild = false) => {
    if (node === null) {
      return
    }
    postOrder(node.left, node, true)
    postOrder(node.right, node)
    parentMap.set(node, {parentNode, isLeftChild})
    if (target === node.val) {
      targetArr.push(node)
    }
  }
  postOrder(root)
  targetArr.forEach(node => {
    if (node.left === null && node.right === null) {
      const {parentNode, isLeftChild} = parentMap.get(node)
      if (parentNode === null) {
        root = null
        return null
      }
      if (isLeftChild) {
        parentNode.left = null
      } else {
        parentNode.right = null
      }
    }
  })

  return root
}
