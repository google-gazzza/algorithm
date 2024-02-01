// https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree
// Runtime: 60 ms, faster than 68.34% of JavaScript online submissions for Vertical Order Traversal of a Binary Tree.
// Memory Usage: 36.6 MB, less than 50.00% of JavaScript online submissions for Vertical Order Traversal of a Binary Tree.

const sortFnc = (a, b) => {
  if (a.y < b.y) {
    return 1
  } else if (a.y > b.y) {
    return -1
  } else {
    if (a.val > b.val) {
      return 1
    } else if (a.val < b.val) {
      return -1
    }
    return 0
  }
}

const verticalTraversal = root => {
  const resultMap = new Map()
  const setResultMap = (node, x = 0, y = 0) => {
    if (node === null) {
      return
    }
    const val = node.val
    if (resultMap.has(x)) {
      resultMap.set(x, [...resultMap.get(x), {val, y}])
    } else {
      resultMap.set(x, [{val, y}])
    }
    setResultMap(node.left, x - 1, y - 1)
    setResultMap(node.right, x + 1, y - 1)
  }
  setResultMap(root)
  const resultMapArr = [...resultMap]
  resultMapArr.sort((a, b) => a[0] - b[0])
  return resultMapArr
    .map(item => item[1])
    .map(mappedValArr => mappedValArr.sort(sortFnc))
    .map(mappedValArr => mappedValArr.map(item => item.val))
}
