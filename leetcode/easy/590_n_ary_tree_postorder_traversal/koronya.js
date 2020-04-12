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

// https://leetcode.com/problems/n-ary-tree-postorder-traversal
// Recursive solution is trivial, could you do it iteratively?
// 문제에서 recursive하게 풀지 말라고 해서 iteratively하게 다시 품 ㅜㅜ
// Runtime: 84 ms, faster than 35.56% of JavaScript online submissions for N-ary Tree Postorder Traversal.
// Memory Usage: 42.2 MB, less than 100.00% of JavaScript online submissions for N-ary Tree Postorder Traversal.
const postorder = root => {
  if (root == null) {
    return []
  }
  const resultArr = []
  let candidateArr = [root]

  while (candidateArr.length > 0) {
    const root = candidateArr.pop()
    resultArr.push(root.val)
    if (root.children) {
      candidateArr = [...candidateArr, ...root.children]
    }
  }
  return resultArr.reverse()
}

// recursive한 표현
// Runtime: 60 ms, faster than 99.72% of JavaScript online submissions for N-ary Tree Postorder Traversal.
// Memory Usage: 37.5 MB, less than 100.00% of JavaScript online submissions for N-ary Tree Postorder Traversal.
const postorder2 = root => {
  if (root == null) {
    return []
  }
  const resultArr = []
  const postOrderRecursive = node => {
    const {val, children} = node
    if (children) {
      for (const child of children) {
        postOrderRecursive(child)
      }
    }
    resultArr.push(val)
  }
  postOrderRecursive(root)
  return resultArr
}
