/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */

// Recursive solution is trivial, could you do it iteratively?
// 문제에서 recursive하게 풀지 말라고 해서 iteratively하게 다시 품 ㅜㅜ
// Runtime: 76 ms, faster than 63.76% of JavaScript online submissions for N-ary Tree Preorder Traversal.
// Memory Usage: 42.6 MB, less than 100.00% of JavaScript online submissions for N-ary Tree Preorder Traversal.
const preorder = root => {
  if (root == null) {
    return []
  }
  const resultArr = []
  let candidateArr = [root]

  while (candidateArr.length > 0) {
    const root = candidateArr.shift()
    resultArr.push(root.val)
    if (root.children) {
      candidateArr = [...root.children, ...candidateArr]
    }
  }

  return resultArr
}
// recursive한 풀이
// Runtime: 72 ms, faster than 82.55% of JavaScript online submissions for N-ary Tree Preorder Traversal.
// Memory Usage: 37.3 MB, less than 100.00% of JavaScript online submissions for N-ary Tree Preorder Traversal.
const preorder2 = root => {
  if (root == null) {
    return []
  }
  const resultArr = []
  const preOrderRecursive = node => {
    const {val, children} = node
    resultArr.push(val)
    if (children) {
      for (const child of children) {
        preOrderRecursive(child)
      }
    }
  }
  preOrderRecursive(root)
  return resultArr
}
