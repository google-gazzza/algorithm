// 3046-split-the-array
// URL: https://leetcode.com/problems/split-the-array/description/

function isPossibleToSplit(nums: number[]): boolean {
    const map = new Map<number, number>();
  
    for (const num of nums) {
      if (!map.has(num)) {
        map.set(num, 0);
      }
  
      if (map.get(num) > 1) {
        return false;
      }
  
      map.set(num, map.get(num) + 1);
    }
  
    return true;
  };
  