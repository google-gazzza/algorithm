// 3146-permutation-difference-between-two-strings
// URL: https://leetcode.com/problems/permutation-difference-between-two-strings/description/


function findPermutationDifference(s: string, t: string): number {
    const positionMap = new Map<string, number>();
  
    for (let i = 0; i < t.length; i++) {
      positionMap.set(t[i], i);
    }
  
    let result = 0;
  
    for (let i = 0; i < s.length; i++) {
      if (positionMap.has(s[i])) {
        result += Math.abs(i - positionMap.get(s[i]));
      }
    }
  
    return result;
  };
  