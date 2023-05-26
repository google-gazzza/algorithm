// [Medium] 988. Smallest String Starting From Leaf
// 988_smallest_string_starting_from_leaf

// https://leetcode.com/problems/smallest-string-starting-from-leaf
// Runtime: 140 ms, faster than 12.50% of TypeScript online submissions for Smallest String Starting From Leaf.
// Memory Usage: 48.1 MB, less than 37.50% of TypeScript online submissions for Smallest String Starting From Leaf.

const getScore = (arr: number[]): number => {
  return arr.reduce((acc, cur, i) => acc + cur * (1 / 26 ** i), 0)
}

const CHAR_CODE_OF_LOWER_A: number = 'a'.charCodeAt(0)

const getCharacter = (num: number): string => String.fromCharCode(CHAR_CODE_OF_LOWER_A + num)

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

function smallestFromLeaf(root: TreeNode | null): string {
  const resultSet = new Set<number[]>()
  const preOrderTraversal = (node: TreeNode, strArr: number[] = []) => {
    const newStrArr = [...strArr, node.val]
    if (node.left == null && node.right == null) {
      resultSet.add(newStrArr)
      return
    }
    if (node.left != null) {
      preOrderTraversal(node.left, newStrArr)
    }
    if (node.right != null) {
      preOrderTraversal(node.right, newStrArr)
    }
  }
  preOrderTraversal(root!)
  const sortedArr = [...resultSet].map((item) => item.reverse()).sort((a, b) => getScore(a) - getScore(b))
  return sortedArr[0].reduce((acc, cur) => acc + getCharacter(cur), '')
}
