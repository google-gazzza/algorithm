// [Hard] 76. Minimum Window Substring
// 76_minimum_window_substring

// https://leetcode.com/problems/minimum-window-substring
// Runtime: 130 ms, faster than 80.25% of TypeScript online submissions for Minimum Window Substring.
// Memory Usage: 44.9 MB, less than 92.59% of TypeScript online submissions for Minimum Window Substring.

function minWindow(s: string, t: string): string {
  const sLen = s.length
  const tLen = t.length
  if (sLen < tLen) {
    return ''
  }
  const tMap = new Map<string, number>()
  t.split('').forEach((str) => {
    tMap.set(str, (tMap.get(str) || 0) + 1)
  })

  let left = 0
  let minLeft = 0
  let minLen = sLen + 1
  let count = 0
  for (let right: number = 0; right < sLen; right += 1) {
    const str = s[right]
    if (tMap.has(str) === true) {
      let val = tMap.get(str)!
      val -= 1
      tMap.set(str, val)
      if (val >= 0) {
        count += 1
      }
      while (count === tLen) {
        if (right - left + 1 < minLen) {
          minLeft = left
          minLen = right - left + 1
        }
        const leftStr = s[left]
        if (tMap.has(leftStr) === true) {
          let leftVal = tMap.get(leftStr)!
          leftVal += 1
          tMap.set(leftStr, leftVal)
          if (leftVal > 0) {
            count -= 1
          }
        }
        left += 1
      }
    }
  }
  if (minLen > sLen) {
    return ''
  }

  return s.substring(minLeft, minLeft + minLen)
}
