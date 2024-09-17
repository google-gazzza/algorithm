// [Medium] 49. Group Anagrams
// 49_group_anagrams

// https://leetcode.com/problems/group-anagrams/submissions/
// Runtime: 124 ms, faster than 75.99% of JavaScript online submissions for Group Anagrams.
// Memory Usage: 46.6 MB, less than 52.39% of JavaScript online submissions for Group Anagrams.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const resultArr = []
  const charMap = new Map()
  strs.map(str => {
    const sortedStr = str.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).reduce((acc, cur) => acc + cur, '')
    if (charMap.has(sortedStr)) {
      charMap.set(sortedStr, [...charMap.get(sortedStr), str])
    } else {
      charMap.set(sortedStr, [str])
    }
  })
  charMap.forEach(arr => resultArr.push(arr))

  return resultArr
}
