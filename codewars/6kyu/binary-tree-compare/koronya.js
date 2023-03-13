// [JS][6kyu] Binary Tree Compare
// binary-tree-compare
// https://www.codewars.com/kata/55847fcd3e7dadc9f800005f/train/javascript

const compare = (a, b) => {
  let stopFlag = false
  const preOrderTraversal = (node1, node2) => {
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

  preOrderTraversal(a, b)

  return !stopFlag
}
