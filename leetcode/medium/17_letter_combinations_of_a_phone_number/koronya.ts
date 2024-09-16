// [Medium] 17. Letter Combinations of a Phone Number
// 17_letter_combinations_of_a_phone_number

// https://leetcode.com/problems/letter-combinations-of-a-phone-number
// Runtime: 84 ms, faster than 46.92% of TypeScript online submissions for Letter Combinations of a Phone Number.
// Memory Usage: 39.3 MB, less than 52.05% of TypeScript online submissions for Letter Combinations of a Phone Number.

const strMap = new Map<string, string[]>()
strMap.set('2', ['a', 'b', 'c'])
strMap.set('3', ['d', 'e', 'f'])
strMap.set('4', ['g', 'h', 'i'])
strMap.set('5', ['j', 'k', 'l'])
strMap.set('6', ['m', 'n', 'o'])
strMap.set('7', ['p', 'q', 'r', 's'])
strMap.set('8', ['t', 'u', 'v'])
strMap.set('9', ['w', 'x', 'y', 'z'])

function letterCombinations(digits: string): string[] {
  if (digits === '') {
    return []
  }
  const firstArr: string[] = strMap.get(digits[0])!
  const digitsLen: number = digits.length
  const resultArr: string[] = []
  const dfs = (next: number, str: string) => {
    if (next === digitsLen) {
      resultArr.push(str)
    } else if (next < digitsLen) {
      const nextArr: string[] = strMap.get(digits[next])!
      const nextArrLen: number = nextArr.length
      for (let i: number = 0; i < nextArrLen; i += 1) {
        dfs(next + 1, str + nextArr[i])
      }
    }
  }

  const firstArrLen: number = firstArr.length
  for (let i: number = 0; i < firstArrLen; i += 1) {
    dfs(1, firstArr[i])
  }

  return resultArr
}

letterCombinations('23') //?
letterCombinations('22') //?
letterCombinations('2') //?
letterCombinations('') //?
