// [Easy] 567. Permutation in String
// 567_permutation_in_string

// https://leetcode.com/problems/permutation-in-string
// Runtime: 112 ms, faster than 72.03% of JavaScript online submissions for Permutation in String.
// Memory Usage: 49.9 MB, less than 16.41% of JavaScript online submissions for Permutation in String.

const isAnagram = (s1Map, targetMap) => {
  const s1MapSize = s1Map.size
  const targetMapSize = targetMap.size
  if (s1MapSize !== targetMapSize) {
    return false
  }
  return [...s1Map].every((item) => {
    const [key, value] = item
    return targetMap.get(key) === value
  })
}

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
  const s1Len = s1.length
  const s2Len = s2.length
  const s1Map = new Map()
  for (let i = 0; i < s1Len; i += 1 || 0) {
    const str = s1[i]
    s1Map.set(str, (s1Map.get(str) || 0) + 1)
  }

  const targetMap = new Map()
  const targetArr = s2.split('').slice(0, s1Len)
  for (let i = 0; i < s1Len; i += 1 || 0) {
    if (targetMap.has(s2[i]) === false) {
      targetMap.set(s2[i], 1)
    } else {
      targetMap.set(s2[i], targetMap.get(s2[i]) + 1)
    }
  }
  if (isAnagram(s1Map, targetMap) === true) {
    return true
  }

  for (let i = s1Len; i < s2Len; i += 1 || 0) {
    const deletedItem = targetArr.shift()
    const deletedMappedValue = targetMap.get(deletedItem)
    const isOnly = deletedMappedValue === 1
    if (isOnly === true) {
      targetMap.delete(deletedItem)
    } else {
      targetMap.set(deletedItem, deletedMappedValue - 1)
    }
    const newItem = s2[i]
    targetMap.set(newItem, (targetMap.get(newItem) || 0) + 1)
    targetArr.push(newItem)
    if (isAnagram(s1Map, targetMap) === true) {
      return true
    }
  }

  return false
}

checkInclusion('ab', 'eidbaooo')
checkInclusion('ab', 'eidboaoo')
