// [Easy] 1945. Sum of Digits of String After Convert
// 1945_sum_of_digits_of_string_after_convert

// https://leetcode.com/problems/sum-of-digits-of-string-after-convert
// Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for Sum of Digits of String After Convert.
// Memory Usage: 41.3 MB, less than 35.71% of TypeScript online submissions for Sum of Digits of String After Convert.

const CHAR_CODE_OF_A: number = 'a'.charCodeAt(0)
const getCharCode = (str: string): number => str.charCodeAt(0) - CHAR_CODE_OF_A + 1
const getSum = (acc, cur) => Number(acc) + Number(cur)

function getLucky(s: string, k: number): number {
  let resultStr: string = s.split('').reduce((acc, cur) => acc + getCharCode(cur), '')
  while (k > 0) {
    resultStr = String(resultStr.split('').reduce(getSum, 0))
    k -= 1
  }

  return Number(resultStr)
}

getLucky('iiii', 1) //?
getLucky('leetcode', 2) //?
getLucky('zbax', 2) //?
