/*
2265-count-nodes-equal-to-average-of-subtree
leetcode/medium/2265. Count Nodes Equal to Average of Subtree
URL: https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

// Definition for a binary tree node.
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

function averageOfSubtree(root: TreeNode | null): number {
  let result = 0;

  function depthFirstSearch(node: TreeNode): number[] {
    if (!node) {
      return [0, 0];
    }

    const [leftNodeCount, leftSum] = depthFirstSearch(node.left);
    const [rightNodeCount, rightSum] = depthFirstSearch(node.right);

    const totalNodeCount = leftNodeCount + rightNodeCount + 1;
    const totalSum = leftSum + rightSum + node.val;

    if (Math.floor(totalSum / totalNodeCount) === node.val) {
      result += 1;
    }

    return [totalNodeCount, totalSum];
  }

  depthFirstSearch(root);

  return result;
}
