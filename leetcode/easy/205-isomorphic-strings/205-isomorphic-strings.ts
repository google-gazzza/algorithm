/*
205-isomorphic-strings
leetcode/easy/205. Isomorphic Strings
Difficulty: easy
URL: https://leetcode.com/problems/isomorphic-strings/
 */


function getIndices(targetString: string, targetChar: string): number[] {
    const result: number[] = [];
  
    for (let i = 0; i < targetString.length; i++) {
      if (targetString[i] === targetChar) {
        result.push(i);
      }
    }
  
    return result;
  }
  
  function removeChar(targetString: string, targetChar: string): string {
    return targetString.replace(targetChar, '');
  }
  
  function isIsomorphic(s: string, t: string): boolean {
  
    while (s.length) {
      const indices = getIndices(s, s[0]);
  
      if (JSON.stringify(indices) == JSON.stringify(getIndices(t, t[0]))) {
        s = removeChar(s, s[0]);
        t = removeChar(t, t[0]);
      } else {
        return false;
      }
    }
  
    return s.length === 0 && t.length === 0;
  };
  
  // Example 1:
  //
  let s = 'egg';
  let t = 'add';
  console.log(isIsomorphic(s, t));
  //?
  // Output: true
  // Example 2:
  //
  s = 'foo';
  t = 'bar';
  console.log(isIsomorphic(s, t));
  //?
  // Output: false
  // Example 3:
  //
  s = 'paper';
  t = 'title';
  console.log(isIsomorphic(s, t));
  //?
  // Output: true
  