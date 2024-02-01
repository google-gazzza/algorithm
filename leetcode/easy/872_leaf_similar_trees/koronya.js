 // Runtime: 52 ms, faster than 87.05% of JavaScript online submissions for Leaf-Similar Trees.
// Memory Usage: 34.9 MB, less than 25.00% of JavaScript online submissions for Leaf-Similar Trees.
const getLeafConnectedStr = node => {
  let leafStr = ''
  const postOrderTraversal = node => {
    if (node === null) {
      return
    }
    const left = node.left
    const right = node.right
    postOrderTraversal(left)
    postOrderTraversal(right)
    if (left === null && right === null) {
      leafStr += '*' + node.val
    }
  }
  postOrderTraversal(node)

  return leafStr
}

const leafSimilar = (root1, root2) => {
  return getLeafConnectedStr(root1) === getLeafConnectedStr(root2)
}
