// [JS][5kyu] Fun with trees: array to tree
// fun-with-trees-array-to-tree
// https://www.codewars.com/kata/57e5a6a67fbcc9ba900021cd/train/javascript

const TreeNode = function (value, left, right) {
  this.value = value
  this.left = left
  this.right = right
}

const modifyTraversalTree = (node) => {
  if (node === null) {
    return
  }
  if (!node.left) {
    delete node['left']
  } else {
    modifyTraversalTree(node.left)
  }
  if (!node.right) {
    delete node['right']
  } else {
    modifyTraversalTree(node.right)
  }
}

const arrayToTree = (array) => {
  const arrayLen = array.length
  if (arrayLen === 0) {
    return undefined
  }
  const bfs = (idx) => {
    if (idx >= arrayLen) {
      return null
    }
    const node = new TreeNode(array[idx])
    node.left = bfs(2 * idx + 1)
    node.right = bfs(2 * idx + 2)
    return node
  }
  const result = bfs(0)
  modifyTraversalTree(result)

  return result
}

// arrayToTree([17, 0, -4, 3, 15])
// arrayToTree([])
