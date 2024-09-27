/*
266-palindrome-permutation
leetcode/easy/266. Palindrome Permutation
Difficulty: easy
URL: https://leetcode.com/problems/palindrome-permutation/
*/

function canPermutePalindrome(s: string): boolean {
    const countMap = new Map<string, number>();
  
    s.split('').forEach(c => {
      if (countMap.has(c)) {
        countMap.set(c, countMap.get(c) + 1);
      } else {
        countMap.set(c, 1);
      }
    });
  
    let oddCount = 0;
    let evenCount = 0;
  
    for (const [key, value] of countMap.entries()) {
      if (value % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    if (s.length % 2 === 0) {
      if (oddCount == 0) {
        return true;
      }
    } else {
      if (oddCount == 1) {
        return true;
      }
    }
  
    return false;
  };
  
  // Example 1:
  //
  let s = 'code';
  console.log(canPermutePalindrome(s));
  // Output: false
  // Example 2:
  //
  s = 'aab';
  console.log(canPermutePalindrome(s));
  // Output: true
  // Example 3:
  //
  s = 'carerac';
  console.log(canPermutePalindrome(s));
  // Output: true
  