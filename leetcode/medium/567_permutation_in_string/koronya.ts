// [Easy] 567. Permutation in String
// 567_permutation_in_string

// https://leetcode.com/problems/permutation-in-string
// Runtime: 195 ms, faster than 50.38% of TypeScript online submissions for Permutation in String.
// Memory Usage: 51 MB, less than 14.58% of TypeScript online submissions for Permutation in String.

const isAnagram = (s1Map: Map<string, number>, targetMap: Map<string, number>): boolean => {
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

function checkInclusion(s1: string, s2: string): boolean {
  const s1Len = s1.length
  const s2Len = s2.length
  const s1Map = new Map<string, number>()
  for (let i: number = 0; i < s1Len; i += 1) {
    const str = s1[i]
    s1Map.set(str, (s1Map.get(str) || 0) + 1)
  }

  const targetMap = new Map<string, number>()
  const targetArr = s2.split('').slice(0, s1Len)
  for (let i: number = 0; i < s1Len; i += 1) {
    if (targetMap.has(s2[i]) === false) {
      targetMap.set(s2[i], 1)
    } else {
      targetMap.set(s2[i], targetMap.get(s2[i])! + 1)
    }
  }
  if (isAnagram(s1Map, targetMap) === true) {
    return true
  }

  for (let i: number = s1Len; i < s2Len; i += 1) {
    const deletedItem = targetArr.shift()!
    const deletedMappedValue = targetMap.get(deletedItem)!
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
