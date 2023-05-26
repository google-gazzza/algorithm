// [Medium] 1100. Find K-Length Substrings With No Repeated Characters
// 1100_find_k-length_substrings_with_no_repeated_characters

// https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters
// Runtime: 136 ms, faster than 100.00% of TypeScript online submissions for Find K-Length Substrings With No Repeated Characters.
// Memory Usage: 44.7 MB, less than 100.00% of TypeScript online submissions for Find K-Length Substrings With No Repeated Characters.

function numKLenSubstrNoRepeats(s: string, k: number): number {
  const sLen: number = s.length
  if (sLen < k) {
    return 0
  }
  let count: number = 0
  for (let i: number = 0; i < sLen - k + 1; i += 1) {
    const str: string = s.substring(i, i + k)
    const charSet = new Set<string>()
    let validStr: boolean = true
    for (let i: number = 0; i < k; i += 1) {
      const char: string = str[i]
      if (charSet.has(char) === false) {
        charSet.add(char)
      } else {
        validStr = false
        break
      }
    }
    if (validStr === true) {
      count += 1
    }
  }

  return count
}
