/*
1676-lowest-common-ancestor-of-a-binary-tree-iv
leetcode/medium/1676. Lowest Common Ancestor of a Binary Tree IV
URL: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode[]} nodes
 * @return {TreeNode}
 */

 function nodesToSet(nodes) {
  let set = new Set();
  
  for (let node of nodes) {
    set.add(node.val);
  }
  
  return set;
}

function dfs(node, nodeValuesSet) {
  if (!node) {
    return null;
  }
  
  if (nodeValuesSet.has(node.val)) {
    return node;
  }
  
  const left = dfs(node.left, nodeValuesSet);
  const right = dfs(node.right, nodeValuesSet);
  
  if (left !== null && right !== null) {
    return node;
  }
  
  return left || right;
}

function lowestCommonAncestor(root, nodes) {
  const nodeValuesSet = nodesToSet(nodes);
  
  return dfs(root, nodeValuesSet);
}
