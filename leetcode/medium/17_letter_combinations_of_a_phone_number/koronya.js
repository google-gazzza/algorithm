// [Medium] 17. Letter Combinations of a Phone Number
// 17_letter_combinations_of_a_phone_number

// https://leetcode.com/problems/letter-combinations-of-a-phone-number
// Runtime: 68 ms, faster than 96.53% of JavaScript online submissions for Letter Combinations of a Phone Number.
// Memory Usage: 38.5 MB, less than 76.45% of JavaScript online submissions for Letter Combinations of a Phone Number.

const strMap = new Map()
strMap.set('2', ['a', 'b', 'c'])
strMap.set('3', ['d', 'e', 'f'])
strMap.set('4', ['g', 'h', 'i'])
strMap.set('5', ['j', 'k', 'l'])
strMap.set('6', ['m', 'n', 'o'])
strMap.set('7', ['p', 'q', 'r', 's'])
strMap.set('8', ['t', 'u', 'v'])
strMap.set('9', ['w', 'x', 'y', 'z'])

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (digits === '') {
    return []
  }
  const firstArr = strMap.get(digits[0])
  const digitsLen = digits.length
  const resultArr = []
  const dfs = (next, str) => {
    if (next === digitsLen) {
      resultArr.push(str)
    } else if (next < digitsLen) {
      const nextArr = strMap.get(digits[next])
      const nextArrLen = nextArr.length
      for (let i = 0; i < nextArrLen; i += 1 || 0) {
        dfs(next + 1, str + nextArr[i])
      }
    }
  }

  const firstArrLen = firstArr.length
  for (let i = 0; i < firstArrLen; i += 1 || 0) {
    dfs(1, firstArr[i])
  }

  return resultArr
}

letterCombinations('23') //?
letterCombinations('22') //?
letterCombinations('2') //?
letterCombinations('') //?
