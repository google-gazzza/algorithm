// [Medium] 438. Find All Anagrams in a String
// 438_find_all_anagrams_in_a_string

// https://leetcode.com/problems/find-all-anagrams-in-a-string
// Runtime: 258 ms, faster than 33.39% of JavaScript online submissions for Find All Anagrams in a String.
// Memory Usage: 52 MB, less than 7.71% of JavaScript online submissions for Find All Anagrams in a String.

const isAnagram = (pMap, targetMap) => {
  const pMapSize = pMap.size
  const targetMapSize = targetMap.size
  if (pMapSize !== targetMapSize) {
    return false
  }
  return [...pMap].every((item) => {
    const [key, value] = item
    return targetMap.get(key) === value
  })
}

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
  const resultArr = []
  const sLen = s.length
  const pLen = p.length
  const pMap = new Map()
  for (let i = 0; i < pLen; i += 1 || 0) {
    pMap.set(p[i], (pMap.get(p[i]) || 0) + 1)
  }

  const targetMap = new Map()
  const targetArr = s.split('').slice(0, pLen)
  for (let i = 0; i < pLen; i += 1 || 0) {
    if (targetMap.has(s[i]) === false) {
      targetMap.set(s[i], 1)
    } else {
      targetMap.set(s[i], targetMap.get(s[i]) + 1)
    }
  }
  if (isAnagram(pMap, targetMap) === true) {
    resultArr.push(0)
  }

  for (let i = pLen; i < sLen; i += 1 || 0) {
    const deletedItem = targetArr.shift()
    const deletedMappedValue = targetMap.get(deletedItem)
    const isOnly = deletedMappedValue === 1
    if (isOnly === true) {
      targetMap.delete(deletedItem)
    } else {
      targetMap.set(deletedItem, deletedMappedValue - 1)
    }
    const newItem = s[i]
    targetMap.set(newItem, (targetMap.get(newItem) || 0) + 1)
    targetArr.push(newItem)
    if (isAnagram(pMap, targetMap) === true) {
      resultArr.push(i - pLen + 1)
    }
  }

  return resultArr
}

findAnagrams('cbaebabacd', 'abc')
findAnagrams('abab', 'ab')
findAnagrams('acdcaeccde', 'c')
findAnagrams('ababababab', 'aab')
