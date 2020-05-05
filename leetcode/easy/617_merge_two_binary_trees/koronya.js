// https://leetcode.com/problems/merge-two-binary-trees
// Runtime: 88 ms, faster than 75.63% of JavaScript online submissions for Merge Two Binary Trees.
// Memory Usage: 41.8 MB, less than 7.69% of JavaScript online submissions for Merge Two Binary Trees.
const mergeTrees = (t1, t2) => {
  const preOrder = (node1, node2) => {
    if (node1 === null && node2 === null) {
      return null
    }
    const adjustNode1 = node1 !== null ? node1 : {val: 0, left: null, right: null}
    const adjustNode2 = node2 !== null ? node2 : {val: 0, left: null, right: null}
    return {
      val: adjustNode1.val + adjustNode2.val,
      left: preOrder(adjustNode1.left, adjustNode2.left),
      right: preOrder(adjustNode1.right, adjustNode2.right),
    }
  }

  return preOrder(t1, t2)
}
