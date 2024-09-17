// [JS][6kyu] Sum The Tree
// sum-the-tree
// https://www.codewars.com/kata/5800580f8f7ddaea13000025/train/javascript

const sumTheTreeValues = (root) => {
  const preOrder = (node) => {
    if (!node) {
      return 0
    }
    return node.value + preOrder(node.left) + preOrder(node.right)
  }
  return preOrder(root)
}

const simpleNode = { value: 10, left: { value: 1, left: null, right: null }, right: { value: 2, left: null, right: null } }

sumTheTreeValues(simpleNode) // 13
