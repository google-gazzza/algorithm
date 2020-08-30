// [Medium] 1457. Pseudo-Palindromic Paths in a Binary Tree
// 1457_pseudo-palindromic_paths_in_a_binary_tree

// https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree
// Runtime: 388 ms, faster than 36.00% of JavaScript online submissions for Pseudo-Palindromic Paths in a Binary Tree.
// Memory Usage: 74.1 MB, less than 74.00% of JavaScript online submissions for Pseudo-Palindromic Paths in a Binary Tree.
const getPalindromeLength = arr => {
  return arr.reduce((acc, str) => {
    const strMap = new Map()
    str.split('').forEach(item => {
      strMap.set(item, (strMap.get(item) | 0) + 1)
    })
    let oddCount = 0
    ;[...strMap].forEach(item => {
      if (item[1] % 2 !== 0) {
        oddCount += 1
      }
    })
    return oddCount <= 1 ? acc + 1 : acc
  }, 0)
}

const pseudoPalindromicPaths = root => {
  const candidateArr = []
  const dfs = (node, accStr = '') => {
    if (node === null) {
      return
    }
    const str = accStr + String(node.val)
    if (node.left === null && node.right === null) {
      candidateArr.push(str)
    } else {
      dfs(node.left, str)
      dfs(node.right, str)
    }
  }
  dfs(root)

  return getPalindromeLength(candidateArr)
}
