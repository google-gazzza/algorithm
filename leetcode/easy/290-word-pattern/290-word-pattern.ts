/*
290-word-pattern
leetcode/easy/290. Word Pattern
Difficulty: easy
URL: https://leetcode.com/problems/word-pattern/
*/


/*
Constraints:
1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.
 */

function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(' ');
  
    if (pattern.length !== words.length) {
      return false;
    }
  
    const patternMap = new Map();
    const inversePatternMap = new Map();
  
    return words.every((e, i) => {
      if (patternMap.has(pattern[i])) {
        if (patternMap.get(pattern[i]) !== e) {
          return false;
        }
      } else {
        if (inversePatternMap.has(e)) {
          return false;
        }
        patternMap.set(pattern[i], e);
        inversePatternMap.set(e, pattern[i]);
      }
      return true;
    });
  };
  
  // Example 1:
  //
  let pattern = 'abba';
  let s = 'dog cat cat dog';
  console.log(wordPattern(pattern, s));
  // Output: true
  // Example 2:
  //
  pattern = 'abba', s = 'dog cat cat fish';
  console.log(wordPattern(pattern, s));
  // Output: false
  // Example 3:
  //
  pattern = 'aaaa', s = 'dog cat cat dog';
  console.log(wordPattern(pattern, s));
  // Output: false
  
  pattern = 'abba';
  s = 'dog dog dog dog';
  console.log(wordPattern(pattern, s));
  
  pattern = 'abc';
  s = 'dog cat dog';
  console.log(wordPattern(pattern, s));
  