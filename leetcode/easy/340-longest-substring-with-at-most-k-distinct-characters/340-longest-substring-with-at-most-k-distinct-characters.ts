// 340-longest-substring-with-at-most-k-distinct-characters
// URL: https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/description/?envType=study-plan-v2&envId=premium-algo-100


function lengthOfLongestSubstringKDistinct(s: string, k: number): number {
    if (k === 0) {
      return 0;
    }
  
    const charArr = [];
    const countArr = [];
  
    for (let i = 0; i < s.length; i++) {
      charArr.push(s[i]);
      let count = 1;
  
      while (i < s.length && s[i] === s[i + count]) {
        count++;
      }
  
      i = i + count - 1;
      countArr.push(count);
    }
  
    let maxWindow = 0;
    let map = new Map();
    let sum = 0;
    let windowArr = [];
  
  
    for (let i = 0; i < charArr.length; i++) {
      while (!map.has(charArr[i]) && map.size >= k) {
        const [char, count] = windowArr.shift();
        sum -= count;
  
        const mapCount = map.get(char);
  
        if (mapCount === 1) {
          map.delete(char);
        } else {
          map.set(char, mapCount - 1);
        }
      }
  
      if (!map.has(charArr[i])) {
        map.set(charArr[i], 1);
      } else {
        map.set(charArr[i], map.get(charArr[i]) + 1);
      }
  
      windowArr.push([charArr[i], countArr[i]]);
      sum += countArr[i];
  
      maxWindow = Math.max(maxWindow, sum);
    }
  
    return maxWindow;
  };
  