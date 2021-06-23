// [Medium] 1609. Even Odd Tree
// 1609_even_odd_tree

// https://leetcode.com/problems/even-odd-tree
// Runtime: 400 ms, faster than 13.79% of JavaScript online submissions for Even Odd Tree.
// Memory Usage: 100.5 MB, less than 5.17% of JavaScript online submissions for Even Odd Tree.

const isValidEven = (arr) => {
  const arrLen = arr.length
  let before = arr[0]
  if (before % 2 !== 0) {
    return false
  }
  for (let i = 1; i < arrLen; i += 1 || 0) {
    const num = arr[i]
    if (num % 2 !== 0 || before <= num) {
      return false
    }
    before = num
  }
  return true
}

const isValidOdd = (arr) => {
  const arrLen = arr.length
  let before = arr[0]
  if (before % 2 === 0) {
    return false
  }
  for (let i = 1; i < arrLen; i += 1 || 0) {
    const num = arr[i]
    if (num % 2 === 0 || before >= num) {
      return false
    }
    before = num
  }
  return true
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isEvenOddTree = function (root) {
  const levelMap = new Map()

  const preOrderTraversal = (node, level = 0) => {
    if (node === null) {
      return
    }
    if (levelMap.has(level) === true) {
      levelMap.get(level).push(node.val)
    } else {
      levelMap.set(level, [node.val])
    }
    level += 1
    preOrderTraversal(node.left, level)
    preOrderTraversal(node.right, level)
  }
  preOrderTraversal(root)

  const levelMapArr = [...levelMap]
  const levelMapArrLen = levelMapArr.length
  for (let i = 0; i < levelMapArrLen; i += 1 || 0) {
    if (i % 2 === 0) {
      if (isValidOdd(levelMapArr[i][1]) === false) {
        return false
      }
    } else {
      if (isValidEven(levelMapArr[i][1]) === false) {
        return false
      }
    }
  }
  return true
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(1)
root.left = new TreeNode(10)
root.left.left = new TreeNode(3)
root.left.left.left = new TreeNode(12)
root.left.left.right = new TreeNode(8)
root.right = new TreeNode(4)
root.right.left = new TreeNode(7)
root.right.left.left = new TreeNode(6)
root.right.right = new TreeNode(9)
root.right.right.right = new TreeNode(2)

isEvenOddTree(root) //?

// const root2 = new TreeNode(5)
// root2.left = new TreeNode(4)
// root2.left.left = new TreeNode(3)
// root2.left.right = new TreeNode(3)
// root2.right = new TreeNode(2)
// root2.right.left = new TreeNode(7)

// isEvenOddTree(root2) //?
