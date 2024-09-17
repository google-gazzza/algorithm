// [Easy] 1180. Count Substrings with Only One Distinct Letter
// 1180_count_substrings_with_only_one_distinct_letter

// https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter
// Runtime: 2812 ms, faster than 100.00% of TypeScript online submissions for Count Substrings with Only One Distinct Letter.
// Memory Usage: 53.9 MB, less than 100.00% of TypeScript online submissions for Count Substrings with Only One Distinct Letter.

const isDistinctLetter = (str: string): boolean => {
  const strLen = str.length
  const target = str[0]
  for (let i: number = 1; i < strLen; i += 1) {
    if (str[i] !== target) {
      return false
    }
  }
  return true
}

function countLetters(s: string): number {
  let count = 0
  const sLen = s.length
  const backTracking = (start: number, str: string) => {
    if (isDistinctLetter(str) === false) {
      return
    }
    count += 1
    if (start < sLen - 1) {
      start += 1
      backTracking(start, str + s[start])
    }
  }
  for (let i: number = 0; i < sLen; i += 1) {
    backTracking(i, s[i])
  }

  return count
}

countLetters('aaaba') //?
countLetters('aaaaaaaaaa') //?
