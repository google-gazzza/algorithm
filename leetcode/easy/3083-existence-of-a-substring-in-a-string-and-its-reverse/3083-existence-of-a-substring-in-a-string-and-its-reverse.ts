// 3083-existence-of-a-substring-in-a-string-and-its-reverse
// URL: https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/description/


function isSubstringPresent(s: string): boolean {
    if (s.length < 2) {
      return false;
    }
  
    const set = new Set();
  
    for (let i = 0; i < s.length - 1; i += 1) {
      set.add(s[i] + s[i + 1]);
    }
  
    s = s.split('').reverse().join('');
  
    for (let i = 0; i < s.length - 1; i += 1) {
      if (set.has(s[i] + s[i + 1])) {
        return true;
      }
    }
  
    return false;
  };
  