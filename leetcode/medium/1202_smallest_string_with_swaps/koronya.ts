// [Medium] 1202. Smallest String With Swaps
// 1202_smallest_string_with_swaps

// https://leetcode.com/problems/smallest-string-with-swaps
// Runtime: 623 ms, faster than 32.26% of TypeScript online submissions for Smallest String With Swaps.
// Memory Usage: 69.3 MB, less than 100.00% of TypeScript online submissions for Smallest String With Swaps.

function smallestStringWithSwaps(s: string, pairs: number[][]): string {
  if (pairs.length === 0) {
    return s
  }
  const sLen = s.length
  const resultArr: string[] = []
  const strMap = new Map<string, number[]>()
  const groupMap = new Map<number, number[]>()
  const groupNumberArr = Array.from({ length: sLen }).map((_, index) => index)

  const findAndSetGroupNumber = (number: number): number => {
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
  for (let i: number = 0; i < sLen; i += 1) {
    const str = s[i]
    const group = findAndSetGroupNumber(i)
    if (strMap.has(str) === true) {
      strMap.get(str)!.push(i)
    } else {
      strMap.set(str, [i])
    }
    if (groupMap.has(group) === true) {
      groupMap.get(group)!.push(i)
    } else {
      groupMap.set(group, [i])
    }
  }
  const sortedArr = [...strMap].sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0))
  sortedArr.forEach(([str, arr]) => {
    arr.forEach((item) => {
      const newIndex = groupMap.get(groupNumberArr[item])!.shift()
      resultArr[newIndex!] = str
    })
  })
  return resultArr.join('')
}
