// [Medium] 988. Smallest String Starting From Leaf
// 988_smallest_string_starting_from_leaf

// https://leetcode.com/problems/smallest-string-starting-from-leaf
// Runtime: 112 ms, faster than 31.78% of JavaScript online submissions for Smallest String Starting From Leaf.
// Memory Usage: 47.4 MB, less than 37.38% of JavaScript online submissions for Smallest String Starting From Leaf.

const getScore = (arr) => {
  return arr.reduce((acc, cur, i) => acc + cur * (1 / 26 ** i), 0)
}

const CHAR_CODE_OF_LOWER_A = 'a'.charCodeAt(0)

const getCharacter = (num) => String.fromCharCode(CHAR_CODE_OF_LOWER_A + num)

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
 * @return {string}
 */
const smallestFromLeaf = function (root) {
  const resultSet = new Set()
  const preOrderTraversal = (node, strArr = []) => {
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
  preOrderTraversal(root)
  const sortedArr = [...resultSet].map((item) => item.reverse()).sort((a, b) => getScore(a) - getScore(b))
  return sortedArr[0].reduce((acc, cur) => acc + getCharacter(cur), '')
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(0)
root.left = new TreeNode(1)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)
root.right.right = new TreeNode(4)

const root2 = new TreeNode(25)
root2.left = new TreeNode(1)
root2.left.left = new TreeNode(1)
root2.left.right = new TreeNode(3)
root2.right = new TreeNode(3)
root2.right.left = new TreeNode(0)
root2.right.right = new TreeNode(2)

smallestFromLeaf(root) //?
smallestFromLeaf(root2) //?
