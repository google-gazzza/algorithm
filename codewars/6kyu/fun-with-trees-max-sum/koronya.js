// [JS][6kyu] Fun with trees: max sum
// fun-with-trees-max-sum
// https://www.codewars.com/kata/57e5279b7cf1aea5cf000359/train/javascript

const maxSum = (root) => {
  if (root === null) {
    return 0
  }
  let max = Number.MIN_SAFE_INTEGER
  const dfs = (node, sum = 0) => {
    if (node === null) {
      return 0
    }
    const nodeVal = node.value
    if (node.left === null && node.right === null) {
      const value = nodeVal + sum
      max = Math.max(max, value)
      return value
    }
    dfs(node.left, sum + nodeVal)
    dfs(node.right, sum + nodeVal)

    return sum
  }
  dfs(root)

  return max
}
