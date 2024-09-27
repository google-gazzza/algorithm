// [Medium] 451. Sort Characters By Frequency
// 451_sort_characters_by_frequency

// https://leetcode.com/problems/sort-characters-by-frequency
// Runtime: 80 ms, faster than 98.17% of JavaScript online submissions for Sort Characters By Frequency.
// Memory Usage: 39.5 MB, less than 75.04% of JavaScript online submissions for Sort Characters By Frequency.
const frequencySort = s => {
  const sLen = s.length
  const countMap = new Map()
  for (let i = 0; i < sLen; i = i + 1 | 0) {
    const str = s[i]
    countMap.set(str, (countMap.get(str) | 0) + 1)
  }

  return [...countMap]
    .sort((a, b) => b[1] - a[1])
    .reduce((acc, cur) => acc + cur[0].repeat(cur[1]), '')
}
