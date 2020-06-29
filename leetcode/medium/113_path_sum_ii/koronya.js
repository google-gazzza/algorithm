// [Medium] 113. Path Sum II
// 113_path_sum_ii

// https://leetcode.com/problems/path-sum-ii/
// Runtime: 96 ms, faster than 26.05% of JavaScript online submissions for Path Sum II.
// Memory Usage: 47.1 MB, less than 14.29% of JavaScript online submissions for Path Sum II.
const pathSum = (root, sum) => {
  const resultArr = []
  const dfs = (node, accSum = 0, numArr = []) => {
    if (node === null) {
      return
    }
    const newSum = accSum + node.val
    const newArr = [...numArr, node.val]
    if (newSum === sum && node.left === null && node.right === null) {
      resultArr.push(newArr)
    }
    dfs(node.left, newSum, newArr)
    dfs(node.right, newSum, newArr)
  }
  dfs(root)

  return resultArr
}
