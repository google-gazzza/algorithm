// [Medium] 1202. Smallest String With Swaps
// 1202_smallest_string_with_swaps

// https://leetcode.com/problems/smallest-string-with-swaps
// Runtime: 634 ms, faster than 26.18% of JavaScript online submissions for Smallest String With Swaps.
// Memory Usage: 69.6 MB, less than 98.05% of JavaScript online submissions for Smallest String With Swaps.

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
const smallestStringWithSwaps = function (s, pairs) {
  if (pairs.length === 0) {
    return s
  }
  const sLen = s.length
  const resultArr = []
  const strMap = new Map()
  const groupMap = new Map()
  const groupNumberArr = Array.from({ length: sLen }).map((_, index) => index)

  const findAndSetGroupNumber = (number) => {
    const matchNumber = groupNumberArr[number]
    if (number === matchNumber) {
      return number
    }
    const findNumber = findAndSetGroupNumber(matchNumber)
    groupNumberArr[number] = findNumber
    return findNumber
  }

  pairs.forEach(([first, second]) => {
    const firstGroup = findAndSetGroupNumber(first)
    const secondGroup = findAndSetGroupNumber(second)
    groupNumberArr[secondGroup] = firstGroup
  })
  for (let i = 0; i < sLen; i += 1 || 0) {
    const str = s[i]
    const group = findAndSetGroupNumber(i)
    if (strMap.has(str) === true) {
      strMap.get(str).push(i)
    } else {
      strMap.set(str, [i])
    }
    if (groupMap.has(group) === true) {
      groupMap.get(group).push(i)
    } else {
      groupMap.set(group, [i])
    }
  }
  const sortedArr = [...strMap].sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0))
  sortedArr.forEach(([str, arr]) => {
    arr.forEach((item) => {
      const newIndex = groupMap.get(groupNumberArr[item]).shift()
      resultArr[newIndex] = str
    })
  })
  return resultArr.join('')
}

const ascSortString = (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
const ascSortNumber = (a, b) => a - b

// TLE...
const smallestStringWithSwaps2 = function (s, pairs) {
  if (pairs.length === 0) {
    return s
  }
  const strMap = new Map()
  const keyMap = new Map()
  let lastKey = -1

  pairs.forEach((pair) => {
    const [first, second] = pair
    const hasFirst = strMap.has(first)
    const hasSecond = strMap.has(second)

    if (!hasFirst && !hasSecond) {
      lastKey += 1
      keyMap.set(lastKey, new Set([first, second]))
      strMap.set(first, lastKey)
      strMap.set(second, lastKey)
    } else if (hasFirst && !hasSecond) {
      const key = strMap.get(first)
      strMap.set(second, key)
      keyMap.get(key).add(second)
    } else if (!hasFirst && hasSecond) {
      const key = strMap.get(second)
      strMap.set(first, key)
      keyMap.get(key).add(first)
    } else {
      const beforeKey = strMap.get(first)
      const afterKey = strMap.get(second)
      if (beforeKey !== afterKey) {
        const afterKeyMapSet = keyMap.get(afterKey)
        keyMap.get(beforeKey).forEach((item) => {
          afterKeyMapSet.add(item)
          strMap.set(item, afterKey)
        })
        keyMap.delete(beforeKey)
      }
    }
  })
  const sLen = s.length
  const resultArr = Array.from({ length: sLen }).map((_, i) => s[i])

  keyMap

  for (const item of keyMap) {
    const [, valSet] = item
    const valSetArr = [...valSet]
    const sortedStrArr = valSetArr.map((i) => s[i]).sort(ascSortString)
    valSetArr.sort(ascSortNumber).forEach((index) => {
      resultArr[index] = sortedStrArr.shift()
    })
  }

  return resultArr.reduce((acc, cur) => acc + cur, '')
}

// smallestStringWithSwaps('dcab', [
//   [0, 3],
//   [1, 2],
// ])
smallestStringWithSwaps('dcab', [
  [0, 3],
  [1, 2],
  [0, 2],
])
// smallestStringWithSwaps('cba', [
//   [0, 1],
//   [1, 2],
// ])
// smallestStringWithSwaps('dcab', [])
// smallestStringWithSwaps('qdwyt', [
//   [2, 3],
//   [3, 2],
//   [0, 1],
//   [4, 0],
//   [3, 2],
// ])
// smallestStringWithSwaps('udyyek', [
//   [3, 3],
//   [3, 0],
//   [5, 1],
//   [3, 1],
//   [3, 4],
//   [3, 5],
// ])
