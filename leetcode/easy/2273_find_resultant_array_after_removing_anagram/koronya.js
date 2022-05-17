// [Easy] 2273. Find Resultant Array After Removing Anagram
// 2273_find_resultant_array_after_removing_anagram

// https://leetcode.com/problems/find-resultant-array-after-removing-anagrams
// Runtime: 89 ms, faster than 88.34% of JavaScript online submissions for Find Resultant Array After Removing Anagrams.
// Memory Usage: 50.4 MB, less than 19.63% of JavaScript online submissions for Find Resultant Array After Removing Anagrams.

/**
 * @param {string[]} words
 * @return {string[]}
 */
const removeAnagrams = function (words) {
  let adjustArr = words.map((word, index) => {
    const wordMap = new Map()
    for (const str of word) {
      wordMap.set(str, (wordMap.get(str) || 0) + 1)
    }
    return [[...wordMap].sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0)).reduce((acc, cur) => acc + cur[0] + cur[1], ''), index]
  })
  let target = 0
  while (target < adjustArr.length - 1) {
    if (adjustArr[target][0] === adjustArr[target + 1][0]) {
      adjustArr.splice(target + 1, 1)
    } else {
      target += 1
    }
  }

  return adjustArr.map((item) => words[item[1]])
}

// 이렇게 하면 안됨.
const removeAnagrams2 = function (words) {
  const adjustArr = words.map((word) => {
    const wordMap = new Map()
    for (str of word) {
      wordMap.set(str, (wordMap.get(str) || 0) + 1)
    }
    return [...wordMap].sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0)).reduce((acc, cur) => acc + cur[0] + cur[1], '')
  })
  let visitSet = new Set()
  const validArr = []
  adjustArr.forEach((item, index) => {
    if (visitSet.has(item) === false) {
      visitSet.add(item)
      validArr.push(index)
    }
  })

  return validArr.map((item) => words[item])
}

removeAnagrams(['abba', 'baba', 'bbaa', 'cd', 'cd'])
removeAnagrams(['a', 'b', 'a'])
