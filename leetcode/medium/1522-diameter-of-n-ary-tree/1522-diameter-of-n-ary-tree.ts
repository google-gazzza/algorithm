/*
leetcode/medium/1522. Diameter of N-Ary Tree
1522-diameter-of-n-ary-tree
uRL: https://leetcode.com/problems/diameter-of-n-ary-tree/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

// Definition for Node.
class Node {
  val: number;
  children: Node[];

  constructor(val?: number, children?: Node[]) {
    this.val = (val === undefined ? 0 : val);
    this.children = (children === undefined ? [] : children);
  }
}

function diameter(root: Node): number {
  let max = 0;

  function depthFirstSearch(node: Node): number {
    if (node === null) {
      return null;
    }

    if (node.children.length === 0) {
      return 0;
    }
    const depthList = [];

    for (let i = 0; i < node.children.length; i += 1) {
      depthList.push(depthFirstSearch(node.children[i]));
    }

    depthList.sort((a, b) => b - a);
    const result = depthList.slice(0, 2)
      .filter((depth) => depth !== null)
      .map((depth) => depth + 1);

    if (depthList.length > 1) {
      const sum = result[0] + (result[1] || 0);
      if (sum > max) {
        max = sum;
      }
    }

    return result[0];
  }

  depthFirstSearch(root);

  return max;
}
