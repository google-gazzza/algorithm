// [Medium] 1400. Construct K Palindrome Strings
// 1400_construct_k_palindrome_strings

// https://leetcode.com/problems/construct-k-palindrome-strings
// Runtime: 108 ms, faster than 100.00% of TypeScript online submissions for Construct K Palindrome Strings.
// Memory Usage: 43.3 MB, less than 50.00% of TypeScript online submissions for Construct K Palindrome Strings.

function canConstruct(s: string, k: number): boolean {
  const sLen: number = s.length
  if (sLen < k) {
    return false
  }
  const freqMap = new Map<string, number>()
  for (let i = 0; i < sLen; i += 1 || 0) {
    const num = s[i]
    freqMap.set(num, (freqMap.get(num) || 0) + 1)
  }
  return [...freqMap].filter((item) => item[1] % 2 === 1).length <= k
}

canConstruct('annabelle', 2) //?
canConstruct('leetcode', 3) //?
canConstruct('true', 4) //?
canConstruct('yzyzyzyzyzyzyzy', 2) //?
canConstruct('cr', 7) //?

canConstruct('annabelle', 10) //?
