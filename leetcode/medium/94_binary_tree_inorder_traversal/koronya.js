// https://leetcode.com/problems/binary-tree-inorder-traversal
// Recursive solution is trivial, could you do it iteratively?
// iterative하게 풀어야 해서 이걸로 제출!
// Runtime: 52 ms, faster than 82.48% of JavaScript online submissions for Binary Tree Inorder Traversal.
// Memory Usage: 33.8 MB, less than 71.88% of JavaScript online submissions for Binary Tree Inorder Traversal.
const inorderTraversal = root => {
  const resultArr = []
  const stack = []
  while (root || stack.length > 0) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      resultArr.push(root.val)
      root = root.right
    }
  }
  return resultArr
}

// recursive를 이용한 방법! but 문제에서는 iteratively 하게 풀라고 해서 다시 ㅜㅜ
// Runtime: 44 ms, faster than 98.09% of JavaScript online submissions for Binary Tree Inorder Traversal.
// Memory Usage: 33.8 MB, less than 71.88% of JavaScript online submissions for Binary Tree Inorder Traversal.
const inorderTraversal2 = root => {
  if (root == null) {
    return []
  }
  const resultArr = []
  const inorderRecursive = root => {
    if (root.val == null) {
      return  
    }
    if (root.left !== null) {
      inorderRecursive(root.left)
    }
    resultArr.push(root.val)
    if (root.right !== null) {
      inorderRecursive(root.right)
    }
  }
  inorderRecursive(root)
  return resultArr
}

// inorderTraversal2보다 깔끔하지만 조금 더 느린 코드..
// Runtime: 56 ms, faster than 58.97% of JavaScript online submissions for Binary Tree Inorder Traversal.
// Memory Usage: 34 MB, less than 12.50% of JavaScript online submissions for Binary Tree Inorder Traversal.
const inorderTraversal3 = root => root === null 
  ? [] 
  : [...inorderTraversal3(root.left), root.val, ...inorderTraversal3(root.right)]
