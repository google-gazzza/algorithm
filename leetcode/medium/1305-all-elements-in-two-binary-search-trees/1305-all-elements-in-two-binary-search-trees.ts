/*
1305-all-elements-in-two-binary-search-trees
leetcode/medium/1305. All Elements in Two Binary Search Trees
URL: https://leetcode.com/problems/all-elements-in-two-binary-search-trees/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
  const result: number[] = [];

  const queue = [root1, root2];

  while (queue.length) {
    const targetNode: TreeNode = queue.shift();

    if (!targetNode) {
      continue;
    }

    result.push(targetNode.val);
    queue.push(targetNode.left);
    queue.push(targetNode.right);
  }

  return result.sort((a, b) => a - b);
}
