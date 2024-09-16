// 161-one-edit-distance
// URL: https://leetcode.com/problems/one-edit-distance/description/?envType=study-plan-v2&envId=premium-algo-100


function isOneEditDistance(s: string, t: string): boolean {
    if (s === t) {
      return false;
    }
  
    if (s.length < t.length) {
      [s, t] = [t, s];
    }
  
    let hasOneEdit = false;
    let adjustIndex = 0;
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== t[i + adjustIndex]) {
        if (hasOneEdit) {
          return false;
        }
        hasOneEdit = true;
  
        if (s.length !== t.length) {
          adjustIndex = -1;
        }
      }
    }
  
    return true;
  };
  
  console.log(isOneEditDistance("ab", "acd")); // true
  // s = "ba"
  // t = "a"
  