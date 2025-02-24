// [Medium] 267. Palindrome Permutation II
// 267_palindrome_permutation_ii

// https://leetcode.com/problems/palindrome-permutation-ii
// Runtime: 136 ms, faster than 100.00% of TypeScript online submissions for Palindrome Permutation II.
// Memory Usage: 56 MB, less than 100.00% of TypeScript online submissions for Palindrome Permutation II.


const getReverseString = (str: string): string => str.split('').reverse().join('')

function generatePalindromes(s: string): string[] {
  const resultSet = new Set<string>()
  const dfs = (arr: string[], str: string) => {
    const arrLen = arr.length
    if (arrLen === 0) {
      resultSet.add(str)
    }
    for (let i: number = 0; i < arrLen; i += 1) {
      const tempArr = [...arr]
      dfs(tempArr, str + tempArr.splice(i, 1)[0])
    }
  }

  const strMap = new Map<string, number>()
  const sLen = s.length
  for (let i: number = 0; i < sLen; i += 1) {
    const str = s[i]
    strMap.set(str, (strMap.get(str) || 0) + 1)
  }
  const oddArr: [string, number][] = []
  const evenArr: [string, number][] = []
  for (const item of strMap) {
    if (item[1] % 2 === 1) {
      oddArr.push(item)
      if (oddArr.length > 1) {
        return []
      }
    } else {
      evenArr.push(item)
    }
  }
  if (evenArr.length === 0 && oddArr.length === 1 && oddArr[0][1] === 1) {
    return [oddArr[0][0]]
  }

  let halfStr = ''
  evenArr.forEach((item) => (halfStr += item[0].repeat(item[1] / 2)))
  if (oddArr.length > 0) {
    const [str, count] = oddArr[0]
    if (count > 1) {
      halfStr += str.repeat((count - 1) / 2)
    }
  }
  const halfStrLen = halfStr.length
  const halfStrArr = halfStr.split('')

  for (let i: number = 0; i < halfStrLen; i += 1) {
    const tempArr = [...halfStrArr]
    dfs(tempArr, tempArr.splice(i, 1)[0])
  }

  const centerString = oddArr.length > 0 ? oddArr[0][0] : ''
  return [...resultSet].map((item) => item + centerString + getReverseString(item))
}

// generatePalindromes('aabb') //?
// generatePalindromes('aabbc') //?
// generatePalindromes('aabbccc') //?
// generatePalindromes('abc') //?

// generatePalindromes('aaaabbcdd') //?
// generatePalindromes('aaaabbcccdd') //?
generatePalindromes('a') //?
generatePalindromes('aaa') //?
