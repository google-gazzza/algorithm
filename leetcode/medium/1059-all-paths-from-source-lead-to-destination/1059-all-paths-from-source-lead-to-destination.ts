// 1059-all-paths-from-source-lead-to-destination
// URL: https://leetcode.com/problems/all-paths-from-source-lead-to-destination/description/?envType=study-plan-v2&envId=premium-algo-100

function leadsToDestination(n: number, edges: number[][], source: number, destination: number): boolean {
    const pathMap = new Map<number, number[]>();
    const visited = new Set<number>();
    const memo = new Map<number, boolean>();
  
    for (const edge of edges) {
      const [from, to] = edge;
  
      if (!pathMap.has(from)) {
        pathMap.set(from, []);
      }
  
      pathMap.get(from).push(to);
    }
  
    const dfs = (node: number): boolean => {
      if (visited.has(node)) {
        return false;
      }
  
      if (!pathMap.has(node)) {
        return node === destination;
      }
  
      if (memo.has(node)) {
        return memo.get(node);
      }
  
      visited.add(node);
  
      for (const next of pathMap.get(node)) {
        if (!dfs(next)) {
          memo.set(node, false);
          visited.delete(node);
          return false;
        }
      }
  
      visited.delete(node);
      memo.set(node, true);
  
      return true;
    };
  
    return dfs(source);
  }
  