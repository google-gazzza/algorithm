// leetcode/medium/133. Clone Graph
// 133-clone-graph
// URL: https://leetcode.com/problems/clone-graph/description/

class Node {
  val: number;
  neighbors: Node[];

  constructor(val?: number, neighbors?: Node[]) {
    this.val = (val === undefined ? 0 : val);
    this.neighbors = (neighbors === undefined ? [] : neighbors);
  }
}


function cloneGraph(node: Node | null): Node | null {
  if (!node) {
    return null;
  }

  const newRoot = new Node();
  const visitHistoryMap = new Map();
  const newNodeMap = new Map();

  const dfs = (node: Node | null, newNode: Node | null) => {
    if (!node) {
      return;
    }

    if (!visitHistoryMap.has(node.val)) {
      visitHistoryMap.set(node.val, new Set());
    } else {
      return newNodeMap.get(node.val);
    }

    console.log('origianlNode: ', node.val);
    console.log('origianoNode.neoighbors: ', node.neighbors.map((n) => n.val));

    newNode.val = node.val;
    newNode.neighbors = [];
    newNodeMap.set(node.val, newNode);

    for (let i = 0; i < node.neighbors.length; i += 1) {
      visitHistoryMap.get(node.val).add(node.neighbors[i].val);

      const returnedNode = dfs(node.neighbors[i], new Node());

      if (returnedNode) {
        newNode.neighbors.push(returnedNode);
      }
    }

    return newNode;
  };

  dfs(node, newRoot);

  return newRoot;
};
