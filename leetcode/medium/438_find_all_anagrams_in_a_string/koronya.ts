// [Medium] 438. Find All Anagrams in a String
// 438_find_all_anagrams_in_a_string

// https://leetcode.com/problems/find-all-anagrams-in-a-string
// Runtime: 346 ms, faster than 31.85% of TypeScript online submissions for Find All Anagrams in a String.
// Memory Usage: 52.4 MB, less than 5.10% of TypeScript online submissions for Find All Anagrams in a String.

const isAnagram = (pMap: Map<string, number>, targetMap: Map<string, number>): boolean => {
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

function findAnagrams(s: string, p: string): number[] {
  const resultArr: number[] = []
  const sLen = s.length
  const pLen = p.length
  const pMap = new Map<string, number>()
  for (let i: number = 0; i < pLen; i += 1) {
    pMap.set(p[i], (pMap.get(p[i]) || 0) + 1)
  }

  const targetMap = new Map<string, number>()
  const targetArr = s.split('').slice(0, pLen)
  for (let i: number = 0; i < pLen; i += 1) {
    if (targetMap.has(s[i]) === false) {
      targetMap.set(s[i], 1)
    } else {
      targetMap.set(s[i], targetMap.get(s[i])! + 1)
    }
  }
  if (isAnagram(pMap, targetMap) === true) {
    resultArr.push(0)
  }

  for (let i: number = pLen; i < sLen; i += 1) {
    const deletedItem = targetArr.shift()!
    const deletedMappedValue = targetMap.get(deletedItem)!
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
