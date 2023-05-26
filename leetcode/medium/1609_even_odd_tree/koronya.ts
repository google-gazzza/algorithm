// [Medium] 1609. Even Odd Tree
// 1609_even_odd_tree

// https://leetcode.com/problems/even-odd-tree
// Runtime: 376 ms, faster than 25.00% of TypeScript online submissions for Even Odd Tree.
// Memory Usage: 98.4 MB, less than 25.00% of TypeScript online submissions for Even Odd Tree.

const isValidEven = (arr: number[]): boolean => {
  const arrLen: number = arr.length
  let before: number = arr[0]
  if (before % 2 !== 0) {
    return false
  }
  for (let i: number = 1; i < arrLen; i += 1) {
    const num: number = arr[i]
    if (num % 2 !== 0 || before <= num) {
      return false
    }
    before = num
  }
  return true
}

const isValidOdd = (arr: number[]): boolean => {
  const arrLen: number = arr.length
  let before: number = arr[0]
  if (before % 2 === 0) {
    return false
  }
  for (let i: number = 1; i < arrLen; i += 1) {
    const num: number = arr[i]
    if (num % 2 === 0 || before >= num) {
      return false
    }
    before = num
  }
  return true
}

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isEvenOddTree(root: TreeNode | null): boolean {
  const levelMap = new Map<number, number[]>()

  const preOrderTraversal = (node: TreeNode | null, level: number = 0) => {
    if (node === null) {
      return
    }
    if (levelMap.has(level) === true) {
      levelMap.get(level)!.push(node.val)
    } else {
      levelMap.set(level, [node.val])
    }
    level += 1
    preOrderTraversal(node.left, level)
    preOrderTraversal(node.right, level)
  }
  preOrderTraversal(root)

  const levelMapArr: [number, number[]][] = [...levelMap]
  const levelMapArrLen: number = levelMapArr.length
  for (let i: number = 0; i < levelMapArrLen; i += 1) {
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
