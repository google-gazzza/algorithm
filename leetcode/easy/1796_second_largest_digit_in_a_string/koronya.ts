// [Easy] 1796. Second Largest Digit in a String
// 1796_second_largest_digit_in_a_string

// https://leetcode.com/problems/second-largest-digit-in-a-string
// Runtime: 92 ms, faster than 78.13% of TypeScript online submissions for Second Largest Digit in a String.
// Memory Usage: 40 MB, less than 100.00% of TypeScript online submissions for Second Largest Digit in a String.


const CHAR_CODE_OF_0: number = '0'.charCodeAt(0) //?
const CHAR_CODE_OF_9: number = '9'.charCodeAt(0) //?

const isNumber = (str: string): boolean => {
  const charCode: number = str.charCodeAt(0)
  return charCode >= CHAR_CODE_OF_0 && charCode <= CHAR_CODE_OF_9
}

function secondHighest(s: string): number {
  const numSet = new Set<number>()
  const sLen: number = s.length
  for (let i: number = 0; i < sLen; i += 1) {
    const str: string = s[i]
    if (isNumber(str) === true) {
      numSet.add(Number(str))
    }
  }

  const numSetArr: number[] = [...numSet]
  return numSetArr.length < 2 ? -1 : numSetArr.sort((a, b) => b - a)[1]
}

secondHighest('dfa12321afd') //?
secondHighest('abc1111') //?
